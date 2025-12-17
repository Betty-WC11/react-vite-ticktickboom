import "./App.css";
import Header from "./components/Header.jsx";
import NumberTile from "./components/NumberTile.jsx";
import { useState } from "react";
import WinPage from "./components/WinPage.jsx";
import bomb from "./assets/bomb.webp";
import LosePage from "./components/LosePage.jsx";

function App() {
  const [gameStatus, setGameStatus] = useState("playing");
  const [attempts, setAttempts] = useState(5);

  // randomising the number for user to guess
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100 + 1)
  );
  console.log(randomNumber);

  // for the 1-100 tiles
  const [allTiles, setAllTiles] = useState(() => {
    const tiles = [];
    for (let i = 1; i < 101; i++) {
      tiles.push(i);
    }
    return tiles;
  });

  const guessResult = (num) => {
    if (num === randomNumber) {
      setGameStatus("winning");
      return;
    } else if (num !== randomNumber && num >= randomNumber) {
      setAllTiles(allTiles.filter((value) => value < num));
      setAttempts(attempts - 1);
    } else if (num !== randomNumber && num <= randomNumber) {
      setAllTiles(allTiles.filter((value) => value > num));
      setAttempts(attempts - 1);
    }

    if (attempts === 1) {
      setGameStatus("losing");
    }
  };

  const handleOnClick = (clickedNumber) => {
    guessResult(clickedNumber);
  };

  if (gameStatus === "winning") {
    return (
      <>
        <Header />
        <WinPage answer={randomNumber} />
      </>
    );
  }

  if (gameStatus === "losing") {
    return (
      <>
        <Header />
        <LosePage answer={randomNumber} />
      </>
    );
  }

  return (
    <>
      <Header />
      <h3 className="attempts-text">YOU HAVE - {attempts} - ATTEMPTS</h3>
      <img src={bomb} alt="bomb-picture" className="bomb-picture" />
      <div className="numberTiles">
        {allTiles.map((number) => {
          return (
            <NumberTile
              num={number}
              key={number}
              onClick={() => handleOnClick(number)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
