import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";
import Author from "./Author";
import Display from "./Display";
import arrButtons from "../data/arrButtons";

const Container = () => {
  const [displayFormula, setDisplayFormula] = useState("");
  const [displayResult, setDisplayResult] = useState(0);
  const [lengthOfRow, setLengthOfRow] = useState(18);

  const checkValidation =
    /^(?!0\d)(?!.*\.\d*\.)[0-9+\-*/. \t\r\n]*$|^(?=0\.0*[1-9]+\d*$)(?!\d*\.)(?!.*\b0\d)(?!.*\.\d*\.)[0-9+\-*/. \t\r\n]*$/g;
  const checkValidationOperatorsMulti = /[+-]+[*]/g;
  const checkValidationOperatorsDivide = /[+-]+[/]/g;
  const operators = ["+", "-", "*", "/"];
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  // enter by keyboard:
  const pressKeyHandler = (event) => {
    const newValue = event.target.value;
    if (checkValidation.test(newValue)) {
      const sanitizedValue = newValue.replace(/^[/*]|\b(?<!\.)0\d+/g, ""); // Remove numbers with leading zeros and start from "*/"
      setDisplayFormula(sanitizedValue.toString());
      setDisplayResult("typing...");
    }
    // prevent '+/; -*; +*; -/' in whole expression:
    if (checkValidationOperatorsMulti.test(newValue)) {
      const sanitizedValue = newValue.replace(/[+-]+[*]/g, "*");
      setDisplayFormula(sanitizedValue.toString());
      setDisplayResult("typing...");
    }
    if (checkValidationOperatorsDivide.test(newValue)) {
      const sanitizedValue = newValue.replace(/[+-]+[/]/g, "/");
      setDisplayFormula(sanitizedValue.toString());
      setDisplayResult("typing...");
    }
    // continue calculations from keyboard:
    if (
      operators.includes(newValue.charAt(newValue.length - 1)) &&
      displayFormula.includes("=")
    ) {
      pressButtonHandler(newValue.charAt(newValue.length - 1));
    }
    // start new calculations from keyboard:
    if (
      digits.includes(newValue.charAt(newValue.length - 1)) &&
      displayFormula.includes("=")
    ) {
      pressButtonHandler(newValue.charAt(newValue.length - 1));
    }
  };

  // make press Enter is equal to "=" ==========================================
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      pressButtonHandler("=");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown); // Attach the event listener when the component mounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Detach the event listener when the component unmounts
    };
  });
  // make press Enter is equal to "=" ==========================================

  // enter by mouse/finger:
  const pressButtonHandler = (keyName) => {
    const chainFormula = (prevInput) => {
      // prevent start from 00:
      if (prevInput === "0" && buttonPress.keyName === "0") {
        return prevInput;
      }
      // prevent start from '/' and '*':
      if (prevInput.startsWith("/") || prevInput.startsWith("*")) {
        return buttonPress.keyName;
      }
      // prevent '..' in whole expression:
      if (!checkValidation.test(prevInput + buttonPress.keyName)) {
        return prevInput;
      }
      // prevent '+/; -*; +*; -/' in whole expression:
      if (checkValidationOperatorsMulti.test(prevInput + buttonPress.keyName)) {
        const res = prevInput + buttonPress.keyName;
        return res.replace(/[+-]+[*]/g, "*");
      }
      if (
        checkValidationOperatorsDivide.test(prevInput + buttonPress.keyName)
      ) {
        const res = prevInput + buttonPress.keyName;
        return res.replace(/[+-]+[/]/g, "/");
      }
      // prevent lead '00' in whole expression and start from "*/":
      if (!checkValidation.test(prevInput + buttonPress.keyName)) {
        const res = prevInput + buttonPress.keyName;
        return res.replace(/^[/*]|\b(?<!\.)0\d+/g, "");
      }

      return prevInput + buttonPress.keyName;
    };

    const buttonPress = arrButtons.find(
      (element) => element.keyName === keyName
    );
    // erase all data:
    if (buttonPress.keyName === "AC") {
      setLengthOfRow(18); // set rows of textarea after pushing "AC"
      setDisplayFormula("");
      setDisplayResult(0);
      // document.querySelector("textarea").focus();
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
      setLengthOfRow(22); // set rows of textarea after pushing "="
      // if just press equal button:
      if (displayFormula === "" || displayFormula.includes("=")) {
        return;
      }

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
    // to continue calculation:
    if (
      operators.includes(buttonPress.keyName) &&
      displayFormula.includes("=")
    ) {
      setDisplayFormula(displayResult.replace(/\s/g, ""));
    }
    // to start new calculations:
    if (digits.includes(buttonPress.keyName) && displayFormula.includes("=")) {
      setDisplayFormula("");
      setDisplayFormula(chainFormula);
      setDisplayResult(buttonPress.keyName);
      return;
    }

    setDisplayFormula(chainFormula);
    setDisplayResult(buttonPress.keyName);
    return;
  };

  return (
    <div className="">
      <div
        id="content"
        className="p-[5px] bg-[white] max-w-fit border-2 border-solid  mx-auto rounded-[5px] max-w-[300px]"
      >
        <Display
          displayFormula={displayFormula}
          onChange={pressKeyHandler}
          displayResult={displayResult}
          lengthOfRow={lengthOfRow}
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
