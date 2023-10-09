import React from 'react';
import Image from 'next/image';
import contact from '../assets/contact.png';
import turing from '../assets/turing.png';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#272A21] dark:text-slate-300">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-4 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Ali Nix</h2>
                <p className="uppercase">Front-End Developer</p>
                <p className="py-4 block text-2xl font-bold tracking-widest">
                  I am available for entry-level full-time positions. Contact me
                  and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/ali-nix-38b9b9126/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/alinix1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://turing.edu/?ads_cmpid=1064466865&ads_adid=72751730870&ads_matchtype=b&ads_network=g&ads_creative=341753979066&utm_term=turing%20school&ads_targetid=kwd-307330888202&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAjwgZCoBhBnEiwAz35RwmJ3vBGdXWFXVxHj0JR2wqXPk-W9Iks-OafCJjDSYfU_9ngTZqPAnhoCyXgQAvD_BwE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Image src={turing} alt="/" width="20" height="30" />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#272A21]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
