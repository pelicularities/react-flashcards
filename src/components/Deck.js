import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  const useStyles = makeStyles((theme) => ({
    margin: { margin: theme.spacing(1) },
  }));

  const classes = useStyles();

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
      <div>
        Card {currentIndex + 1} of {deck.length}
      </div>
      <Flashcard
        front={deck[currentIndex].front}
        back={deck[currentIndex].back}
        correct={deck[currentIndex.correct]}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={markRight}
      >
        right
      </Button>

      <Button
        variant="contained"
        className={classes.margin}
        onClick={markWrong}
      >
        wrong
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className={classes.margin}
        onClick={nextCard}
      >
        next card
      </Button>
    </div>
  );
};

export default Deck;
