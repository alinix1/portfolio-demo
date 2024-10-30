import React from "react";
import Image from "next/image";
import project2 from "../projects/project2.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const beats4devs = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={project2}
            alt="Project two background"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Beats 4 Devs</h2>
            <h3>React JS</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`This is a web application built to provide a particular selection of music to facilitate focus while at work. It was created for the Turing School of Software and Design's Module 3 final showcase project. The goal was to apply the new technologies learned and work within constraints to deliver a product for a niche audience, which helps solve a unique problem.`}</p>

          <a
            href="https://github.com/alinix1/showcase-project-fe"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Beats 4 Devs"
          >
            <button type="button" className="px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </a>
          <a
            href="https://showcase-project-fe.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo Beats 4 Devs"
          >
            <button type="button" className="px-8 py-2 mt-4">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Router
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cypress
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Redux
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Heroku
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" aria-label="Back">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default beats4devs;
