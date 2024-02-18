"use client"
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

const LearnPage = () => {

  const router = useRouter();

  const handleFlashcardsClick = () => {
    router.push('/flashcardselect');
  };

  const handlePracticeQuizClick = () => {
    router.push('/practiceselect');
  };

  const handleOttoChatClick = () => {
    router.push('/ottochat');
  };

  return (
    <div className={lexend.className}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">How do you want to start learning?</h1>
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-purple-600">Computer Organiz&Program - CS-2110-A</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button onClick={handleFlashcardsClick} className="flex-grow text-sm sm:text-base py-3 rounded-lg bg-purple-700 hover:bg-purple-400 focus:outline-none transition duration-300 ease-in-out font-lexend">
            <span className="text-center text-white text-xl font-regular font-lexend">Flashcards</span>
            </button>
            <button onClick={handlePracticeQuizClick} className="flex-grow text-sm sm:text-base py-3 rounded-lg bg-purple-700 hover:bg-purple-400 focus:outline-none transition duration-300 ease-in-out font-lexend">
            <span className="text-center text-white text-xl font-regular font-lexend">Practice Quiz</span>
            </button>
            <button onClick={handleOttoChatClick} className="flex-grow text-sm sm:text-base py-3 rounded-lg bg-purple-700 hover:bg-purple-400 focus:outline-none transition duration-300 ease-in-out font-lexend">
            <span className="text-center text-white text-xl font-regular font-lexend">OttoChat AI</span>
            </button>
          </div>
          {/* <div className="text-center">
            <button className="text-lg py-3 px-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-[14px] text-white  items-center justify-center hover:bg-purple-400 hover:text-white transition duration-300 ease-in-out font-lexend">
              Generate
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
