import "./App.css";
import React from "react";
import { Container } from "@material-ui/core";
import Deck from "./components/Deck";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs">
        <Deck />
      </Container>
    </div>
  );
}

export default App;
