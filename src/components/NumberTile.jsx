import "./NumberTile.css";

function NumberTile(props) {
  return (
    <>
      <div>
        <button className="tileNumber" onClick={props.onClick}>
          {props.num}
        </button>
      </div>
    </>
  );
}

export default NumberTile;
