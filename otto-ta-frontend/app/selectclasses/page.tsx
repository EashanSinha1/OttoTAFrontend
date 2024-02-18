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
      if (selectedCourses.length >= 5) {
        alert(`You can only select ${5} courses`);
        return;
      }
      setSelectedCourses([...selectedCourses, course]);
    }
  };
  return (
  // <div className={lexend.className}>
  //   <div className="w-[1728px] h-[1117px] relative bg-white">
  //       <div className="left-[520px] top-[143px] absolute text-center text-black text-6xl font-medium font-lexend">Import Classes to Learn</div>
  //       <div className="w-[1728px] h-[101px] left-0 top-0 absolute">
  //           <div className="w-[1728px] h-[100px] left-0 top-0 absolute bg-gradient-to-r from-purple-700 to-fuchsia-500 shadow" />
  //           <nav className="absolute w-[600px] h-[25px] left-[591px] top-[47px] flex justify-center space-x-[145px]">
  //             <a href="#" className="text-center text-white text-xl font-semibold hover:text-opacity-75 transition">Home</a>
  //             <a href="#" className="text-center text-white text-xl font-semibold hover:text-opacity-75 transition">Dashboard</a>
  //             <a href="#" className="text-center text-white text-xl font-semibold hover:text-opacity-75 transition">About Us</a>
  //           </nav>

  //           <div className="w-[132px] h-[50px] left-[50px] top-[25px] absolute justify-center items-center inline-flex">
  //               <div className="text-white text-[40px] font-medium font-lexend">OttoTA</div>
  //           </div>
  //           <div className="w-[43.47px] h-[43.47px] left-[1635px] top-[28px] absolute">
  //               <div className="w-[43.47px] h-[43.47px] left-0 top-0 absolute bg-purple-700 rounded-[28px]" />
  //               <div className="w-[21.73px] h-[23.40px] left-[10.87px] top-[10.09px] absolute">
  //               </div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[721px] top-[254px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 7641</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Intro to Machine Learning</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[721px] top-[514px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 7641</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Intro to Machine Learning</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[721px] top-[774px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 7641</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Intro to Machine Learning</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[1056px] top-[254px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 4400</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Intro to Database Systems</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[1056px] top-[514px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 4400</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Intro to Database Systems</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[1056px] top-[774px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 4400</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Intro to Database Systems</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[386px] top-[254px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 1332</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Data Structures and Algorithms</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[386px] top-[514px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 1332</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Data Structures and Algorithms</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[285px] h-[210px] left-[386px] top-[774px] absolute bg-white rounded-[25px] shadow">
  //           <div className="w-[275px] h-[104px] left-[5px] top-[5px] absolute bg-fuchsia-400 rounded-[23px]" />
  //           <div className="w-[252px] left-[16.50px] top-[118px] absolute text-center text-fuchsia-400 text-lg font-bold font-lexend">CS 1332</div>
  //           <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Data Structures and Algorithms</div>
  //           <div className="w-[127px] h-7 left-[79px] top-[168px] absolute">
  //               <div className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg" />
  //               <div className="left-[46px] top-[6px] absolute text-center text-white text-xs font-medium font-lexend">Select</div>
  //           </div>
  //       </div>
  //       <div className="w-[260px] h-12 left-[734px] top-[1034px] absolute">
  //           <div className="w-[260px] h-12 left-0 top-0 absolute bg-purple-600 rounded-[14px]" />
  //           <div className="left-[87px] top-[11px] absolute text-center text-white text-xl font-medium font-lexend">Continue</div>
  //       </div>
  //   </div>
  //   </div>
    <main className="flex min-h-screen flex-col items-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <div className={lexend.className}>
      <h1 className="text-4xl pt-10 text-center justify-center font-semibold font-lexend">Choose what classes you want to import</h1>
      {/* <div className="absolute top-[100px]"> */}
      <div className="grid flex flex-col items-center justify-center grid-cols-3 gap-x-10 gap-y-5 top-[100px] absolute">
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
      {/* </div> */}
      <button className="w-40 h-40 bg-slate-500 text-white"
        onClick={() => {
          console.log("I am continue");
          router.push("/import")
        }}
      >
        Continue
      </button>
      </div>
    </main>
  );
};

export default SelectClassesPage;
