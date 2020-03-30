import React from "react";

const Play = props => {
  const playSound = () => {
    const sound = document.getElementById(props.letter);
    sound.currentTime = 0;
    sound.play();
  };
  return (
    <button
      id={props.drumId}
      className="drum-pad m-1 btn btn-danger"
      onClick={() => {
        props.handler({ keyCode: props.letter.charCodeAt(0) });
        playSound();
        props.idhandler(props.drumId);
      }}
      style={{ width: 50 }}
    >
      {props.letter}
      <audio className="clip" id={props.letter} src={props.clip}></audio>
    </button>
  );
};

export default Play;
