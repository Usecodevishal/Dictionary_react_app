import React, { useContext, useState } from "react";
import Header from "../components/header";
import "../components/header/style.css";
import axios from "axios";

function Home({allWords, setAllWords}) {
  const [inputWord, setInputWord] = useState("");
 
  const [inputData, setInputData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);


  //console.log(allWords);


  async function getData() {
    try{
       
        let response = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
        let Data =  response.data[0] ;
        //console.log(Data);
        
        console.log(Data);
        setInputData(Data);
        setLoading(false)
        
    }
    
    catch(err){
        console.error(err);
    }

    console.log(inputData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    
    // let inputSet = new Set(allUniqueInput);
    // let newAllUniqueWord = [...inputSet];

    // setAllUniqueInput([...newAllUniqueWord]);
    
    //console.log(inputWord);
    
    if(inputWord!==""){
        setShow(true);
        getData();
        setAllWords((prev) => [inputWord, ...prev]);

    }else{
        setShow(false);
    }
    
    
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "3rem",
        }}
      >
        <input
          onChange={(e) => setInputWord(e.target.value)}
          value={inputWord}
          type="text"
          placeholder="Search for a word..."
        />
        <button
          type="submit"
          style={{
            backgroundColor: "pink",
          }}
        >
          Search
        </button>
      </form>

          {
            ( loading == true) ? (show && <h1>Loading...</h1>): (
          <div className="meaning-div" style={{backgroundColor: "white"}}
          >
            <h1>{inputData.word}</h1>
            <p>{inputData.phonetic}</p>
            <audio controls src={inputData.phonetics[0].audio}></audio>
            <audio controls src={inputData.phonetics[1].audio}></audio>
            {/* <h2>{inputData.meanings[0].partOfSpeech}</h2> */}
            {inputData.meanings.map((item,index) => (
              <div key={index}>
                <h2 key={index}>{item.partOfSpeech}</h2>
                {item.definitions.map((ele,index) => (
                <p key={index}>{ele.definition}</p>
               ))}
              </div>
              // <h1 key={index}>{item.partOfSpeech}</h1>
              // item.definitions.map((ele,index) => (
              //   <p key={index}>{ele.definition}</p>
              // ))
            ))}
          </div>
            )
          }
    </div>
  );
}

export default Home;
