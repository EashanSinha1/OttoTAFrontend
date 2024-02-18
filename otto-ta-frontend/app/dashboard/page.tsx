"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CourseComponent from "@/components/course-component";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});
const DashboardPage: FC = () => {
  const initialCourses = [
    { name: 'Course 1', num: 'C1' },
    { name: 'Course 2', num: 'C2' },
    { name: 'Course 3', num: 'C3' },
  ];
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  useEffect(() => {
    console.log(selectedCourses);
  }, [selectedCourses]);

  const handleCourseClick = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      if (selectedCourses.length >= 5) {
        alert(`You can only select ${5} courses`);
        return;
      }
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <div className={lexend.className}>
      <h1 className="text-6xl flex justify-center pt-10 font-lexend">Which course did you want help on</h1>
      <h1
        className="text-2xl flex justify-center pt-10 pb-10 font-lexend"
        // eslint-disable-next-line react/no-unescaped-entities
      >
        Do not worry, you can revisit the other courses later!
      </h1>

      <div className="grid grid-cols-3 gap-x-10 gap-y-5">
        {courses.map((course, index) => (
          <CourseComponent
            key={index}
            courseName={course.name}
            courseNum={course.num}
            onClickCourse={() => handleCourseClick(course)}
          />
        ))}
      </div>
      </div>
    </main>
  );
};

export default DashboardPage;