"use client";

import type { PortfolioProject } from "./types";
import ProjectCard from "./ProjectCard";

type PortfolioGridProps = {
  projects: PortfolioProject[];
  onSelectProject: (id: string) => void;
};

function layoutClassForIndex(index: number): string {
  if (index === 0) {
    return "min-h-[min(54vh,600px)] md:col-span-2 lg:col-span-12 lg:min-h-[min(62vh,680px)]";
  }
  if (index === 1) {
    return "min-h-[min(40vh,380px)] md:col-span-1 lg:col-span-5 lg:min-h-[min(36vh,360px)]";
  }
  if (index === 2) {
    return "min-h-[min(40vh,380px)] md:col-span-1 lg:col-span-7 lg:min-h-[min(40vh,400px)] md:mt-3 lg:-mt-2";
  }
  if (index === 3) {
    return "min-h-[min(46vh,460px)] md:col-span-2 lg:col-span-12 lg:min-h-[min(52vh,520px)]";
  }

  const j = index - 4;
  const phase = j % 5;

  switch (phase) {
    case 0:
      return "min-h-[min(42vh,400px)] md:col-span-2 lg:col-span-8 lg:min-h-[min(44vh,440px)]";
    case 1:
      return "min-h-[min(38vh,360px)] md:col-span-1 lg:col-span-4 lg:min-h-[min(44vh,440px)]";
    case 2:
      return "min-h-[min(42vh,400px)] md:col-span-1 lg:col-span-7 lg:min-h-[min(40vh,400px)]";
    case 3:
      return "min-h-[min(42vh,400px)] md:col-span-1 lg:col-span-5 lg:min-h-[min(42vh,420px)] lg:pt-8";
    default:
      return "min-h-[min(44vh,440px)] md:col-span-2 lg:col-span-12 lg:min-h-[min(48vh,480px)]";
  }
}

export default function PortfolioGrid({ projects, onSelectProject }: PortfolioGridProps) {
  return (
    <div id="portfolio-explore" className="mt-20 scroll-mt-28 md:mt-24 lg:mt-36">
      <div className="grid grid-cols-1 gap-x-10 gap-y-11 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-14 xl:gap-x-12 xl:gap-y-[4.75rem]">
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
    </div>
  );
}
