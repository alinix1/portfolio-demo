import React from "react";
import about from "../assets/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center mt-25 pb-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 pb-20">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#272A21] dark:text-slate-300">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-800 dark:text-slate-300">{`// I ultimately want to work in either med tech or green tech`}</p>
          <div className="py-2 text-gray-800 dark:text-slate-300">
            <p className="mb-4">
              I am a graduate of the Front End Engineering program at the Turing
              School of Software & Design, where I mastered agile workflows and
              methodologies, Object-Oriented Programming with JavaScript ES6,
              and the React framework. I hold a Master of Public Health degree
              with a concentration in biostatistics and a certificate in data
              science, emphasizing machine learning, from General Assembly.
            </p>
            <p className="mb-4">
              I interned as a data scientist at a tech start-up in Denver, CO,
              working primarily with Python. Before Turing, I worked in home
              health care, developing strong communication and empathy skills.
              During the pandemic, I pursued a sequence of math courses to
              strengthen my analytical abilities.
            </p>
            <p className="mb-4">
              Recently, I have completed various internships and volunteer
              projects. I have deepened my understanding of full stack web
              development along with independent learning in TypeScript, Python,
              responsive design, MongoDB, and PostgreSQL for non-relational and
              relational databases. In my free time, I enjoy traveling,
              climbing, skiing, attending concerts, drawing, and spending time
              with my dog.
            </p>
          </div>
          <p className="py-2 text-gray-800 dark:text-slate-300 font-bold">
            The difference between a successful person and others is not a lack
            of strength, not a lack of knowledge, but rather a lack in will.
            <br />
            <span className="font-normal"> - Vince Lombardi Jr.</span>
          </p>
          <p className="py-2 text-gray-800 dark:text-slate-300 font-bold">
            Failure will never overtake me if my determination to succeed is
            strong enough.
            <br />
            <span className="font-normal"> - Og Mandino.</span>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={about} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
