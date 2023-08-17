import React from "react";

const Display = (props) => {
  return (
    <div id="display" className="bg-[#b6b2b2] mb-[5px] p-[5px] rounded-[5px]">
      <div
        id="formula"
        className="text-[30px] text-[orange] text-right align-text-top overflow-y-hidden break-words"
        contenteditable="true"
      >
        <input
          value={props.displayFormula}
          onChange={props.onChange}
          type="textarea"
          className="bg-[black] rounded-[5px] block text-right"
        />
      </div>
      <div id="result" className="text-[30px] text-[white] text-right">
        {props.displayResult}
      </div>
    </div>
  );
};

export default Display;
