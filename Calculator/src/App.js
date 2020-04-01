import React, { useState } from "react";
import "./App.css";

function App() {
  const [inNum, setInNum] = useState("");
  const [stVal, setStVal] = useState("");
  const [operator, setOperator] = useState("0");
  const [clear, setClear] = useState(true);

  const addNumber = add => {
    if (clear === false) {
    } else {
      if (operator === "0") {
        setInNum(add);
      } else {
        inNum === "0" ? setInNum(add) : setInNum(inNum + add);
        setStVal(stVal + operator);
      }
      setOperator("");
    }
  };

  const addDecimal = () => {
    if (clear === false) {
      clearAll();
    } else {
      if (operator === "0") {
        setInNum("0.");
      } else {
        inNum.includes(".")
          ? console.log("Already included!")
          : inNum === "0"
          ? setInNum("0.")
          : setInNum(inNum + ".");
      }
      setOperator("");
    }
  };

  const doMath = inp => {
    if (clear === false) {
      setStVal(inNum);
      setInNum("");
      setOperator("");
      setClear(true);
      switch (inp) {
        case "add":
          setOperator(" + ");
          break;

        case "subtract":
          if (operator === " - ") {
            setOperator(" - ");
          } else {
            setOperator(operator + " - ");
          }
          break;

        case "multiply":
          setOperator(" * ");
          break;

        case "divide":
          setOperator(" / ");
          break;

        default:
          break;
      }
    } else {
      switch (inp) {
        case "add":
          setOperator(" + ");
          break;

        case "subtract":
          if (operator === " - ") {
            setOperator(" - ");
          } else {
            setOperator(operator + " - ");
          }
          break;

        case "multiply":
          setOperator(" * ");
          break;

        case "divide":
          setOperator(" / ");
          break;

        default:
          break;
      }
      setStVal(stVal + inNum);
      setInNum("");
    }
  };

  const gimmeNum = () => {
    let resultatos = stVal + inNum;
    setStVal(stVal + inNum);
    return eval(resultatos);
  };

  const result = () => {
    if (clear === false) {
    } else {
      setInNum(Math.round(gimmeNum() * 10000) / 10000);
      setClear(false);
    }
  };

  const clearAll = () => {
    setInNum("");
    setStVal("");
    setOperator("0");
    setClear(true);
  };

  return (
    <div className="App-header">
      <div className="text-center" id="calculator">
        <h5 className="text-center mb-3">-- Calculator --</h5>
      </div>
      <div
        className="border border-secondary rounded"
        style={{ width: "250px" }}
      >
        <div id="display" className=" m-2 text-right">
          <p className="h6 pr-1 text-warning">
            {stVal}
            {operator}
            {clear && inNum}
          </p>
          <p className="h3 bg-secondary pr-1 rounded">
            {operator !== "" ? operator : inNum}
          </p>
        </div>
        <div id="numpads" className=" p-3 m-1">
          <div id="0123" className="row">
            <button
              id="seven"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("7")}
            >
              7
            </button>
            <button
              id="eight"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("8")}
            >
              8
            </button>
            <button
              id="nine"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("9")}
            >
              9
            </button>

            <button
              id="add"
              className="col btn btn-secondary m-1"
              onClick={() => doMath("add")}
            >
              +
            </button>
          </div>
          <div id="0123" className="row">
            <button
              id="four"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("4")}
            >
              4
            </button>
            <button
              id="five"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("5")}
            >
              5
            </button>
            <button
              id="six"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("6")}
            >
              6
            </button>
            <button
              id="subtract"
              className="col btn btn-secondary m-1"
              onClick={() => doMath("subtract")}
            >
              -
            </button>
          </div>
          <div id="0123" className="row">
            <button
              id="one"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("1")}
            >
              1
            </button>
            <button
              id="two"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("2")}
            >
              2
            </button>
            <button
              id="three"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("3")}
            >
              3
            </button>
            <button
              id="multiply"
              className="col btn btn-secondary m-1"
              onClick={() => doMath("multiply")}
            >
              *
            </button>
          </div>
          <div id="0123" className="row">
            <button
              id="clear"
              className="col btn btn-danger m-1"
              onClick={() => clearAll()}
            >
              C
            </button>
            <button
              id="zero"
              className="col btn btn-primary m-1"
              onClick={() => addNumber("0")}
            >
              0
            </button>
            <button
              id="decimal"
              className="col btn btn-secondary m-1"
              onClick={() => addDecimal()}
            >
              .
            </button>
            <button
              id="divide"
              className="col btn btn-secondary m-1"
              onClick={() => doMath("divide")}
            >
              /
            </button>
          </div>
          <div id="resultatos" className="row">
            <button
              id="equals"
              className="col btn btn-warning m-1"
              onClick={() => result()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
