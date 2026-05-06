"use client";

import type { PortfolioProject } from "./types";
import ProjectCard from "./ProjectCard";

type PortfolioGridProps = {
  projects: PortfolioProject[];
  onSelectProject: (id: string) => void;
};

function layoutClassForIndex(index: number): string {
  if (index === 0) {
    return "min-h-[min(52vh,560px)] md:col-span-2 lg:col-span-8 lg:row-span-2 lg:min-h-[min(60vh,620px)]";
  }
  if (index === 1) {
    return "min-h-[min(38vh,360px)] md:col-span-1 lg:col-span-4 lg:min-h-[min(28vh,300px)]";
  }
  if (index === 2) {
    return "min-h-[min(38vh,360px)] md:col-span-1 lg:col-span-4 lg:min-h-[min(28vh,300px)]";
  }
  const j = index - 3;
  return j % 2 === 0
    ? "min-h-[min(40vh,400px)] md:col-span-2 lg:col-span-7 lg:min-h-[min(34vh,380px)]"
    : "min-h-[min(40vh,400px)] md:col-span-2 lg:col-span-5 lg:min-h-[min(34vh,380px)]";
}

export default function PortfolioGrid({ projects, onSelectProject }: PortfolioGridProps) {
  return (
    <div
      id="portfolio-explore"
      className="mt-20 grid scroll-mt-28 grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:mt-32 lg:auto-rows-min lg:grid-cols-12 lg:gap-x-12 lg:gap-y-14"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          layoutClass={layoutClassForIndex(index)}
          onOpen={() => onSelectProject(project.id)}
        />
      ))}
    </div>
  );
}
