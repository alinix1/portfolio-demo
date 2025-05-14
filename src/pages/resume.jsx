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
      <div className="w-full overflow-hidden p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-center dark:text-slate-950 mb-2 sm:mb-0">
            Ali Nix
          </h2>
          <div className="flex dark:text-slate-950">
            <a
              href="https://www.linkedin.com/in/ali-nix-38b9b9126/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/alinix1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Frontend Software Development <span className="px-1">|</span>{" "}
              Master of Public Health (MPH), concentration in biostatistics{" "}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Design Oriented</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {`I am an enthusiastic, highly motivated entry-level front-end developer with a solid educational background in Public Health & Biostatistics, Applied Data Science, and Software Development. I completed a seven-month accelerated coding program for front-end development in Vanilla JavaScript, focusing on the React framework.`}
        </p>
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <div className="py-2 flex flex-wrap sm:justify-start md:justify-center">
            <span className="px-2 sm:w-full md:w-auto">JavaScript</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">TypeScript</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">HTML5/JSX</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">CSS3</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">SASS/SCSS</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Material UI</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Tailwind CSS</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Python</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Pandas</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Mocha & Chai</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">
              React Testing Library
            </span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Cypress.io</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Playwright</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Pytest</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">React.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">React Hooks</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">React Router</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Next.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Redux Toolkit</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">RESTful APIs</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Stripe</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Figma</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Express.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Knex.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">PostgreSQL</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Firebase</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">SQL</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">AWS</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Vercel</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">MVC</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">VSCode</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Git</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">GitHub</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Webpack</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Node.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">npm & yarn</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">ESLint</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Agile Workflow</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">
              Object Oriented Programming (OOP)
            </span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">
              Test Driven Development (TDD)
            </span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">UI/UX</span>
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Health Equity Tracker</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Software Engineer Intern/Software Engineering and Education
            Development (SEED) Program (11/2023 - present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Wrote end-to-end test scripts using Playwright and codegen on the
              front-end to improve application security,
              <br />
              and reliability through configuring the scripts into nightly test
              runs and status reports.
            </li>
            <li>
              Worked on the backend with data pipelines and Python/Pandas for
              data manipulation to improve ease of data processing
              <br />
              and consumption into Google Big Query.
            </li>
            <li>
              Performed unit testing of Python utility functions with Pytest to
              ensure expected behavior and prevent regressions.
            </li>
            <li>
              Engaged in monthly code reviews on GitHub to collaboratively
              polish code and make sure it&apos;s ready for production.
            </li>
            <li>
              Developed the frontend using React and TypeScript to integrate new
              datasets, enhancing data visibility and accessibility.
            </li>
            <li>
              Refactored visualization components from Vega to D3, reducing
              dependencies by 8.6% and decreasing package size by 30%,
              <br />
              significantly improving application performance.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">makeitMVP</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Software Developer Apprentice (9/2024 - 10/2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Optimized backend by analyzing Firebase and Firestore functions,
              documenting reusable elements, enhancing the Entity Relationship
              Diagram (ERD), and initiating code refactoring for future
              scalability and&nbsp;reuse.
            </li>
            <li>
              Reduced backend complexity by 25% and accelerating development
              efficiency during the sprint.
            </li>
            <li>
              Developed features using React, collaborated with designers on
              Figma high-fidelity wireframes, and implemented Context API for
              global state management.
            </li>
            <li>
              Contributed to agile workflow processes by collaborating with
              project managers, utilizing Jira and sprint planning, while
              actively participating in code reviews to maintain code quality
              with team standards.
            </li>
            <li>
              Collaborated with another developer to integrate Firestore data
              fetching and display it dynamically on the frontend UI, enhancing
              overall feature performance and functionality.
            </li>
            <li>
              Tested backend functions within the frontend app, ensuring
              integration with Firebase/Firestore.
            </li>
          </ul>
        </div>
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
              Developed Strategy Inspiration Bot MVP using React and Material
              UI, reducing project development time by 40% and enhancing team
              collaboration through cross-functional design and engineering work
              during a 3-month project timeline.
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
              Material UI, boosting UX and accessibility.
              <br /> This streamlined access to learning resources and mental
              health support, significantly improving user engagement by 30%.
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
              Utilized Core Mapper, Azure Functions API, and React to streamline
              PowerPoint conversion, eliminating manual uploading by
              implementing a server-side Python solution—ensuring efficiency,
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
            <li>
              Performed a thorough literature review on Chronic Obstructive
              Pulmonary Disease (COPD) followed by the rationale or objective to
              examine the association between depression status and healthcare
              access, healthcare utilization, and health-related quality of life
              among adults with COPD. Collected data from the Behavioral Risk
              Factor Surveillance System (BRFSS) in 2011 and 2012. Gathered
              descriptive statistics as a part of the exploratory data analysis,
              including the mean or proportion and 95% confidence intervals. In
              addition, logistic Regression models were produced with
              corresponding odds ratios using SAS. Results of the study
              indicated that COPD was significantly associated with the
              following:
            </li>
          </ul>
          <ol>
            <li>1. Medical costs are seen as a barrier to care.</li>
            <li>2. Increased visits with the COPD doctor.</li>
            <li>3. Decreased health-related quality of life.</li>
          </ol>
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
            <span className="font-bold italic">IBM</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            AI Product Manager Professional Certificate (In Progress 2025)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Understanding product management fundamentals, roles, and
              navigating the entire product lifecycle from concept to launch.
            </li>
            <li>
              Creating essential product artifacts: product concepts, vision
              statements, and project charters.
            </li>
            <li>
              Developing comprehensive checklists for product qualification,
              launch, delivery, and retirement.
            </li>
            <li>
              Managing Agile development through product backlog creation and
              sprint planning.
            </li>
            <li>
              Using data visualization tools like burndown charts to forecast
              and meet sprint goals.
            </li>
            <li>
              Applying AI and prompt engineering techniques to enhance product
              development.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Google</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Certificate in UX Design (In Progress 2025)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Learn the foundations of UX design, including empathizing with
              users,
              <br />
              building wireframes and prototypes,
              <br />
              conducting research to test your designs,
              <br />
              and discover how to effectively utilize AI in UX design.
            </li>
          </ul>
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
