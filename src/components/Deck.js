import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

const Deck = () => {
  const defaultDeck = [
    {
      front: "the apple",
      back: "der Apfel",
      correct: false,
    },
    {
      front: "the bed",
      back: "das Bett",
      correct: false,
    },
    {
      front: "the cat",
      back: "die Katze",
      correct: false,
    },
  ];
  const [deck, setDeck] = useState(defaultDeck);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const markRight = () => {
    if (!deck[currentIndex].correct) {
      setScore(score + 1);
      const newDeck = [...deck];
      newDeck[currentIndex].correct = true;
      setDeck(newDeck);
    }
  };

  const markWrong = () => {};

  const nextCard = () => {
    deck.length - 1 === currentIndex
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <div>Score: {score}</div>
      <Flashcard
        front={deck[currentIndex].front}
        back={deck[currentIndex].back}
      />
      <button onClick={markRight}>right</button>
      <button onClick={markWrong}>wrong</button>
      <button onClick={nextCard}>next card</button>
    </div>
  );
};

export default Deck;
