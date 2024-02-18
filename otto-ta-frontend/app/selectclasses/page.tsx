"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "../../auth/firebase";
import CourseComponent from "@/components/course-component";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});
const SelectClassesPage: FC = () => {
  const [courses, setCourses] = useState([{ name: "", num: "" }]);
  const [selectedCourses, setSelectedCourses] = useState([
    { name: "", num: "" },
  ]);

  const router = useRouter();

  useEffect(() => {
    console.log(auth.currentUser);
    (async () => {
      const response = await fetch(
        "https://back.otto-ta.tech/canvasCourses/" +
          "PL5ts8iyL3P8iz02im8Kd8U1y0U2",
        {
          method: "GET",
        },
      );
      const data = await response.json();
      setCourses(data);
    })();
  }, []);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  useEffect(() => {
    console.log(selectedCourses);
  }, [selectedCourses]);

  const handleCourseClick = (course: any) => {
    if (selectedCourses.includes(course || "")) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      if (selectedCourses.length > 5) {
        alert(`You can only select ${5} courses`);
        return;
      }
      setSelectedCourses([...selectedCourses, course]);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90 pb-20">
      <div className={lexend.className}>
        <div className="flex justify-center w-full">
          <h1 className="text-4xl pt-10 pb-5">
            Choose what classes you want to import
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 pb-10">
          {courses.map((course, index) => (
            <CourseComponent
              key={index}
              courseName={course.name}
              courseNum={course.num}
              onClickCourse={() => {
                if (selectedCourses.includes(course || "")) {
                  setSelectedCourses(
                    selectedCourses.filter((c) => c !== course),
                  );
                } else {
                  if (selectedCourses.length >= 5) {
                    alert(`You can only select ${5} courses`);
                    return;
                  }
                  setSelectedCourses([...selectedCourses, course]);
                }
                console.log(`Course ${course.name} clicked`);
              }}
            />
          ))}
        </div>

        <div className="flex justify-center w-full">
          <button
            className="w-[260px] h-12 bg-purple-600 rounded-[14px] flex items-center justify-center hover:bg-purple-400 hover:text-white transition duration-300 font-lexend"
            onClick={() => {
              console.log("I am continue");
              router.push("/import");
            }}
          >
            <span className="text-center text-white text-xl font-medium font-lexend">
              Continue
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default SelectClassesPage;
