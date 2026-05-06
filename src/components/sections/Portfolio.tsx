"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { PORTFOLIO_PROJECTS_GENERATED } from "@/data/portfolioProjects.generated";
import PortfolioGrid from "../portfolio/PortfolioGrid";
import ProjectDetailModal from "../portfolio/ProjectDetailModal";
import Lightbox from "../portfolio/Lightbox";
import type { PortfolioProject } from "../portfolio/types";

const PROJECTS: PortfolioProject[] = PORTFOLIO_PROJECTS_GENERATED;

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ projectId: string; index: number } | null>(
    null
  );

  const selected = useMemo(
    () => PROJECTS.find((p) => p.id === selectedId) ?? null,
    [selectedId]
  );

  const lightboxProject = useMemo(
    () => (lightbox ? PROJECTS.find((p) => p.id === lightbox.projectId) ?? null : null),
    [lightbox]
  );

  const detailOpen = selectedId !== null;
  const lightboxOpen = lightbox !== null;

  useEffect(() => {
    if (!detailOpen && !lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [detailOpen, lightboxOpen]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const onPrevImage = useCallback(() => {
    setLightbox((s) => {
      if (!s) return s;
      const p = PROJECTS.find((x) => x.id === s.projectId);
      if (!p) return s;
      const n = p.images.length;
      return { ...s, index: (s.index - 1 + n) % n };
    });
  }, []);

  const onNextImage = useCallback(() => {
    setLightbox((s) => {
      if (!s) return s;
      const p = PROJECTS.find((x) => x.id === s.projectId);
      if (!p) return s;
      const n = p.images.length;
      return { ...s, index: (s.index + 1) % n };
    });
  }, []);

  const onGalleryImageClick = useCallback(
    (index: number) => {
      if (!selectedId) return;
      setLightbox({ projectId: selectedId, index });
    },
    [selectedId]
  );

  const lbOpen = lightboxOpen && lightboxProject !== null && lightbox !== null;
  const lbIndex = lightbox?.index ?? 0;
  const lbImages = lightboxProject?.images ?? [];

  return (
    <SectionWrapper id="portfolio" bg="tan" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 text-forest [background-image:linear-gradient(90deg,rgb(47_49_46/0.045)_1px,transparent_1px),linear-gradient(rgb(47_49_46/0.045)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(180deg,black,transparent_95%)]"
        aria-hidden
      />

      <div className="relative text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-olive/50">
          06 / Portfolio
        </p>

        <div className="mx-auto mt-6 flex justify-center">
          <div className="h-px w-14 bg-forest/12" />
        </div>

        <h2 className="mx-auto mt-7 max-w-xl font-serif text-[clamp(1.85rem,3.2vw,2.85rem)] tracking-[-0.025em] text-forest">
          Featured Work
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-[1.65] text-forest/55">
          Explore a curated selection of Pristine Construction projects, showcasing the
          craftsmanship, precision, and finish quality behind every build.
        </p>

        <div className="mx-auto mt-8 h-px w-full max-w-sm bg-gradient-to-r from-transparent via-forest/12 to-transparent" />
      </div>

      <PortfolioGrid projects={PROJECTS} onSelectProject={setSelectedId} />

      <p className="relative mx-auto mt-16 max-w-lg text-center text-[0.88rem] leading-relaxed text-forest/48 lg:mt-20">
        Every project reflects the Pristine standard: disciplined execution, clean
        finishes, and details built to last.
      </p>

      <div className="relative mt-14 text-center lg:mt-18">
        <Button href="#contact" variant="ghost">
          Discuss Your Project
        </Button>
      </div>

      <ProjectDetailModal
        project={selected}
        onClose={() => setSelectedId(null)}
        onImageClick={onGalleryImageClick}
        suppressEscapeClose={lightboxOpen}
      />

      <Lightbox
        open={lbOpen}
        images={lbImages}
        index={lbIndex}
        projectTitle={lightboxProject?.title ?? ""}
        onClose={closeLightbox}
        onPrev={onPrevImage}
        onNext={onNextImage}
      />
    </SectionWrapper>
  );
}
