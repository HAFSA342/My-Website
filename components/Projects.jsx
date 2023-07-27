import React from "react";
import ProjectList from './ProjectList';
import project1 from "../public/assets/projects/project1.jpg";
import project2 from "../public/assets/projects/project2.jpg";
import project3 from "../public/assets/projects/project3.jpg";
import project4 from "../public/assets/projects/project4.jpg";

const Courses = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectList
            title="Project 1"
            backgroundImg={project1}
            courseUrl="/project1"
          />
          <ProjectList
            title="Project 2"
            backgroundImg={project2}
            courseUrl="/project2"
          />
          <ProjectList
            title="Project 3"
            backgroundImg={project3}
            courseUrl="/project3"
          />
          <ProjectList
            title="Project 4"
            backgroundImg={project4}
            courseUrl="/project4"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
