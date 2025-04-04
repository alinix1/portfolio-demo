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
        <div className="col-span-4 space-y-4 py-6">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`This is a web application built to provide a selection of news articles to keep you in-the-know on the top news stories. It allows for an easy way to interact with articles from the New York Times Top Stories API`}</p>

          <a
            href="https://github.com/alinix1/ny-times-news-reader"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code NY Times News"
          >
            <button type="button" className="px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </a>
          <a
            href="https://ny-times-news-reader-1-93xzk6f75-alinix1s-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo NY Times News"
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
                JavaScript
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SASS
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Playwright
              </p>
              <p className="text-gray-700 py-2 flex items-center">
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
