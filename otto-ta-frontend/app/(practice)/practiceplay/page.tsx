"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

const MultipleChoiceQuestionPage: FC = () => {
  const router = useRouter();
  const [showHint, setShowHint] = useState(false);
  const questionInfo = {
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Berlin", "Madrid"],
    hint: "It is also known as the City of Lights.",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="flex flex-col items-center w-full max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-300">
          {questionInfo.question}
        </h1>
        <div className="flex flex-col w-full">
          {questionInfo.choices.map((choice, index) => (
            <button key={index} className="mb-4 px-4 py-2 bg-purple-200 rounded-md text-purple-700 font-semibold hover:bg-purple-300">
              {choice}
            </button>
          ))}
        </div>
        <button
          className="mt-6 px-4 py-2 bg-green-200 rounded-md text-green-700 font-semibold hover:bg-green-300"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Hide" : "Show"} Hint
        </button>
        {showHint ? (
          <div className="mt-4 px-4 py-2 bg-yellow-100 rounded-md text-yellow-700">
            {questionInfo.hint}
          </div>
        ) : <div className="pb-10 pt-1"></div>}
         <div className="flex justify-between w-full mt-6">
        <button className="px-4 py-2 bg-blue-200 rounded-md text-blue-700 font-semibold hover:bg-blue-300">Previous</button>
        <button className="px-4 py-2 bg-blue-200 rounded-md text-blue-700 font-semibold hover:bg-blue-300">Next</button>
      </div>
      </div>

    </main>
  );
};

export default MultipleChoiceQuestionPage;
