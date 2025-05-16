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
        <div className="col-span-4 space-y-4 py-8">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`The Health Equity Tracker aims to give a detailed view of health outcomes by race, ethnicity, sex, socioeconomic status, and other critical factors. Our hope is that it will help policymakers understand what
                resources and support affected communities need to be able to
                improve their outcomes.`}</p>
          <div className="project-details space-y-10">
            <div className="technical-highlights space-y-6 border-l-4 border-gray-700 pl-4">
              <h4 className="text-xl font-medium mb-4">Technical Highlights</h4>
              <ul className="space-y-3">
                {" "}
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Built data pipelines using Python/Pandas to streamline data
                    processing and consumption into Big Query.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Refactored visualization components from Vega to D3,
                    reducing dependencies by{" "}
                    <strong className="text-gray-700">8.6%</strong> and
                    decreasing package size by {""}{" "}
                    <strong className="text-gray-700">30%</strong>,
                    significantly improving application performance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Developed frontend or client-side using React and TypeScript
                    to integrate new datasets, enhancing data accessibility and
                    visibility.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://healthequitytracker.org/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Holistic Health Haven"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
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
