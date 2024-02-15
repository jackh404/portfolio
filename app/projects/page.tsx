// pages/projects.js
import ProjectCard from "./ProjectCard";
import { Project } from "../types";

export const metadata = {
  title: "Projects | Tech Portfolio",
  description: "Explore my projects and see what I've been working on.",
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "ECOiNSIGHT",
      description:
        "EcoInsight is an innovative web application aimed at helping individuals reduce their environmental impact. Our platform integrates assessments, recommendation systems, and project tracking, supported by a strong community focus.",
      image: "/ecoinsight.png",
      link: "https://ecoinsight.vercel.app",
      github: "https://github.com/jackh404/ecoinsight",
      skills: ["React.JS", "Flask SQLAlchemy", "TypeScript"],
      demo: "https://youtu.be/2Qq7R_hVwkk",
    },
    {
      title: "Portfolio",
      description:
        "This portfolio website is a simple Next.JS app aimed at aquanting visitors with my personal story and my work in software development. It is coded in TypeScript with Tailwind CSS and DaisyUI for styling.",
      image: "/portfolio.png",
      link: "https://jackhenza.com",
      github: "https://github.com/jackh404/portfolio",
      skills: ["Next.JS", "TypeScript", "Tailwind CSS"],
    },
  ];
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
