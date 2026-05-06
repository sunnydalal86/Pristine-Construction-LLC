"use client";

import type { PortfolioProject } from "./types";
import ProjectCard from "./ProjectCard";

type PortfolioGridProps = {
  projects: PortfolioProject[];
  onSelectProject: (id: string) => void;
};

export default function PortfolioGrid({ projects, onSelectProject }: PortfolioGridProps) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-2 lg:gap-8 xl:gap-9">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onOpen={() => onSelectProject(project.id)}
        />
      ))}
    </div>
  );
}
