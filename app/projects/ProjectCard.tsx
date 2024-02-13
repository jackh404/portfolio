import { Project } from "../types";
import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectCard = (project: Project) => {
  return (
    <div className="card w-96 bg-neutral shadow-xl text-neutral-content">
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
        <div className="card-actions justify-end mt-2">
          {project.skills.map(skill => (
            <div className="badge badge-outline" key={skill}>
              {skill}
            </div>
          ))}
          <a href={project.demo} target="_blank">
            <FaYoutube className="w-8 h-8 mt-2 mr-2" />
          </a>
          <a href={project.github} target="_blank">
            <FaGithub className="w-8 h-8 mt-2 mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
