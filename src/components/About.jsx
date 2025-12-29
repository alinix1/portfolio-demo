import React from "react";
import about from "../assets/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full p-2 py-16 md:py-24 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#070400] dark:text-slate-300">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-[#070400] dark:text-slate-300 font-bold">{`// Healthcare & Environmental Analytics`}</p>
          <div className="py-2 text-[#070400] dark:text-slate-300">
            <p className="mb-4">
              I am a Data Analyst with a Master of Public Health in
              Biostatistics and software development experience, combining data
              science, analytics, and healthcare expertise to turn complex data
              into actionable insights that improve lives.
            </p>
            <p className="mb-4">
              After grad school, I explored different applications of data—from
              data science and ML to full-stack development—to understand where
              my skills fit best. Through this exploration, especially my work
              at Health Equity Tracker building ETL pipelines and analyzing
              public health data with SQL and Python, I realized my passion is
              data analysis: extracting insights from complex datasets and
              communicating findings that drive decisions.
            </p>
            <p className="mb-4">
              I combine strong statistical foundations from my MPH, technical
              skills in SQL and Python, and healthcare domain expertise. The
              technical skills I gained along the way—data engineering,
              full-stack development—make me a stronger analyst who understands
              how data systems work end-to-end.
            </p>
          </div>
          <p className="py-2 text-[#070400] dark:text-slate-300 font-bold">
            The difference between a successful person and others is not a lack
            of strength, not a lack of knowledge, but rather a lack in will.
            <br />
            <span className="font-normal"> - Vince Lombardi Jr.</span>
          </p>
          <p className="py-2 text-[#070400] dark:text-slate-300 font-bold">
            Failure will never overtake me if my determination to succeed is
            strong enough.
            <br />
            <span className="font-normal"> - Og Mandino.</span>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={about} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default About;
