import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";
import Author from "./Author";
import Display from "./Display";
import arrButtons from "../data/arrButtons";

const Container = () => {
  const [displayFormula, setDisplayFormula] = useState("");
  const [displayResult, setDisplayResult] = useState(0);

  const pressKeyHandler = (event) => {
    setDisplayFormula(event.target.value);
  };

  const pressButtonHandler = (keyName) => {
    const chainFormula = (prevInput) => prevInput + buttonPress.keyName;
    const checkValidation = /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/;
    const buttonPress = arrButtons.find(
      (element) => element.keyName === keyName
    );
    if (buttonPress.keyName === "AC") {
      setDisplayFormula("");
      setDisplayResult(0);
    } else if (buttonPress.keyName === "=") {
      try {
        console.log(displayFormula); //
        console.log(checkValidation.test(displayFormula)); //
        if (checkValidation.test(displayFormula)) {
          setDisplayResult(() => evaluate(displayFormula));
          setDisplayFormula(`${displayFormula}=${evaluate(displayFormula)}`);
        }
      } catch (error) {
        setDisplayResult("Error");
      }
    } else {
      setDisplayFormula(chainFormula);
      setDisplayResult(buttonPress.keyName);
    }
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
