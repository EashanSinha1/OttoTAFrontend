"use client";

import Image from "next/image";
import { useState } from "react";
import "./card.css";

//                <Link href={props.link} className="button-holder">                </Link>

interface CardProps {
  question: string;
  answer: string;
  hint: string;
}

function Card(props: CardProps) {
  const [showHint, setShowHint] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleTouch = () => {
    setIsFlipped(!isFlipped); // Toggle on touch
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleTouch}>
      <div className="card-front">
        <h1 className="card-title">{props.question}</h1>

        <button className="card-hint-button"
          onClick={(e) => {
            e.stopPropagation();
            setShowHint(!showHint);
          }}
        >
          Hint
        </button>
        {showHint && <p className="card-hint"
        >{props.hint}</p>}
      </div>
      <div className="card-back">
        <h1 className="card-answer">{props.answer}</h1>
      </div>
    </div>
  );
}

export default Card;
