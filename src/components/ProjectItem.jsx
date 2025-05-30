import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full p-4 group hover:bg-gradient-to-r from-[#272A21] to-[#332115] project-card">
      <div className="relative w-full h-[300px]">
        <Image
          className="rounded-xl group-hover:opacity-20"
          src={backgroundImg}
          alt="Project background"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          React JS / Full Stack
        </p>
        <Link href={projectUrl} aria-label="View Project">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
