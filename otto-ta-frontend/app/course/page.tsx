"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CoursePage: FC = () => {
  const [courseName, setCourseName] = useState(
    "CS1332, Data Structures and Algorithms",
  );
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <h1 className="text-4xl">How do you want to start learning</h1>
      <h1 className="bg-fuchsia-500 rounded-[29px] text-2xl px-3 py-2">
        {courseName}
      </h1>
      <div className="flex space-x-2">
        <Link href="/signin">Flashcards</Link>
        <Link href="/signin">Practice Quiz</Link>
        <Link href="/signin">Otto Chat</Link>
      </div>
    </main>
  );
};

export default CoursePage;
