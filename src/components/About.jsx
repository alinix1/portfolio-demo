import React from 'react';
import about from '../assets/about.png';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#272A21]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-800">{`// I am not your typical developer`}</p>
          <p className="py-2 text-gray-800">
            Doggo ipsum boofers clouds fluffer smol borking doggo with a long
            snoot for pats ur givin me a spook, heck long doggo. Extremely
            cuuuuuute shoob pupper mlem you are doin me a concern, shibe heckin
            angery woofer. The neighborhood pupper you are doing me the shock
            borkdrive sub woofer tungg shoob very jealous pupper, borkdrive
            pupper super chub ur givin me a spook. Very good spot smol borking
            doggo with a long snoot for pats boof very hand that feed shibe blep
            woofer wrinkler, very good spot you are doing me a frighten heckin
            dat tungg tho. He made many woofs pats smol borking doggo with a
            long snoot for pats big ol wrinkler puggo, vvv extremely cuuuuuute
            big ol pupper puggo puggorino, length boy borking doggo many pats
            very hand that feed shibe. Super chub doge what a nice floof boof,
            noodle horse big ol.
          </p>
          <p className="py-2 text-gray-800">
            Shoob long doggo doggorino h*ck long woofer, smol wrinkler. super
            chub. Borking doggo fluffer shibe extremely cuuuuuute borking doggo
            pupper, pats puggo long woofer pupperino. Adorable doggo long bois
            snoot woofer very taste wow smol, doge long bois thicc. Waggy wags
            what a nice floof adorable doggo shibe what a nice floof shibe very
            hand that feed shibe you are doing me a frighten, long doggo
            extremely cuuuuuute long bois many pats h*ck. Thicc tungg vvv
            doggorino shibe corgo heckin good boys extremely cuuuuuute, waggy
            wags many pats tungg borkdrive you are doin me a concern pupperino.
          </p>
          <p className="py-2 text-gray-800 underline cursor-pointer">
            Check out some of my latest projects.
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
