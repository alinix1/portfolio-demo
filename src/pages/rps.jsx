import React from "react";
import Image from "next/image";
import project4 from "../projects/project4.png";
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
            src={project4}
            alt="Project four background"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Rock Paper Scissors</h2>
            <h3>Vanilla JS</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`Rock, Paper, Scissors is a web application that allows users to play the game of Rock, Paper, Scissors virtually against a computer. The classic game has the following rules: rock crushes scissors >> scissors cuts paper >> paper covers rock. The difficult option includes lizard and spock for additional challenges and strategies.`}</p>
          <a
            href="https://github.com/alinix1/Rock-Paper-Scissors"
            target="_blank"
            rel="noreferrer"
            aria-label="View Code Rock Paper Scissors"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://rock-paper-scissors-sigma-eight.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Demo Rock Paper Scissors"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML5
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS3
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
