import React from "react";
import ProjectItem from "../components/ProjectItem";
import project1 from "../projects/project1.png";
import project2 from "../projects/project2.png";
import project3 from "../projects/project3.png";
import project4 from "../projects/project4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-80">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className=" text-xl tracking-widest uppercase text-[#070400] dark:text-slate-300 md:mt-20">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="project-card rounded-lg overflow-hidden">
            <ProjectItem
              title="Rancid Tomatillos App"
              backgroundImg={project1}
              projectUrl="/rancidTomatillos"
            />
          </div>
          <div className="project-card rounded-lg overflow-hidden">
            <ProjectItem
              title="Beats 4 Devs App"
              backgroundImg={project2}
              projectUrl="/beats"
            />
          </div>
          <div className="project-card rounded-lg overflow-hidden">
            <ProjectItem
              title="Equilibrium App"
              backgroundImg={project3}
              projectUrl="/equil"
            />
          </div>
          <div className="project-card rounded-lg overflow-hidden">
            <ProjectItem
              title="Rock Paper Scissors App"
              backgroundImg={project4}
              projectUrl="/rps"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
