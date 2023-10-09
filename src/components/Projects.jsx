import React from 'react';
import ProjectItem from '../components/ProjectItem';
import project1 from '../projects/project1.png';
import project2 from '../projects/project2.png';
import project3 from '../projects/project3.png';
import project4 from '../projects/project4.png';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#272A21] dark:text-slate-300">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Rancid Tomatillos App"
            backgroundImg={project1}
            projectUrl="/rancidTomatillos"
          />
          <ProjectItem
            title="Beats 4 Devs App"
            backgroundImg={project2}
            projectUrl="/beats"
          />
          <ProjectItem
            title="Equilibrium App"
            backgroundImg={project3}
            projectUrl="/equil"
          />
          <ProjectItem
            title="Rock Paper Scissors App"
            backgroundImg={project4}
            projectUrl="/rps"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
