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

  const [attempts, setAttempts] = useState(3);
  const [gameStatus, setgameStatus] = useState("play");
  // - this is the status of the game

  // for the 1-100 tiles
  const [allTiles, setAllTiles] = useState(() => {
    const tiles = [];
    for (let i = 1; i < 101; i++) {
      tiles.push(i);
    }
    return tiles;
  });

  const isAttemptMoreThanAnswer = () => {
    // add logic in here to check if the guess is more than the answer
    // if it is delete all the bigger numbers
  };

  const isAttemptLessThanAnswer = () => {
    // add logic in here to check if the guess is less than the answer
    // if it is delete all the previous numbers
  };

  const handleOnClick = (clickedNumber) => {
    // if attempts === 0 set the gameStatus to 'lost'
    // if number === randomNumber set the gameStatus to 'won'
    // isAttemptLessThanAnswer()
    // isAttemptLessThanAnswer()
  };

  return (
    <>
      {gamesStatus === "play" && (
        <>
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
          <button onClick={setGameStatus("won")}>win</button>
          <button onClick={setGameStatus("lose")}>lose</button>
        </>
      )}

      {gameStatus === "won" && <p>won</p>}
      {gameStatus === "lost" && <p>lost</p>}
    </>
  );
}

export default App;
