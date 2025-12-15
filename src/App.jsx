import "./App.css";
import Header from "./components/Header.jsx";
import NumberTile from "./components/NumberTile.jsx";
import { useState } from "react";

function App() {
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

  // game status, status

  // have one state to handle a win / lose state e.g. const [gameStatus, setGameStatus] = [""]
  //  a. if game is won, setGameStatus will be true and therefore render win component.
  //  b. if game is lost, setGameStatus wiil be false and therefore render lose component.
  // 1. check if attempts is > 0, game over, render lose component, disable buttons.
  // 2. check is equal to random number, render win component and not game page.
  // check less than random number.
  // check is more than random number.

  const [attempts, setAttempts] = useState(3);

  const guessResult = (num) => {
    if (num !== randomNumber && num >= randomNumber) {
      setAllTiles(allTiles.filter((value) => value < num));
      setAttempts(attempts - 1);
    } else if (num !== randomNumber && num <= randomNumber) {
      setAllTiles(allTiles.filter((value) => value > num));
      setAttempts(attempts - 1);
    } else {
      console.log("you win!");
    }
  };

  const anotherTest = () => {
    return console.log("goodbye world");
  };

  const handleOnClick = (clickedNumber) => {
    guessResult(clickedNumber);
  };

  return (
    <>
      <Header />
      <h3> Attempts remaining: {attempts} </h3>
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
