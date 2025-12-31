import boom from "../assets/boom.png";
import App from "../App";
import "./LosePage.css";

function LosePage(props) {
  return (
    <>
      <h1 className="you-lose">"You Lose!"</h1>
      <p className="lose-text">The correct number was...</p>
      <div className="lose-answer-container">
        <div className="lose-box"></div>
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
