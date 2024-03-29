"use client";
import { FC, use, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FlippableCard from "@/components/cardholder/flippable-card";

const FlashcardPlayPage: FC = () => {
  const router = useRouter();
  const [cardInfo, setCardInfo] = useState({
    question:
      "Prove that if a language L is regular, then the language obtained by removing specific strings from L is also regular.",
    answer:
      "If a language L is regular, then the language obtained by removing specific strings from L while preserving the regular structure is also regular.",
    hint: "Think about how the removal of specific strings affects the regularity of a language.",
  });
  const [index, setIndex] = useState(1);
  const maxDex = 10;
  async function getCard() {
    // const response = await fetch('https://back.otto-ta.tech/questions/Lab+02+slides.pdf', {
    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // // Include any necessary data in the body of the request
    // body: JSON.stringify({
    //   // data
    // }),
    // });

    // // Check if the request was successful
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const data = await fetch("https://back.otto-ta.tech/flashcard");
    const json = await data.json();
    setCardInfo({
      question: json.question,
      answer: json.answer,
      hint: json.hint,
    });
  }
  useEffect(() => {
    getCard();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <h1 className="pb-5 text-xl">
        Flashcard {index}/{maxDex}
      </h1>
      <FlippableCard
        question={cardInfo.question}
        answer={cardInfo.answer}
        hint={cardInfo.hint}
      />
      <div className="w-[500px] flex justify-between mt-4">
        <button 
        
        >Previous</button>
        <button onClick={async () => {
const data = await fetch("https://back.otto-ta.tech/flashcard");
const json = await data.json();
setIndex(index + 1);
setCardInfo({
  question: json.question,
  answer: json.answer,
  hint: json.hint,
});
        }}
        >Next</button>
      </div>
    </main>
  );
};

export default FlashcardPlayPage;
