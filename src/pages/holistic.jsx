import React from "react";
import Image from "next/image";
import project4 from "../projects/project4.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const holistichealthhaven = () => {
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
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-4 py-6">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{`This is an e-commerce web application built to provide a curated selection of holistic health products for purchase, offering a seamless and user-friendly shopping experience.

Many individuals struggle to find natural and sustainable products that truly support their well-being. Holistic Health Haven addresses this need by offering organic remedies, herbal supplements, and mindfulness tools designed to empower users to embrace a balanced, conscious lifestyle.`}</p>
          <a
            href="https://github.com/alinix1/holistic-health-haven-fe1"
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
                TypeScript
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Stripe
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Formik
              </p>
              <p className="text-gray-700 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ESLint
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

export default holistichealthhaven;
