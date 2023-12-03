import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage";
import History from "./pages/Historypage";

function App() {
  const [allWords, setAllWords] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home allWords={allWords} setAllWords={setAllWords} />} />
          <Route path="/history" element={<History allWords={allWords} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
