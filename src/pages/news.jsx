import React from "react";
import Image from "next/image";
import project1 from "../projects/project1.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const nytimesnews = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={project1}
            alt="Project one background"
          />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-4 py-8">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`This is a web application built to provide a selection of news articles to keep you in-the-know on the top news stories. It allows for an easy way to interact with articles from the New York Times Top Stories API.`}</p>
          <div className="project-details space-y-10">
            <div className="technical-highlights space-y-6 border-l-4 border-gray-700 pl-4">
              <h4 className="text-xl font-medium mb-4">Technical Highlights</h4>
              <ul className="space-y-3">
                {" "}
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Implemented React Hooks architecture, migrating from
                    class-based components, reducing code by {""}
                    <strong className="dark:text-emerald-300">20%</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Transitioned from CSS to SASS, creating a modular design
                    system with reusable components.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Integrated the New York Times API with robust error handling
                    and loading states.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Achieved perfect accessibility score of{" "}
                    <strong className="dark:text-emerald-300">100</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Implemented comprehensive testing strategy with both Cypress
                    and Playwright.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://github.com/alinix1/ny-times-news-reader"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code NY Times News"
          >
            <button type="button" className="project-btn px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </a>
          <a
            href="https://ny-times-news-reader-1-93xzk6f75-alinix1s-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo NY Times News"
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
                React
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Router
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SASS
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Playwright
              </p>
              <p className="text-black dark:text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
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

export default nytimesnews;
