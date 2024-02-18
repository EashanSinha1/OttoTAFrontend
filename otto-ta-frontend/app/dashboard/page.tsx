"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "../../auth/firebase";
import CourseComponent from "@/components/course-component";

const DashboardPage: FC = () => {
  const [courses, setCourses] = useState([{ name: "", num: "" }]);
  const [selectedCourses, setSelectedCourses] = useState([
    { name: "", num: "" },
  ]);

  const router = useRouter();

  useEffect(() => {
    console.log(auth.currentUser);
    (async () => {
      const response = await fetch(
        "https://back.otto-ta.tech/user_courses/" +
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
      if (selectedCourses.length >= 5) {
        alert(`You can only select ${5} courses`);
        return;
      }
      setSelectedCourses([...selectedCourses, course]);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <h1 className="text-6xl pt-10">Which course did you want help on</h1>
      <h1
        className="text-2xl pt-10"
        // eslint-disable-next-line react/no-unescaped-entities
      >
        Don't worry, you can revisit the other courses later!
      </h1>

      <div className="grid grid-cols-3 gap-x-10 gap-y-5">
        {courses.map((course, index) => (
          <CourseComponent
            key={index}
            courseName={course.name}
            courseNum={course.num}
            onClickCourse={() => {
              if (selectedCourses.includes(course || "")) {
                setSelectedCourses(selectedCourses.filter((c) => c !== course));
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
    </main>
  );
};

export default DashboardPage;
