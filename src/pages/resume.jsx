import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Ali | Resume</title>
        <meta
          name="description"
          content={`I'm a front-end software developer specializing in building (and occasionally designing) exceptional digital experiences.`}
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
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/alinix1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl fopnt-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Frontend Software Development <span className="px-1">|</span>{" "}
              Master of Public Health (MPH), concentration in biostatistics{" "}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {`I am an enthusiastic, highly motivated entry-level front-end developer with a solid educational background in Public Health & Biostatistics, Applied Data Science, and Software Development. I completed a seven-month accelerated coding program for front-end development in Vanilla JavaScript, focusing on the React framework.`}
        </p>
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Soft Skills
          </h5>
          <p className="py-2">
            <span className="px-2" />
            Communication
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
            <span className="px-2" />
            JavaScript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>HTML5/JSX
            <span className="px-2">|</span>CSS3
            <span className="px-2">|</span>SASS (SCSS)
            <span className="px-2">|</span>Material UI
            <span className="px-2">|</span>Tailwind CSS
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>Pandas
            <span className="px-2">|</span>Mocha & Chai
            <span className="px-2">|</span>React Testing Library
            <span className="px-2">|</span>Cypress.io
            <span className="px-2">|</span>Playwright
            <span className="px-2">|</span>Pytest
            <span className="px-2">|</span>React.js
            <span className="px-2">|</span>React Hooks
            <span className="px-2">|</span>React Router
            <span className="px-2">|</span>Next.js
            <span className="px-2">|</span>Redux Toolkit
            <span className="px-2">|</span>RESTful APIs
            <span className="px-2">|</span>Apollo Client GraphQL
            <span className="px-2">|</span>Figma
            <span className="px-2">|</span>Express.js
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>MVC
            <span className="px-2">|</span>VSCode
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>Webpack
            <span className="px-2">|</span>Node.js
            <span className="px-2">|</span>npm & yarn
            <span className="px-2">|</span>Agile Workflow
            <span className="px-2">|</span>Object Oriented Programming (OOP)
            <span className="px-2">|</span>Test Driven Development (TDD)
            <span className="px-2">|</span>UI/UX
          </p>
        </div>
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Ashoka</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Volunteer Frontend Developer (3/2024 - 6/2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Transformed a prototype into Strategy Inspiration Bot, an MVP and
              single-page app within 1-3 months. Collaborated with design and
              engineering teams using Figma, React, and Material UI to deliver
              an intuitive, user-friendly web application.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">The Commons XR</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Frontend Engineer Intern (1/2024 - 7/2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented 8 responsive design prototype features using React and
              Material UI, boosting UX and accessibility. This streamlined
              access to learning resources and mental health support,
              significantly improving user engagement.
            </li>
            <li>
              Resolved UI bugs in React, and conducted research on Google
              Analytics to enhance data-driven decision making.
            </li>
            <li>
              Contributed to engineering best practices by writing succinct
              code, utilizing version control, collaborating cross-functionally
              across different teams and departments, and writing documentation
              to empower and inform other engineers.
            </li>
            <li>
              Utilizing Core Mapper, Azure Functions API, and React, we aimed to
              streamline PowerPoint conversion, eliminating manual uploading by
              implementing a server-side Python solution; ensuring efficiency,
              cost-effectiveness, and data integrity.
            </li>
            <li>
              Conducted unit testing with React Testing Library of React
              components to ensure functionality and aid debugging, enhancing
              overall code reliability.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Health Equity Tracker</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Software Engineer Intern/Software Engineering and Education
            Development (SEED) Program (11/2023 - 7/2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Wrote 10+ end-to-end test scripts using Playwright and codegen on
              the front-end to improve application security and reliability
              through configuring the scripts into nightly test runs and status
              reports.
            </li>
            <li>
              Worked on the backend with data pipelines and Python/Pandas for
              data manipulation to improve ease of data processing and
              consumption.
            </li>
            <li>
              Performed unit testing of Python utility functions with Pytest to
              ensure expected behavior and prevent regressions.
            </li>
            <li>
              Engaged in 10+ code reviews on GitHub to collaboratively polish
              code and make sure it&apos;s ready for production.
            </li>
            <li>
              Developed the frontend using React and TypeScript to integrate new
              datasets, enhancing data visibility and accessibility.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">theCoderSchool</span>
            <span className="px-2">|</span>Centennial, CO
          </p>
          <p className="py-1 italic">Code Coach (3/2023 - 1/2024)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Instructed 3-4 individuals on how to code with a 2:1 teaching
              ratio and an individualized curriculum.
            </li>
            <li>
              Increased students&apos; learning progress in Python, JavaScript,
              or Scratch by 50 points from baseline through interactive
              learning, app development, and concept reviews.
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
              Contributed to developing a text editor demo by preparing and
              preprocessing text-based data for statistical modeling and machine
              learning.
            </li>
            <li>
              Assisted in the summary of the F-Score evaluation metric for a
              machine learning project, which added to overall precision.
            </li>
            <li>
              Engineered a thesaurus word recommender program for text utilizing
              an open-source text corpus, Python, and the SpaCy module for
              Natural Language Processing (NLP) to boost vocabulary, clarity,
              and concision for English language writing.
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
            {/* <span className="font-bold italic"></span> */}
            <span className="px-2">|</span>Kent, OH
          </p>
          <p className="py-1 italic">
            Master of Public Health
            <span className="px-2">|</span>concentration in biostatistics
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
            <span className="px-2">|</span>Psychology
          </p>
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
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Turing School of Software & Design
            </span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Front-End Web Development (Completed 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Completed 1700 hours, ACCET accredited software development
              program, excelling in agile workflow on teams.
            </li>
            <li>
              Developed 10 impactful projects utilizing Vanilla JavaScript
              individually and in pairs/groups, 5 leveraging React.
            </li>
          </ul>
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
    </>
  );
};

export default resume;
