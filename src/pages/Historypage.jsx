import React, { useContext } from "react";
import Header from "../components/header";
import everyInputContext from "../context/everyInputContext";

function History({ allWords }) {
    let setWord = new Set(allWords);
    let uniqueWord = [...setWord];

  return (
    <div>
      <Header />
      {allWords && uniqueWord.map((word, index) => <h3 key={index}>{word}</h3>)}
    </div>
  );
}

export default History;
