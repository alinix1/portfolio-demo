import React from "react";
import Image from "next/image";
import project3 from "../projects/project3.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const equilibrium = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={project3}
            alt="Project three background"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Equilibrium</h2>
            <h3>React JS</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`This web application provides a list of therapist cards with additional information/details along with mental health resources to adults with limited financial means. It was created with both a front-end and back-end team of Turing students utilizing React framework, Ruby on Rails, and GraphQL.`}</p>
          <a
            href="https://github.com/IOTNBO-Capstone/Equilibrium-FE"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Equilibrium"
          >
            <button type="button" className="px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </a>
          {/* <a
            href="https://equilibrium-iotnbo.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo Equilibrium"
          >
            <button type="button" className="px-8 py-2 mt-4">
              Demo
            </button>
          </a> */}
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
                Apollo GraphQL
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Netlify
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

export default equilibrium;
