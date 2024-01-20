import React, { useContext } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";


function History({ allWords }) {
    let setWord = new Set(allWords);
    let uniqueWord = [...setWord];

  return (
    <div>
      <Header />
      {allWords && uniqueWord.map((word, index) => <Link key={index} to={`/history/${word}`}><h1 key={index}>{word}</h1></Link>)}
    </div>
  );
}

export default History;
