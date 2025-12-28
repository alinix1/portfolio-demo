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
                    Built ETL data pipelines using Python and Pandas to extract,
                    transform, and load maternal mortality data from multiple
                    sources into BigQuery, streamlining data processing and
                    analysis workflows.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Queried BigQuery data using SQL to identify health
                    disparities across demographic groups and inform policy
                    decisions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Refactored visualization components from Vega to D3,
                    reducing dependencies by{" "}
                    <strong className="dark:text-emerald-300">8.6%</strong> and
                    decreasing package size by {""}{" "}
                    <strong className="dark:text-emerald-300">30%</strong>,
                    significantly improving application performance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Integrated new public health datasets via React/TypeScript
                    frontend, enhancing data visibility and accessibility.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://github.com/SatcherInstitute/health-equity-tracker"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Holistic Health Haven"
          >
            <button className="project-btn px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://healthequitytracker.org/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo Health Equity Tracker"
          >
            <button type="button" className="project-btn px-8 py-2 mt-4">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Playwright
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Pytest
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Pandas
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
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
