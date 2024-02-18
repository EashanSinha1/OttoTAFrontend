"use client";
import { FC, useEffect, useState} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LearnPage: FC = () => {
  const [courseName, setCourseName] = useState("CS1332, Data Structures and Algorithms");
  const [review_type, setReviewType] = useState("course");
  const [courseFile, setCourseFiles] = useState(["place"]);
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
        <div className="w-full bg-blue-600">
          yerr

        </div>
        <div className="flex w-full bg-green-600">
          <p className="pr-[16rem]" >Ottolearn</p>
          <p className="pl-40">{courseName}</p>

        </div>
        <div className="w-full h-[80vw] ">
          <div className="w-[30%] bg-red-500 h-full flex flex-col">
            <button className="w-full">Flashcards</button>
            <button className="w-full">Practice Quiz</button>
            <button className="w-full">Ottochat</button>

            s
          </div>
          <div className="w-[70%] h-full bg-black">
            s
          </div>

        </div>


    </main>
  );
};

export default LearnPage;
