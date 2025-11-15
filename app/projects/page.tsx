// pages/projects.js
import ProjectCard from "./ProjectCard";
import { Project } from "../types";
import  project_data from "../data/projects.json";

export const metadata = {
  title: "Projects | Tech Portfolio",
  description: "Explore my projects and see what I've been working on.",
};

export default function Projects() {
  const projects: Project[] = project_data;
  return (
    <div>
      <h1 className="text-3xl p-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
