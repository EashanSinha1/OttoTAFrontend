"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const LearnPage: FC = () => {
  const [courseName, setCourseName] = useState(
    "CS1332, Data Structures and Algorithms",
  );
  const [reviewType, setReviewType] = useState("chat");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [courseFile, setCourseFiles] = useState(["none"]);
  useEffect(() => {});

  //need to get query param of course id

  const router = useRouter();

  const renderReviewType = () => {
    switch (reviewType) {
      case "flashcards":
        return <div></div>;
      case "quiz":
        return <div></div>;
      case "chat":
        return <div></div>;
      default:
        return <div>Default Component</div>;
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <div className="w-full bg-blue-600">yerr</div>
      <div className="flex w-full bg-green-600">
        <p className="pr-[16rem]">Ottolearn</p>
        <p className="pl-40">{courseName}</p>
      </div>
      <div className="flex w-full h-[80vw] ">
        <div className="w-[30%]  h-full flex flex-col">
          <button
            className="w-full"
            onClick={() => {
              setReviewType("flashcards");
            }}
          >
            Flashcards
          </button>
          <button
            className="w-full"
            onClick={() => {
              setReviewType("quiz");
            }}
          >
            Practice Quiz
          </button>
          <button
            className="w-full"
            onClick={() => {
              setReviewType("chat");
            }}
          >
            Ottochat
          </button>
        </div>
        <div className="w-[70%] h-full ">{renderReviewType()}</div>
      </div>
    </main>
  );
};

export default LearnPage;
