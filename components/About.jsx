import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">
            Our President{" "}
            <span className="text-[#5651e5] underline">Dr. Arif Alvi</span>
          </h2>
          <p className="py-2 text-gray-700 uppercase">
            //President of the Islamic Republic of Pakistan
          </p>
          <p className="py-2 text-gray-500">
           
          </p>
          <p className="py-2 text-gray-500">
           
          </p>
          <p className="py-2 text-gray-500 underline cursor-pointer"></p>
        </div>
        <div className="w-50% h-50% m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="../assets/about.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
