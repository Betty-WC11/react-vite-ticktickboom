import bombMan from "../assets/bombMan.webp";
import "./WinPage.css";

function WinPage(props) {
  return (
    <>
      <h1 className="you-win">YOU WIN!</h1>
      <div className="win-answer-container">
        <div className="win-box"></div>
        <h2 className="win-answer">{props.answer}</h2>
      </div>

      <p className="defuse-bomb-text">YOU HAVE SAFELY DEFUSED THE BOMB</p>
      <div className="bomb-man-box">
        <img src={bombMan} alt="bomb-man" className="bomb-man" />
      </div>
      <button className="winResetButton" onClick={props.resetGame}>
        PLAY AGAIN!
      </button>
    </>
  );
}

export default WinPage;
