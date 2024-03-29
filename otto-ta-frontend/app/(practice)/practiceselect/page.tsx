"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PracticeSelectPage: FC = () => {
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
  const [checkedFiles, setCheckedFiles] = useState<string[]>([]);

  const handleFileCheck = (file: string, isChecked: boolean) => {
    setCheckedFiles((prevFiles) =>
      isChecked ? [...prevFiles, file] : prevFiles.filter((f) => f !== file),
    );
  };

  const handleGenerateReview = async () => {
    const filesString = checkedFiles.join(",");
    // const response = await fetch(`http://address.tech/get_questions/${filesString}`);
    // const data = await response.json();
    // if(response.status === 200) {
    //   // Assuming you want to navigate to a new page and pass along the fetched data
    //   router.push("/flashcardplay");
    // }
    router.push("/practiceplay");
    // handle other response statuses if needed
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500 to-indigo-600">
      <h1 className="text-4xl text-white font-bold mb-10">
        Select the files you would like to generate a practice quiz on.
      </h1>
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

export default PracticeSelectPage;
