import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [sessionLen, setSessionLen] = React.useState(25);
  const [breakLen, setBreakLen] = React.useState(5);
  const [timer, setTimer] = React.useState("25:00");
  const [timeLeft, setTimeLeft] = React.useState(25 * 60);
  const [delay, setDelay] = React.useState(null);
  const [first, setFirst] = React.useState(true);
  const [toggle, setToggle] = React.useState(true);

  const timeZero = min => (min = min < 10 ? "0" + min + ":00" : min + ":00");

  function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    // Remember the latest callback.
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    let min = parseInt(timeLeft / 60, 10);
    let sec = parseInt(timeLeft % 60, 10);

    setTimeLeft(min * 60 + sec - 1);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    setTimer(min + ":" + sec);

    if (timeLeft === 0) {
      if (toggle === true) {
        setTimeLeft(breakLen * 60);
        setToggle(!toggle);
        playAudio();
      } else {
        setTimeLeft(sessionLen * 60);
        setToggle(!toggle);
        playAudio();
      }
    }
  }, delay);

  const handleStart = () => {
    if (first === true) {
      setTimeLeft(sessionLen * 60 - 1);
      setFirst(false);
    }

    delay === null ? setDelay("1000") : setDelay(null);
  };

  const handleReset = () => {
    setDelay(null);
    setFirst(true);
    setBreakLen(5);
    setTimer("25:00");
    setSessionLen(25);
    setToggle(true);
    stopAudio();
  };

  const handleValueChange = (val, operator) => {
    if (first === true) {
      if (val === "session") {
        if (operator === "add" && sessionLen < 60) {
          setSessionLen(sessionLen + 1);
          setTimer(timeZero(sessionLen + 1));
        } else if (operator === "sub" && sessionLen > 1) {
          setSessionLen(sessionLen - 1);
          setTimer(timeZero(sessionLen - 1));
        }
      } else {
        if (operator === "add" && breakLen < 60) {
          setBreakLen(breakLen + 1);
        } else if (operator === "sub" && breakLen > 1) {
          setBreakLen(breakLen - 1);
        }
      }
    }
  };

  const playAudio = () => {
    let myBeep = document.getElementById("beep");
    myBeep.play();
  };

  const stopAudio = () => {
    let myBeep = document.getElementById("beep");
    myBeep.pause();
    myBeep.currentTime = 0;
  };

  return (
    <div className="App-header">
      <div className="text-center" id="calculator">
        <h5 className="text-center mb-3">-- Pomodoro Clock --</h5>
      </div>
      <div
        className="border border-secondary rounded text-center"
        style={{ width: "300px" }}
      >
        <div className="row">
          <div id="break-label" className="col h6 text-cente">
            Break Length
          </div>
          <div id="session-label" className="col h6 ext-cente">
            Session Length
          </div>
        </div>
        <div className="row mb-0">
          <div className="col">
            <span
              id="break-decrement"
              className="text-danger font-weight-bold pointer"
              onClick={() => handleValueChange("break", "sub")}
            >
              -{" "}
            </span>
            <span id="break-length">{breakLen}</span>
            <span
              id="break-increment"
              className="text-success font-weight-bold pointer"
              onClick={() => handleValueChange("break", "add")}
            >
              {" "}
              +
            </span>
          </div>

          <div className="col">
            <span
              id="session-decrement"
              className="text-danger font-weight-bold pointer"
              onClick={() => {
                handleValueChange("session", "sub");
              }}
            >
              -{" "}
            </span>
            <span id="session-length">{sessionLen}</span>
            <span
              id="session-increment"
              className="text-success font-weight-bold pointer"
              onClick={() => {
                handleValueChange("session", "add");
              }}
            >
              +
            </span>
          </div>
        </div>
        <h6 id="timer-label" className="text-secondary">
          {toggle && "session"}
          {!toggle && "break"}
        </h6>
        <h1 id="time-left">{timer}</h1>
        <div className="mt-4">
          <span
            id="start_stop"
            className="text-success font-weight-bold pointer"
            onClick={() => handleStart()}
          >
            {delay === null ? "Start" : "Pause"}
          </span>
          <span
            id="reset"
            className="text-danger font-weight-bold pointer"
            onClick={() => handleReset()}
          >
            {" "}
            Reset
          </span>
        </div>
      </div>
      <p className="text-info h6 mt-4">Designed and coded by Jošt Hren</p>
      <audio id="beep">
        <source
          src="http://docomomo.si/sounds/beep.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
    </div>
  );
}

export default App;
