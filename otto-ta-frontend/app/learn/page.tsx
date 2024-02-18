import Head from 'next/head';
import React from 'react';

const LearnPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">How do you want to start learning?</h1>
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-purple-600">CS 1332 Data Structures and Algorithms</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="flex-grow text-sm sm:text-base py-3 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-300 ease-in-out">
              Flashcards
            </button>
            <button className="flex-grow text-sm sm:text-base py-3 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-300 ease-in-out">
              Practice Quiz
            </button>
            <button className="flex-grow text-sm sm:text-base py-3 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-300 ease-in-out">
              OttoChat
            </button>
          </div>
          <div className="text-center">
            <button className="text-lg py-3 px-8 rounded-lg bg-purple-500 text-white hover:bg-purple-600 focus:outline-none transition duration-300 ease-in-out">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPage;
