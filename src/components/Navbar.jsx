import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/news" ||
      router.asPath === "/beats" ||
      router.asPath === "/het" ||
      router.asPath === "/holistic"
    ) {
      setNavBg("rgba(0, 0, 0, 0.5)");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" aria-label="home">
          <Image
            src={logo}
            alt="logo"
            width="80"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/" aria-label="home">
              <li className="ml-10 text-sm uppercase hover:border-b relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Home
              </li>
            </Link>
            <Link href="/#about" aria-label="about">
              <li className="ml-10 text-sm uppercase hover:border-b relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                About
              </li>
            </Link>
            <Link href="/#skills" aria-label="skills">
              <li className="ml-10 text-sm uppercase hover:border-b relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Skills
              </li>
            </Link>
            <Link href="/#projects" aria-label="projects">
              <li className="ml-10 text-sm uppercase hover:border-b relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Projects
              </li>
            </Link>
            <Link href="/#contact" aria-label="contact">
              <li className="ml-10 text-sm uppercase hover:border-b relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} style={{ color: linkColor }} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/10" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#818d6d] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" aria-label="home">
                <Image src={logo} width="87" height="35" alt="logo" />
              </Link>
              <div
                onClick={handleNav}
                onKeyUp={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setTheme(currentTheme === "dark" ? "light" : "dark");
                  }
                }}
                className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">{`LET'S TURN DATA INTO IMPACT`}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" aria-label="home">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                  onKeyUp={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setTheme(currentTheme === "dark" ? "light" : "dark");
                    }
                  }}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about" aria-label="about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                  onKeyUp={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setTheme(currentTheme === "dark" ? "light" : "dark");
                    }
                  }}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills" aria-label="skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                  onKeyUp={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setTheme(currentTheme === "dark" ? "light" : "dark");
                    }
                  }}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects" aria-label="projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                  onKeyUp={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setTheme(currentTheme === "dark" ? "light" : "dark");
                    }
                  }}
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact" aria-label="contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                  onKeyUp={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setTheme(currentTheme === "dark" ? "light" : "dark");
                    }
                  }}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#272A21]">{`Let's Connect`}</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/ali-nix-38b9b9126/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile for Ali Nix"
                >
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/alinix1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile for Ali Nix"
                >
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>

                <Link href="/resume" aria-label="View resume">
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
