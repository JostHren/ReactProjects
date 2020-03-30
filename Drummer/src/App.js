import React, { useState, useEffect } from "react";
import "./App.css";
import Play from "./components/Play";

const drums = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function App() {
  const [drumId, setDrumId] = useState("/");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  const playSoundDirect = cod => {
    const sound = document.getElementById(String.fromCharCode(cod));
    sound.currentTime = 0;
    sound.play();
  };

  let handleKeyPress = e => {
    switch (e.keyCode) {
      case 81:
        console.log("You pressed: Q -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[0].id);
        break;
      case 87:
        console.log("You pressed: W -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[1].id);
        break;
      case 69:
        console.log("You pressed: E -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[2].id);
        break;
      case 65:
        console.log("You pressed: A -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[3].id);
        break;
      case 83:
        console.log("You pressed: S -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[4].id);
        break;
      case 68:
        console.log("You pressed: D -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[5].id);
        break;
      case 90:
        console.log("You pressed: Z -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[6].id);
        break;
      case 88:
        console.log("You pressed: X -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[7].id);
        break;
      case 67:
        console.log("You pressed: C -", e.keyCode);
        playSoundDirect(e.keyCode);
        setDrumId(drums[8].id);
        break;

      default:
        return; // Do nothing for the rest
    }
  };

  return (
    <div className="App-header">
      <div className="text-center" id="drum-machine">
        <h5 className="text-center mb-3">-- Drummer --</h5>
        <p className="App-link" id="text">
          This is Drummer! Go ahead and play some muzzzic.
        </p>
        <div id="pads" style={{ width: "60vw" }}>
          {drums.map(drum => (
            <Play
              key={drum.keyCode}
              handler={handleKeyPress}
              idhandler={setDrumId}
              letter={drum.keyTrigger}
              clip={drum.url}
              drumId={drum.id}
            />
          ))}
        </div>
        <div id="display" className="border mt-4" style={{ width: "60vw" }}>
          Last beat: {drumId}
        </div>
      </div>
    </div>
  );
}

export default App;
