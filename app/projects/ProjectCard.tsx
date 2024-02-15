import { Project } from "../types";
import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectCard = (project: Project) => {
  return (
    <div className="card max-w-md bg-neutral shadow-md text-neutral-content shadow-neutral-700">
      <figure>
        <a href={project.link} target="_blank">
          <img
            src={project.image}
            alt={`${project.title} image`}
            className="hover:brightness-125"
          />
        </a>
      </figure>
      <div className="card-body">
        <a href={project.link}>
          <h2 className="card-title hover:underline">{project.title}</h2>
        </a>
        <p>{project.description}</p>
        <div className="card-actions mt-2">
          {project.skills.map(skill => (
            <div className="badge badge-outline" key={skill}>
              {skill}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          {project.demo ? (
            <a href={project.demo} target="_blank">
              <FaYoutube className="w-8 h-8 mt-2 mr-2" />
            </a>
          ) : null}
          <a href={project.github} target="_blank">
            <FaGithub className="w-8 h-8 mt-2 mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
