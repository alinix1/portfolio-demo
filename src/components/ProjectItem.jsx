import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full group hover:bg-gradient-to-r from-[#272A21] to-[#332115] project-card">
      <div className="relative w-full h-[300px]">
        <Image
          className="rounded-xl group-hover:opacity-20"
          src={backgroundImg}
          alt="Project background"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <Link href={projectUrl} aria-label="View Project">
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/50 px-4 py-1 rounded">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">
            React JS / Full Stack
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
