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
              Data Analytics <span className="px-1">|</span> Master of Public
              Health (MPH), concentration in biostatistics{" "}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Data Analytics</p>
            <p className="py-2">
              Master of Public Health (MPH), concentration in biostatistics
            </p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {`I am a Data Analyst with a Master of Public Health in Biostatistics and software development experience, combining data science, analytics, and healthcare expertise to turn complex data into actionable insights that improve lives.`}
        </p>
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <div className="py-2 flex flex-wrap sm:justify-start md:justify-center">
            <span className="px-2 sm:w-full md:w-auto">SQL</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Python</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Pandas</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">NumPy</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Tableau</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Matplotlib</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Seaborn</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Plotly</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">PostgreSQL</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Knex.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Firebase</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Snowflake</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">AWS</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">BigQuery</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">JavaScript</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">TypeScript</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">React.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Express.js</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">HTML5</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">CSS3</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">RESTful APIs</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Excel</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Google Sheets</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">SAS</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">VSCode</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Git</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">GitHub</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">dbt</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">Jupyter Notebook</span>
            <span className="px-2 sm:w-full md:w-auto">|</span>
            <span className="px-2 sm:w-full md:w-auto">UI/UX</span>
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Freelance</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">Product UX Designer (7/2025 - present)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Led end-to-end UX design process for spiritual platform,
              delivering user personas, journey maps, wireframes, mockups, and
              interactive prototypes for healers, mystics, and spiritual
              entrepreneurs.
            </li>
            <li>
              Designed MVP user experience for social co-creation platform,
              conducting stakeholder interviews, analyzing user feedback, and
              creating user flows and wireframes for collaborative skill-sharing
              web application within a 2-week sprint.
            </li>
            <li>
              Conducted UX audit and redesign of holistic health e-commerce app
              through competitor analysis and usability heuristics, implementing
              evidence-based improvements to streamline navigation, product
              discoverability, and checkout flow.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Health Equity Tracker | Morehouse School of Medicine
            </span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Data & Software Engineering Intern/Software Engineering and
            Education Development (SEED) Program (11/2023 - present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built ETL data pipelines using Python and Pandas to extract,
              transform, and load maternal mortality data from multiple sources
              into BigQuery, streamlining data processing workflows and
              supporting reporting and analysis needs.
            </li>
            <li>
              Queried BigQuery data using SQL to identify health disparities
              across demographic groups and inform policy decisions.
            </li>
            <li>
              Refactored data visualizations from Vega to D3, reducing
              dependencies by 8.6% and package size by 30%, improving
              performance and enabling policymakers and researchers to interpret
              health equity metrics more effectively.
            </li>
            <li>
              Integrated new public health datasets through frontend development
              in React/TypeScript, enhancing data visibility and accessibility.
            </li>
            <li>
              Developed automated end-to-end test scripts using Playwright for
              nightly test runs and unit tests with Pytest to ensure application
              functionality and code quality.
            </li>
            <li>
              Collaborated cross-functionally with the team regarding
              engineering requirements and data pipeline needs to ensure data
              tracking product aligned with client goals.
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
              Developed and updated features using React, collaborated with
              designers on Figma high-fidelity wireframes, and implemented
              Context API for global state management.
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
              Tested backend functions within the frontend application, ensuring
              integration with Firebase/Firestore for data management.
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
              Integrated Google Analytics to track user behavior and support
              data-driven decisions on retention and engagement.
            </li>
            <li>
              Developed 8 responsive UI features using React and Material UI to
              enhance the accessibility and presentation of mental health and
              educational resources for XR behavioral analytics platform.
            </li>
            <li>
              Streamlined PowerPoint conversion process using Python and Azure
              Functions API, eliminating manual uploads and enhancing data
              integrity and operational efficiency.
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
              Converted a prototype into an MVP and single-page application
              using Figma, React, and Material UI, delivering an intuitive and
              user-friendly web application.
            </li>
            <li>
              Sent requests from React to Flask backend and worked alongside
              OpenAI LLM, facilitating seamless communication between
              client-side and server-side in AI app.
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
              Engineered a thesaurus word recommender program for text utilizing
              an open-source text corpus, Python, and the SpaCy module for
              Natural Language Processing (NLP) to boost vocabulary, clarity,
              and concision for English language writing.
            </li>
            <li>
              Partnered with machine learning engineers and data analysts to
              analyze and report F-score evaluation metrics for classification
              models, helping optimize the precision-recall tradeoff.
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
            <span className="font-bold italic">Google</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Certificate in UX Design (Completed 2025)
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
