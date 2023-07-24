import React from "react";
import project3Img from "../public/assets/projects/project3.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const project3 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={project3Img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Project 3</h2>
          <h3>React JS / TypeScript / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 md:grid-cols-5 gap-8 pt-8">
        <div className="cols-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            hic distinctio quis, quasi illo ipsam autem omnis, ex ab at
            consequuntur dolor molestiae. Cum doloribus modi deleniti sint
            distinctio aspernatur. Fuga officiis tenetur ab veniam a animi
            repudiandae vero totam, maiores sapiente voluptates nulla aspernatur
            debitis doloribus asperiores quod id provident maxime quasi placeat
            dolor inventore dolores dolore? Laboriosam, aperiam.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
          <button className="px-8 py-2 mt-4">Demo</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JAVASCRIPT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                BOOTSTRAP 5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                REACT JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                FIREBASE
              </p>
            </div>
          </div>
        </div>
        <Link href={"/#projects"}>
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default project3;
