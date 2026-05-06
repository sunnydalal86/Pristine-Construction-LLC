/**
 * Copies project images from the Assets workspace into public/portfolio/
 * and generates src/data/portfolioProjects.generated.ts
 *
 * Run: npm run sync:portfolio
 *
 * Deploy/static hosts: commit both public/portfolio/ and
 * src/data/portfolioProjects.generated.ts (CI machines typically will not have the
 * Assets folder path below).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ASSETS_ROOT =
  "/Users/sunnydalal/Documents/Cursor/Pristine Construction (Assets)";
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEST_ROOT = path.join(REPO_ROOT, "public", "portfolio");
const OUT_FILE = path.join(REPO_ROOT, "src", "data", "portfolioProjects.generated.ts");

const PROJECT_DEFS = [
  {
    sourceDir: "123 Corwin St. Bathroom",
    slug: "123-corwin-bathroom",
    title: "123 Corwin Street · Bathroom",
    category: "Residential bath",
    projectType: "Residential remodel",
    location: "Bay Area, CA",
    scope: "Full bathroom renovation, custom tile, fixture integration",
    completion: "Recent project",
  },
  {
    sourceDir: "466 Benvenue ADU",
    slug: "466-benvenue-adu",
    title: "466 Benvenue · Accessory dwelling",
    category: "New ADU",
    projectType: "Residential — ADU",
    location: "Bay Area, CA",
    scope: "Design-build ADU — structure, envelope, interior build-out",
    completion: "Recent project",
    coverImage: "DSC02103.jpg",
  },
  {
    sourceDir: "Bean Creek",
    slug: "bean-creek",
    title: "Bean Creek residence",
    category: "Whole home",
    projectType: "Residential",
    location: "Bay Area, CA",
    scope: "Interior renovation, architectural millwork, finish carpentry",
    completion: "Recent project",
  },
  {
    sourceDir: "California St.",
    slug: "california-street",
    title: "California Street",
    category: "Interior architecture",
    projectType: "Residential remodel",
    location: "Bay Area, CA",
    scope: "Interior renovation, lighting, bespoke details",
    completion: "Recent project",
  },
  {
    sourceDir: "Corwin St.",
    slug: "corwin-street",
    title: "Corwin Street",
    category: "Residential",
    projectType: "Residential remodel",
    location: "Bay Area, CA",
    scope: "Interior renovation, finish work, spatial refinement",
    completion: "Recent project",
  },
  {
    sourceDir: "Drake St.",
    slug: "drake-street",
    title: "Drake Street",
    category: "Residential",
    projectType: "Residential remodel",
    location: "Bay Area, CA",
    scope: "Open plan refinement, kitchen and living zones",
    completion: "Recent project",
    coverImage: "spoof (3 of 7).JPG",
  },
  {
    sourceDir: "Ellsworth St. (Whole House Remodel)",
    slug: "ellsworth-whole-house",
    title: "Ellsworth Street · Whole house",
    category: "Whole house",
    projectType: "Whole-home remodel",
    location: "Bay Area, CA",
    scope: "Full interior program — planning, build, finishes",
    completion: "Recent project",
  },
  {
    sourceDir: "Horizontal:Multiple Projects",
    slug: "selected-residential-work",
    title: "Selected residential work",
    category: "Editorial",
    projectType: "Residential — multiple",
    location: "Bay Area, CA",
    scope: "Curated interiors across distinct projects and scopes",
    completion: "Recent work",
    coverImage: "spoof (1 of 10).JPG",
  },
  {
    sourceDir: "Nelson Ct.",
    slug: "nelson-court",
    title: "Nelson Court",
    category: "Residential",
    projectType: "Residential remodel",
    location: "Bay Area, CA",
    scope: "Interior renovation, custom details, finish quality",
    completion: "Recent project",
    coverImage: "DSC06718-HDR-Edit.jpg",
  },
];

const DESCRIPTION =
  "A curated look at the craftsmanship, finish quality, and project execution behind this Pristine Construction project.";

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

function safeSegment(name) {
  return name
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .toLowerCase();
}

function scoreCover(filename) {
  const f = filename.toUpperCase();
  if (f.startsWith("DJI_")) return 120;
  if (f.includes("-HDR") || f.includes("HDR")) return 90;
  if (f.includes("PRINT")) return 70;
  if (f.startsWith("DSC")) return 65;
  if (f.includes("SPOOF")) return 40;
  return 30;
}

function collectImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    if (!IMAGE_EXT.test(e.name)) continue;
    files.push(e.name);
  }
  return files.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );
}

function orderImagesForCover(names, preferredCover) {
  const copy = [...names];
  copy.sort((a, b) => {
    const d = scoreCover(b) - scoreCover(a);
    if (d !== 0) return d;
    return a.localeCompare(b, undefined, { numeric: true });
  });
  if (preferredCover) {
    const wanted = preferredCover.toLowerCase();
    const idx = copy.findIndex((n) => n.toLowerCase() === wanted);
    if (idx > 0) {
      const [file] = copy.splice(idx, 1);
      copy.unshift(file);
    }
  }
  return copy;
}

function ensureEmptyDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function main() {
  if (!fs.existsSync(ASSETS_ROOT)) {
    console.error("Assets root not found:", ASSETS_ROOT);
    process.exit(1);
  }

  ensureEmptyDir(DEST_ROOT);

  const projects = [];

  for (const def of PROJECT_DEFS) {
    const src = path.join(ASSETS_ROOT, def.sourceDir);
    const srcImages = collectImages(src);
    if (srcImages.length === 0) {
      console.warn("No images for", def.sourceDir);
      continue;
    }

    const ordered = orderImagesForCover(srcImages, def.coverImage);
    const destDir = path.join(DEST_ROOT, def.slug);
    fs.mkdirSync(destDir, { recursive: true });

    const publicPaths = [];
    let idx = 0;
    for (const origName of ordered) {
      idx += 1;
      const ext = path.extname(origName);
      const base = safeSegment(path.basename(origName, ext)) || "image";
      const destName = `${String(idx).padStart(3, "0")}_${base}${ext.toLowerCase()}`;
      const from = path.join(src, origName);
      const to = path.join(destDir, destName);
      fs.copyFileSync(from, to);
      publicPaths.push(`/portfolio/${def.slug}/${destName}`);
    }

    projects.push({
      id: def.slug,
      slug: def.slug,
      title: def.title,
      category: def.category,
      projectType: def.projectType,
      location: def.location,
      scope: def.scope,
      completion: def.completion,
      description: DESCRIPTION,
      images: publicPaths,
    });
  }

  const ts = `// Generated by scripts/sync-portfolio-assets.mjs — do not edit by hand.

export type PortfolioProjectGenerated = {
  id: string;
  slug: string;
  title: string;
  category: string;
  projectType: string;
  location: string;
  scope: string;
  completion: string;
  description: string;
  images: string[];
};

export const PORTFOLIO_PROJECTS_GENERATED: PortfolioProjectGenerated[] = ${JSON.stringify(
    projects,
    null,
    2
  )};
`;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, ts);
  console.log(`Wrote ${projects.length} projects, ${OUT_FILE}`);
}

main();
