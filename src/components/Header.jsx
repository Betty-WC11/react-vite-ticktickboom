import "./Header.css";
import bomb from "../assets/bomb.webp";

function Header() {
  return (
    <>
      <h1 className="title">TICK... TICK... BOOM!</h1>
      <img src={bomb} alt="bomb-picture" className="bomb-picture" />
      <p className="header-text">
        GUESS THE CORRECT NUMBER OR THE BOMB EXPLODES!
      </p>
    </>
  );
}

export default Header;
