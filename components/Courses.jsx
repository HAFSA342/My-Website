import React from "react";
import CourseList from './CourseList';
import course1 from "../public/assets/projects/project1.jpg";
import course2 from "../public/assets/projects/project2.jpg";
import course3 from "../public/assets/projects/project3.jpg";
import course4 from "../public/assets/projects/project4.jpg";

const Courses = () => {
  return (
    <div id="courses" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <CourseList
            title="Course 1"
            backgroundImg={course1}
            courseUrl="/course1"
          />
          <CourseList
            title="Course 2"
            backgroundImg={course2}
            courseUrl="/course2"
          />
          <CourseList
            title="Course 3"
            backgroundImg={course3}
            courseUrl="/course3"
          />
          <CourseList
            title="Course 4"
            backgroundImg={course4}
            courseUrl="/course4"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
