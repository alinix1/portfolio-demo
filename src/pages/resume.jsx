import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ali | Resume</title>
        <meta
          name="description"
          content={`I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.`}
        />
      </Head>
      <div className="max-w[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center dark:text-slate-950">Ali Nix</h2>
          <div className="flex dark:text-slate-950">
            <a
              href="https://www.linkedin.com/in/ali-nix-38b9b9126/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/alinix1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl fopnt-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Software Development <span className="px-1">|</span> Master of
              Public Health (MPH), concentration in biostatistics{' '}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {`I am an enthusiastic, highly motivated entry-level front-end web developer with a solid educational background in Biostatistics, Data Science, Analytics, and Web Development. I recently completed a seven-month accelerated coding program for front-end development in Vanilla JavaScript, focusing on React framework.`}
        </p>
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Soft Skills
          </h5>
          <p className="py-2">
            <span className="px-2"></span>Communication
            <span className="px-2">|</span>Empathy
            <span className="px-2">|</span>Patience
            <span className="px-2">|</span>Time Management
            <span className="px-2">|</span>Research
            <span className="px-2">|</span>Problem-solving
          </p>
        </div>
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <p className="py-2">
            <span className="px-2"></span>JavaScript
            <span className="px-2">|</span>HTML/JSX
            <span className="px-2">|</span>CSS3
            <span className="px-2">|</span>Python 3.6.3
            <span className="px-2">|</span>Object Oriented Programming (OOP)
            <span className="px-2">|</span>Test Driven Development (TDD)
            <span className="px-2">|</span>Mocha & Chai
            <span className="px-2">|</span>React Testing Library
            <span className="px-2">|</span>Cypress.io
            <span className="px-2">|</span>VSCode
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>Agile Workflow
            <span className="px-2">|</span>React.js
            <span className="px-2">|</span>MVC
            <span className="px-2">|</span>React Hooks
            <span className="px-2">|</span>React Router
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>RESTful APIs
            <span className="px-2">|</span>GraphQL
            <span className="px-2">|</span>Postman
            <span className="px-2">|</span>Figma
            <span className="px-2">|</span>UI/UX
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>Express.js
            <span className="px-2">|</span>SQL
          </p>
        </div>
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">theCoderSchool</span>
            <span className="px-2">|</span>Centennial, CO
          </p>
          <p className="py-1 italic">Code Coach (3/2023 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Teach kids to code in-person with a 2:1 teaching ratio and an
              individualized curriculum.
            </li>
            <li>
              Primarily utilizing Scratch, Python or JavaScript in a
              project-based learning environment.
            </li>
            <li>
              Increased literacy for each student by 50 points through
              interactive learning, app development, and concept reviews.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Turing School of Software & Design
            </span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Front-End Software Developer (Completed 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Completed ACCET accredited software development program, excelling
              in agile workflow on teams.
            </li>
            <li>
              Developed 10 impactful projects utilizing Vanilla JavaScript
              individually and in pairs/groups, 5 leveraging React.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Optfit, LLC</span>
            <span className="px-2">|</span>Denver, CO
          </p>
          <p className="py-1 italic">Data Science Intern (5/2018 - 11/2018)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Engineered an innovative thesaurus/word recommender program for
              text, akin to Grammarly.
            </li>
            <li>
              Instrumental in gaining project funding by researching and
              applying for $225,000 Small Business Innovation Grant (SBIR) from
              National Science Foundation.
            </li>
          </ul>
        </div>
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Education & Certifications
          </h5>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Kent State University</span>
            <span className="font-bold italic"></span>
            <span className="px-2">|</span>Kent, OH
          </p>
          <p className="py-1 italic">
            Master of Public Health
            <span className="px-2">|</span>concentration in biostatistics
            (Completed 2016)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Analyzed and interpreted statistical data from Behavioral Risk
              Factor Surveillance system (BRFSS).
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">University of Maine</span>
            <span className="px-2">|</span>Farmington, ME
          </p>
          <p className="py-1 italic">
            Bachelor of Arts
            <span className="px-2">|</span>Psychology (Completed 2011)
          </p>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Front Range Community College
            </span>
            <span className="px-2">|</span>Denver, CO
          </p>
          <p className="py-1 italic">Mathematics (Completed 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Sequence of math courses including College Algebra, Precalculus,
              and Calculus I.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">General Assembly</span>
            <span className="px-2">|</span>New York, NY
          </p>
          <p className="py-1 italic">
            Certificate in Data Science (Completed 2017)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built robust predictive models using real-world data and machine
              learning algorithms.
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="italic">
          <span className="font-bold italic">AWS</span>
          <span className="px-2">|</span>Remote
        </p>
        <p className="py-1 italic">
          Certificate in Cloud Practitioner (Completed 2023)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Entry-level certification designed to validate foundational,
            high-level understanding of AWS Cloud and Services.
          </li>
        </ul>
      </div>
    </>
  );
};

export default resume;
