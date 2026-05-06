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
        className="pointer-events-none absolute inset-0 text-forest [background-image:linear-gradient(90deg,rgb(47_49_46/0.028)_1px,transparent_1px),linear-gradient(rgb(47_49_46/0.028)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(180deg,black_55%,transparent)]"
        aria-hidden
      />

      <header className="relative mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-olive/45">
          05 / Portfolio
        </p>

        <div className="mx-auto mt-8 flex justify-center">
          <div className="h-px w-28 bg-forest/[0.11]" />
        </div>

        <h2 className="mx-auto mt-10 max-w-3xl font-serif text-[clamp(2rem,4.2vw,3.25rem)] font-normal leading-[1.06] tracking-[-0.035em] text-forest">
          Case Study Gallery
        </h2>

        <p className="mx-auto mt-8 max-w-xl px-2 text-[0.98rem] font-normal leading-[1.78] tracking-[-0.01em] text-forest/50">
          An editorial archive of craftsmanship and execution — selected for
          scale, restraint, and the kind of finish work that survives daily use.
        </p>

        <div className="mx-auto mt-12 h-px w-full max-w-sm bg-gradient-to-r from-transparent via-forest/[0.12] to-transparent" />
      </header>

      <PortfolioGrid projects={PROJECTS} onSelectProject={setSelectedId} />

      <p className="relative mx-auto mt-24 max-w-lg text-center text-[0.9rem] font-normal leading-[1.72] tracking-[-0.008em] text-forest/46 lg:mt-28">
        Every project reflects the Pristine standard: disciplined execution, clean
        finishes, and details built to last.
      </p>

      <div className="relative mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6 lg:mt-20">
        <Button href="#portfolio-explore" variant="ghost">
          Explore the Portfolio
        </Button>
        <Button href="#contact" variant="solid">
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
