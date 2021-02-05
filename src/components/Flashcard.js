import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";

const Flashcard = ({ front, back }) => {
  const [isFront, setFront] = useState(true);

  useEffect(() => {
    setFront(true);
  }, [front, back]);

  return (
    <Card onClick={() => setFront(!isFront)}>
      <CardContent>{isFront ? front : back}</CardContent>
    </Card>
  );
};

export default Flashcard;
