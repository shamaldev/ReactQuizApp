import React, { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((option) => {
        const isSelected = selectedAnswer === option;
        let cssClassess = "";
        if (answerState === "answered" && isSelected) {
          cssClassess = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClassess = answerState;
        }
        return (
          <li key={option} className="answer">
            <button
              onClick={() => onSelect(option)}
              className={cssClassess}
              disabled={answerState !== ""}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
