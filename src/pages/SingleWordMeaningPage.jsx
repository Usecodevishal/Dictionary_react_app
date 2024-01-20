import { useParams } from "react-router-dom"
import Header from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleWordMeaningPage () {

    let [loading, setLoading] = useState(true);
    const params = useParams();
    console.log(params.id);

    let [word, setWord] = useState("");


    useEffect( () => {
       getWordData();
    }, [])

    async function getWordData () {
        try {
            let wordData = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${params.id}`)
            let Data = wordData.data[0];
            console.log(Data);

            setWord(Data);
            setLoading(false);
        } catch (error) {
            console.log("Error >>> :" , error);
        }
    }

    return (<>
    <Header/>
    <h2>Single Word Meaning Page</h2>

    {loading === true ?(<h1>Loading...</h1>):(<div className="meaning-div" style={{backgroundColor: "white"}}
          >
            <h1>{word.word}</h1>
            <p>{word.phonetic}</p>
            <audio controls src={word.phonetics[0].audio}></audio>
            <audio controls src={word.phonetics[1].audio}></audio>
            {/* <h2>{word.meanings[0].partOfSpeech}</h2> */}
            {word.meanings.map((item,index) => (
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
          </div>)}
    </>)
}

export default SingleWordMeaningPage;