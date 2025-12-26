import React, { useState, useEffect } from "react";
import turing from "../assets/turing.png";
import photo from "../assets/photo.png";
import background from "../assets/background1.png";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiMoon } from "react-icons/hi";

const Main = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
      <div
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setTheme(currentTheme === "dark" ? "light" : "dark");
          }
        }}
        className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
      >
        {currentTheme === "dark" ? <HiOutlineSun /> : <HiMoon />}
      </div>
    );
  };

  return (
    <div
      id="home"
      className="w-full text-center lg:h-screen mb-2 pt-20 sm:pt-24"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#070400] dark:text-slate-200 animate-moveInRight">{`LET'S TURN DATA INTO IMPACT`}</p>
          <h1 className="py-4 text-[#070400] dark:text-slate-100">
            Hi, I&#39;m{" "}
            <span className="text-gray-900 dark:text-[#F7F5F3]"> Ali</span>
          </h1>
          <h1
            className="py-2 text-10xl font-bold bg-gradient-to-r from-[#2B1A14] via-[#7A6456] to-[#1A120E]
 dark:from-[#3E1710] dark:via-[#F7F5F3] dark:to-[#2D322E] text-transparent bg-clip-text"
          >
            A Data Analyst
          </h1>
          <p className="py-4 text-[#070400] max-w-[70%] m-auto dark:text-slate-200">
            I help teams turn complex data into clear, actionable insights,
            combining my Biostatistics Master&#39;s with a healthcare analytics
            background to inform high-impact decisions. Whether building data
            pipelines, creating visualizations that make health data
            understandable to the public, or translating analysis into
            actionable recommendations for stakeholders, I pair data with
            strategy and heart. What drives me? Using data to create measurable
            social impact and seeing insights spark real change.
          </p>
          <div className="flex items-center justify-between max-w-[350px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/ali-nix-38b9b9126/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile for Ali Nix"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/alinix1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile for Ali Nix"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://turing.edu/?ads_cmpid=1064466865&ads_adid=72751730870&ads_matchtype=b&ads_network=g&ads_creative=341753979066&utm_term=turing%20school&ads_targetid=kwd-307330888202&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAjwgZCoBhBnEiwAz35RwmJ3vBGdXWFXVxHj0JR2wqXPk-W9Iks-OafCJjDSYfU_9ngTZqPAnhoCyXgQAvD_BwE"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Turing School website"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Image
                  src={turing}
                  alt="Turing logo"
                  className=" max-w-[400px]"
                  width="20"
                  height="30"
                />
              </div>
            </a>
            <Link href="/resume" aria-label="View resume">
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
            <div>{renderThemeChanger()}</div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "70%",
              height: "70%",
              margin: "15%",
            }}
          >
            <Image
              src={photo}
              alt="photo of Ali"
              width="650"
              height="650"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <Image
              className="z-0 rounded-xl opacity-2"
              src={background}
              alt="photo of trees/plants"
              width="2000"
              height="2000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
