"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import BlogPostModal, { type BlogPost } from "./BlogPostModal";

const POSTS: BlogPost[] = [
  {
    id: "bathroom-roi-bay-area",
    title: "Why Bathroom Remodels Are the Best ROI for Bay Area Homes",
    excerpt:
      "A well-executed bathroom renovation can return 60–70% of your investment while transforming your daily routine. Here's what drives that value.",
    date: "March 2024",
    image: "/images/bathroom-remodel.jpg",
    readTime: "4 min read",
    body: [
      "Kitchens may get the glory in listing photos, but in the Bay Area, secondary baths and primary suites quietly anchor resale value — especially when they feel intentional, leak-free, and current for the next buyer’s inspection.",
      "What moves the ROI isn’t novelty for its own sake. It’s layout efficiency (clear circulation, usable storage), durable wet-area detailing, consistent lighting tiers, ventilation that actually clears moisture, and a finish palette that stays warm without dating itself in five years.",
      "Local labor and material realities mean the best returns come from disciplined scope: prioritize waterproofing assemblies, thoughtfully placed fixtures, and tile transitions that won’t telegraph “patch job.” Splurge where you touch every day; economize where it’s invisible but still code-solid.",
      "If you’re planning to stay a while, weight the value toward daily experience — quiet fans, dimmable layers, a shower you don’t have to fight, storage that ends countertop clutter. If resale is the driver, keep choices legible to a broad audience and document any structural or plumbing upgrades for disclosure clarity.",
      "None of this replaces a detailed estimate for your specific home, but the pattern we see in the field is consistent: bathrooms that are dry, bright, and calmly detailed tend to hold their story when it’s time to sell.",
    ],
  },
  {
    id: "vet-contractor-bay-area",
    title: "How to Vet a Contractor in the Bay Area",
    excerpt:
      "Not all contractors are created equal. License verification, insurance, crew structure, and communication style — here's what actually matters.",
    date: "January 2024",
    image: "/images/kitchen-remodel.jpg",
    readTime: "5 min read",
    body: [
      "Start with the boring stuff: valid license class for the work, active workers’ comp and liability with your address on the certificate where appropriate, and a physical track record you can verify — not just a polished Instagram grid.",
      "Ask who is on site week to week. You want a named project lead, a realistic communication cadence (written updates, photo logs, meeting rhythm), and clarity on which trades are in-house versus long-standing partners. Ambiguity here is where schedules quietly slip.",
      "Request references that match your scope and permit complexity, then ask those homeowners about change orders: how they were priced, how quickly questions were answered, and how punch list items were closed. The answer pattern matters more than any single star rating.",
      "Review a sample contract and payment schedule. Milestones tied to inspection passes and visible progress beat large deposits with vague language. If someone won’t put scope, allowances, and contingency handling in writing, treat that as signal — not “flexibility.”",
      "Finally, trust your read on communication under mild stress. Remodeling is problem-solving in real time. The team you hire should sound steady when talking about unknowns, not evasive. This sample note is for education only; always do your own verification before signing.",
    ],
  },
  {
    id: "adu-permit-california",
    title: "The ADU Permit Process in California",
    excerpt:
      "Navigating permits doesn't have to be painful. A clear breakdown of timelines, requirements, and what to expect when building an ADU.",
    date: "December 2023",
    image: "/images/general-construction.jpg",
    readTime: "6 min read",
    body: [
      "Accessory dwelling units sit at the intersection of zoning, fire and life safety, utility capacity, and neighbor context. State-level guardrails have made many projects more feasible, but your city still controls the review path, fees, and design standards that land on the plans.",
      "A typical sequence looks like: feasibility (setbacks, height, lot coverage, parking triggers), schematic design aligned with those rules, full plan set with structural and MEP, then building permit submittal and plan check cycles. Timelines swing widely by jurisdiction and whether you’re converting existing space or building new.",
      "Expect separate touches with your power and water providers if you’re adding meters or upsizing service. Those external queues are often the hidden driver of “when we can actually break ground,” not the framing crew’s availability.",
      "During construction, inspections stack in a logical order: underground utilities, rough mechanical/electrical/plumbing, insulation and energy where applicable, then final. Your contractor should be staging work so failed inspections don’t cascade into idle days.",
      "This overview is intentionally high level — your property has specific constraints. Use it as a conversation map with your design-build team and your local planning counter, not as a substitute for jurisdiction-specific advice.",
    ],
  },
];

export default function Blog() {
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <SectionWrapper id="blog">
      <div className="text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/50">
          07 / Insights
        </p>
        <div className="mx-auto mt-8 flex items-center justify-center gap-5">
          <div className="h-px w-12 bg-olive/25" />
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-olive/70">
            Field Notes
          </span>
          <div className="h-px w-12 bg-olive/25" />
        </div>
        <h2 className="mt-8 font-serif text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.02em]">
          From the Field
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-forest/50">
          Practical knowledge from over a decade of Bay Area residential construction.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 lg:mt-20 lg:gap-10">
        {POSTS.map((post, i) => (
          <motion.button
            key={post.id}
            type="button"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onClick={() => setSelected(post)}
            className="group w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-tan/20 transition-all duration-500 group-hover:ring-olive/30 group-hover:shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.1em] text-olive/60">
                <time>{post.date}</time>
                <span className="h-0.5 w-0.5 rounded-full bg-olive/40" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2.5 font-serif text-lg leading-snug tracking-[-0.01em] transition-colors duration-300 group-hover:text-olive">
                {post.title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-forest/50">
                {post.excerpt}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <BlogPostModal post={selected} onClose={() => setSelected(null)} />
    </SectionWrapper>
  );
}
