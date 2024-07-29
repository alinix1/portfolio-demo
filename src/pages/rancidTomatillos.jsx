import React from "react";
import Image from "next/image";
import project1 from "../projects/project1.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const rancidTomatillos = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={project1}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Rancid Tomatillos</h2>
            <h3>React JS</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`Rancid Tomatillos' is a movie viewing application, not to be confused with Rotten Tomatoes, or Netflix, or IMDB. This is our first project using React.js! It's even better! On the main page of our application a user can view all movies with their movie poster, title, and tomatillo rating of excellence. The user can also search by movie title and the page will auto update with movies that match the criteria. If a user wants to view additional details about the movie, they can click on the movie and will be taken to a movie detail page with movie trailers to swipe through, overview, genres, release date, and runtime. To exit and go back home, just click the X button in the top corner. Happy movie browsing!`}</p>

          <a
            href="https://github.com/alinix1/rancid-tomatillos"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </a>
          <a
            href="https://rancid-tomatillos-paired.vercel.app/"
            target="_blank"
            rel="noreferrer"
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
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default rancidTomatillos;
