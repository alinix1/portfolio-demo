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
    <div id="home" className="w-full h-screen text-center mb-2">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-750 animate-moveInRight">{`LET'S BUILD SOMETHING TOGETHER`}</p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#272A21]"> Ali</span>
          </h1>
          <h1 className="py-2 text-10xl font-bold bg-gradient-to-r from-[#491c13] via-[#FBF8F6] to-[#0F1612] text-transparent bg-clip-text">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-800 max-w-[70%] m-auto dark:text-slate-300">
            I&#39;m a frontend software engineer who enjoys building and
            designing exceptional digital experiences. Currently, I&#39;m
            focused on building responsive front-end web applications while
            learning TypeScript, Stripe and backend technologies such as Node
            and PostgreSQL. I have a master&#39;s degree in Public Health and a
            concentration in biostatistics.
          </p>
          <div className="flex items-center justify-between max-w-[350px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/ali-nix-38b9b9126/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/alinix1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://turing.edu/?ads_cmpid=1064466865&ads_adid=72751730870&ads_matchtype=b&ads_network=g&ads_creative=341753979066&utm_term=turing%20school&ads_targetid=kwd-307330888202&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAjwgZCoBhBnEiwAz35RwmJ3vBGdXWFXVxHj0JR2wqXPk-W9Iks-OafCJjDSYfU_9ngTZqPAnhoCyXgQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Image
                  src={turing}
                  alt="/"
                  className=" max-w-[400px]"
                  width="20"
                  height="30"
                />
              </div>
            </a>
            <Link href="/resume">
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
            <Image src={photo} alt="photo of Ali" width="650" height="650" />
          </div>
          <div className="hidden sm:block">
            <Image
              className="z-0 rounded-xl opacity-2"
              src={background}
              alt="photo of trees/plants"
              width="1500"
              height="1500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
