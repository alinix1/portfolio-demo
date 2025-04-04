import React from "react";
import stripeImg from "../skills/stripe.png";
import sassImg from "../skills/sass.png";
import cssImg from "../skills/css-html.png";
import gitImg from "../skills/git.png";
import githubImg from "../skills/github.png";
import firebaseImg from "../skills/firebase.png";
import javascriptImg from "../skills/javascript.png";
import mochaChaiImg from "../skills/mocha-chai.png";
import nextImg from "../skills/next.png";
import nodeImg from "../skills/nodejs.png";
import postgresqlImg from "../skills/postgresql.png";
import reactImg from "../skills/react.png";
import tailwindImg from "../skills/tailwind.png";
import expressImg from "../skills/express.png";
import materialImg from "../skills/material-ui.png";
import cypressImg from "../skills/cypress.png";
import playwrightImg from "../skills/playwright.png";
import pytestImg from "../skills/pytest.png";
import pythonImg from "../skills/python.png";
import reactTestingImg from "../skills/react-testing-library.png";
import typescriptImg from "../skills/typescript.png";
import esLintImg from "../skills/esLintImg.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full mt-20 md:mt-24 lg:mt-32 mb-20 max-w-[1240px] mx-auto px-2"
    >
      <div className="md:mb-12">
        <p className="text-xl tracking-widest uppercase text-[#070400] dark:text-slate-300">
          Skills
        </p>
        <h2 className="py-4 md:m-0">What I Can Do</h2>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="grid xs: grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://stripe.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Stripe"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={stripeImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Stripe"
                  />
                </div>
                <h3 className="text-center sm:text-xs md:text-lg">STRIPE</h3>
                <div className="flex flex-col items-center justify-center"></div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.css3.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CSS3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={cssImg}
                    width="64px"
                    height="64px"
                    alt="Logo for CSS3"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={githubImg}
                    width="64px"
                    height="64px"
                    alt="Logo for GitHub"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GITHUB</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Git"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={gitImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Git"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GIT</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Firebase"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={firebaseImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Firebase"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>FIREBASE</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View SASS/SCSS"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={sassImg}
                    width="64px"
                    height="64px"
                    alt="Logo for SASS/SCSS"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SASS/SCSS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View JavaScript"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={javascriptImg}
                    width="64px"
                    height="64px"
                    alt="Logo for JavaScript"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://mochajs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Mocha & Chai"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={mochaChaiImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Mocha & Chai"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MOCHA & CHAI</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Next.js"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={nextImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Next.js"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NEXT.JS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Node.js"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={nodeImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Node.js"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NODE.JS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View PostgreSQL"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={postgresqlImg}
                    width="64px"
                    height="64px"
                    alt="Logo for PostgreSQL"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>POSTGRESQL</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View React.js"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={reactImg}
                    width="64px"
                    height="64px"
                    alt="Logo for React.js"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>REACT.JS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Tailwind CSS"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={tailwindImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Tailwind CSS"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TAILWIND CSS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Express.js"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={expressImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Express.js"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>EXPRESS.JS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://mui.com/material-ui/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Material UI"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={materialImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Material UI"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MATERIAL UI</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.cypress.io/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Cypress"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={cypressImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Cypress"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CYPRESS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://playwright.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Playwright"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={playwrightImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Playwright"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PLAYWRIGHT</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://docs.pytest.org/en/stable/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Pytest"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={pytestImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Pytest"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PYTEST</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Python"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={pythonImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Python"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PYTHON</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://testing-library.com/docs/react-testing-library/intro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View React Testing Library"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={reactTestingImg}
                    width="64px"
                    height="64px"
                    alt="Logo for React Testing Library"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>REACT TESTING LIBRARY</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Typescript"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={typescriptImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Typescript"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TYPESCRIPT</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://eslint.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ESLint"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={esLintImg}
                    width="64px"
                    height="64px"
                    alt="Logo for ESLint"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>ESLint</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
