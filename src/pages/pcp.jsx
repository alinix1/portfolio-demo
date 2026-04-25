import React from "react";
import Image from "next/image";
import project5 from "../projects/project5.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const primarycareshortage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={project5}
            alt="Project five background"
          />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-4 py-8">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`A multi-source data analytics project — encompassing ETL pipeline, data warehouse, and interactive dashboard — examining how primary care shortages correlate with chronic disease burden and preventable hospitalizations across US counties.`}</p>
          <div className="project-details space-y-10">
            <div className="technical-highlights space-y-6 border-l-4 border-gray-700 pl-4">
              <h4 className="text-xl font-medium mb-4">Technical Highlights</h4>
              <ul className="space-y-3">
                {" "}
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Built end-to-end ETL pipeline integrating
                    <strong className="dark:text-emerald-300"> 5+</strong> {""}
                    public health datasets (CDC PLACES, County Health Rankings,
                    HRSA, and USDA) into Snowflake using dbt with staging,
                    intermediate, and mart layers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Engineered composite vulnerability scoring model and HPSA
                    severity tiering across
                    <strong className="dark:text-emerald-300">
                      {" "}
                      2,957
                    </strong>{" "}
                    {""}
                    US counties.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Identified poverty rate {""}
                    <strong className="dark:text-emerald-300">
                      (r=0.34)
                    </strong>{" "}
                    and high disease burden counties {""}
                    <strong className="dark:text-emerald-300">
                      (average 481.9 excess stays above the national average)
                    </strong>{" "}
                    {""}
                    as strongest predictors of preventable hospitalizations via
                    Pearson correlation analysis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Primary Care Shortage Analysis"
          >
            <button className="project-btn px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="/#"
            target="_blank"
            rel="noreferrer"
            aria-label="View Jupyter Notebook Primary Care Shortage Analysis"
          >
            <button type="button" className="project-btn px-8 py-2 mt-4">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 rounded-xl p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] dark:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.85)]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Snowflake
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                dbt
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SQL
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Pandas
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Plotly
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

export default primarycareshortage;
