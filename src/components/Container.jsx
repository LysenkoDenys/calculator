import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";
import Author from "./Author";
import Display from "./Display";
import arrButtons from "../data/arrButtons";

const Container = () => {
  const [displayFormula, setDisplayFormula] = useState("");
  const [displayResult, setDisplayResult] = useState(0);

  const checkValidation =
    /^(?!0\d)(?!.*\.\d*\.)[0-9+\-*/. \t\r\n]*$|^(?=0\.0*[1-9]+\d*$)(?!\d*\.)(?!.*\b0\d)(?!.*\.\d*\.)[0-9+\-*/. \t\r\n]*$/g;

  // enter by keyboard:
  const pressKeyHandler = (event) => {
    const newValue = event.target.value;
    if (checkValidation.test(newValue)) {
      const sanitizedValue = newValue.replace(/\b0\d+/g, ""); // Remove occurrences of numbers with leading zeros
      setDisplayFormula(sanitizedValue.toString());
      setDisplayResult("typing...");
    }
  };

  // enter by mouse/finger:
  const pressButtonHandler = (keyName) => {
    const chainFormula = (prevInput) => prevInput + buttonPress.keyName;
    const buttonPress = arrButtons.find(
      (element) => element.keyName === keyName
    );
    // erase all data:
    if (buttonPress.keyName === "AC") {
      setDisplayFormula("");
      setDisplayResult(0);
      return;
    }
    // backspace last character of data:
    if (buttonPress.keyName === "DEL") {
      setDisplayFormula(displayFormula.slice(0, -1));
      setDisplayResult("del");
      return;
    }
    // calculate the result:
    if (buttonPress.keyName === "=") {
      // if just press equal button:
      if (displayFormula === "") {
        setDisplayFormula("");
        setDisplayResult("enter expression");
        return;
      }
      // if just press equal button after get the result:
      console.log(displayFormula); //
      // if (displayFormula.indexOf(/=\d*$/)) {
      //   setDisplayFormula(chainFormula);
      //   setDisplayResult("enter expression");
      //   return;
      // }
      try {
        if (checkValidation.test(displayFormula)) {
          setDisplayFormula(`${displayFormula}=${evaluate(displayFormula)}`);
          setDisplayResult(
            () =>
              evaluate(displayFormula)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ") //special format to separate 3 digits
          );
          return;
        }
      } catch (error) {
        setDisplayResult("Error");
      }
    }
    // !place without a name:
    // console.log(checkValidation.test(displayFormula)); //
    // if (!checkValidation.test(displayFormula)) {
    //   console.log("yeah!"); //
    //   // setDisplayFormula(chainFormula);
    // }
    setDisplayFormula(chainFormula);
    setDisplayResult(buttonPress.keyName);
    return;
  };

  return (
    <div className="">
      <div
        id="content"
        className="p-[5px] bg-[white] max-w-fit border-2 border-solid  mx-auto rounded-[5px] max-w-[300px] md:max-w-[600px]"
      >
        <Display
          displayFormula={displayFormula}
          onChange={pressKeyHandler}
          displayResult={displayResult}
        />
        <div id="grid" className="mx-auto">
          <div
            id="grid-body"
            className="grid text-[20px] bg-[#8d8c8c] grid-cols-[25%_25%_25%_25%] grid-rows-[20%_20%_20%_20%_20%] rounded-[5px] m-auto"
          >
            {arrButtons.map((button) => {
              return (
                <Button
                  onClick={pressButtonHandler}
                  key={button.id}
                  id={button.idButton}
                  nameButton={button.keyName}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};

export default Container;
