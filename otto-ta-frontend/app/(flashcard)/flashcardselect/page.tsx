"use client";
import { FC, use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});


const FlashcardSelectPage: FC = () => {
  const router = useRouter();
  const [files, setFiles] = useState([
    "L1 - Binary & IEEE",
    "L2 - State Machines",
    "L3 - CPU Architecture",
    "L4 - LC3",
    "L5 - Circuit Design",
    "L6 - Datapath",
    "L7 - Assembly",
    "L8 - Assembly pt 2",
    "L9 - C",
    "L10 - C pt 2",
    "L11 - C pt 3",
    "L12 - C++",

    // ... other files
  ]);


  useEffect(() => {

    
  }, []);
  const [checkedFiles, setCheckedFiles] = useState<string[]>([]);

  const handleFileCheck = (file: string, isChecked: boolean) => {
    setCheckedFiles((prevFiles) =>
      isChecked ? [...prevFiles, file] : prevFiles.filter((f) => f !== file),
    );
  };
  const goBack = () => {
    router.push('/learn');
  };

  const handleGenerateReview = async () => {
    const filesString = checkedFiles.join(",");
    // const response = await fetch(`http://address.tech/get_questions/${filesString}`);
    // const data = await response.json();
    // if(response.status === 200) {
    //   // Assuming you want to navigate to a new page and pass along the fetched data
    //   router.push("/flashcardplay");
    // }
    router.push("/flashcardplay");
    // handle other response statuses if needed
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-700 to-fuchsia-400">
      <div className={lexend.className}>
      <button onClick={goBack} className="bg-purple-500 text-white px-4 py-2 mb-5 rounded-lg hover:bg-purple-600 focus:outline-none">
          Back
        </button>
      <h1 className="text-4xl text-white font-bold mb-10">
        Select the files you would like to generate flashcards for.
      </h1>
      </div>
      <div className="flex flex-col items-center w-full max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
        {files.map((file, index) => (
          <div key={index} className="flex items-center w-full mb-4">
            <input
              type="checkbox"
              id={`file-${index}`}
              name={`file-${index}`}
              onChange={(e) => handleFileCheck(file, e.target.checked)}
              className="w-6 h-6 mr-2"
            />
            <label
              htmlFor={`file-${index}`}
              className="flex-1 text-lg cursor-pointer text-black"
            >
              {file}
            </label>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg transition-transform duration-200 hover:scale-105"
        onClick={handleGenerateReview}
      >
        Generate
      </button>
    </main>
  );
};

export default FlashcardSelectPage;
