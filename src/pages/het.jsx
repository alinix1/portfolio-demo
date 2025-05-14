import React from "react";
import Image from "next/image";
import project3 from "../projects/project3.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const healthequitytracker = () => {
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
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-4 py-6">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`The Health Equity Tracker aims to give a detailed view of health outcomes by race, ethnicity, sex, socioeconomic status, and other critical factors. Our hope is that it will help policymakers understand what resources and support affected communities need to be able to improve their outcomes.`}</p>
          <a
            href="https://github.com/alinix1/health-equity-tracker"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Health Equity Tracker"
          >
            <button type="button" className="px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </a>
          <a
            href="https://healthequitytracker.org/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo Health Equity Tracker"
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
                Playwright
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                GitHub Actions
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

export default healthequitytracker;
