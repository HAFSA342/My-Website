import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600"></p>
          <h1 className="py-4 text-gray-700">
            Hey, I'm <span className="text-[#5651e5]">HAFSA</span>
          </h1>
          <h1 className="py-4 text-gray-700">Mern Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Hey there! 👋 A passionate Developer with a
            love for building web applications and crafting immersive user
            experiences. With expertise in MongoDB, Express.js, React.js, and
            Node.js, I create dynamic and interactive web solutions. Clean code
            and user-centric designs are my priorities. Let's build something
            amazing together!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/hafsa-sohail-98b569233/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/HAFSA342"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:hafsasohail3420@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
