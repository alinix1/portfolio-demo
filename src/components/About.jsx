import React from 'react';
import about from '../assets/about.png';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#272A21] dark:text-slate-300">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-800 dark:text-slate-300">{`// I ultimately want to work in either med tech or green tech`}</p>
          <p className="py-2 text-gray-800 dark:text-slate-300">
            I recently graduated from the Front End Engineering program at the
            Turing School of Software & Design. While at Turing, I learned about
            agile workflow and methodologies, Object Oriented Programming using
            JavaScript, leveraging the React framework. I hold a Master of
            Public Health degree with a concentration in biostatistics. I also
            achieved a certificate in data science with an emphasis on machine
            learning. I was offered an internship in data science in the Denver
            area at a small tech start-up and worked primarily using Python.
            Leading up to Turing, I worked in home health care and developed
            skills in communication and empathy. I took a sequence of math
            courses. I am currently a code coach at theCoderSchool and teach
            kids how to code in Python and JavaScript. Over the last few months,
            I have deepened my understanding of React Hooks, and unit testing,
            Python, and SQL. I recently earned a certificate in AWS!
          </p>
          <p className="py-2 text-gray-800 dark:text-slate-300">
            The difference between a successful person and others is not a lack
            of strength, not a lack of knowledge, but rather a lack in will. -
            Vince Lombardi Jr.
          </p>
          <p className="py-2 text-gray-800 dark:text-slate-300">
            Failure will never overtake me if my determination to succeed is
            strong enough. - Og Mandino.
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
