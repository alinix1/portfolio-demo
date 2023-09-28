import React from 'react';
import chartImg from '../skills/chart.png';
import codeWarsImg from '../skills/code-wars.png';
import cssImg from '../skills/css-html.png';
import gitImg from '../skills/git.png';
import githubImg from '../skills/github.png';
import graphqlImg from '../skills/graphql.png';
import javascriptImg from '../skills/javascript.png';
import mochaChaiImg from '../skills/mocha-chai.png';
import nextImg from '../skills/next.png';
import nodeImg from '../skills/nodejs.png';
import postgresqlImg from '../skills/postgresql.png';
import reactImg from '../skills/react.png';
import tailwindImg from '../skills/tailwind.png';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#272A21]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://www.chartjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={chartImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CHART.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://www.css3.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={cssImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS & HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={githubImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={gitImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GIT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://www.codewars.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={codeWarsImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CODE WARS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={graphqlImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GRAPHQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={javascriptImg}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://mochajs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={mochaChaiImg}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MOCHA & CHAI</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={nextImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={nodeImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={postgresqlImg}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>POSTGRESQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={reactImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={tailwindImg} width="64px" height="64px" alt="/" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWINDCSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
