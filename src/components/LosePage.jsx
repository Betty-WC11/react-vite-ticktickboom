import boom from "../assets/boom.png";
import App from "../App";
import "./LosePage.css";

function LosePage(props) {
  return (
    <>
      <h1 className="you-lose">YOU LOSE!</h1>
      <p className="lose-text">Correct number is...</p>
      <div className="lose-answer-container">
        <h2 className="lose-answer">{props.answer}</h2>
      </div>
      <div className="boom-pic">
        <img src={boom} alt="boom" className="boom" />
      </div>
      <button className="loseResetButton" onClick={props.resetGame}>
        PLAY AGAIN!
      </button>
    </>
  );
}

export default LosePage;
