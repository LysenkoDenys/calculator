import React from "react";

const Display = (props) => {
  return (
    <div
      id="display"
      className="bg-[#b6b2b2] mb-[5px] p-[5px] rounded-[5px] max-w-[280px] md:max-w-[600px]]"
    >
      <div id="formula" className="text-[22px] text-[orange] text-right">
        <input
          value={props.displayFormula}
          onChange={props.onChange}
          type="textarea"
          autoFocus
          className="bg-[black] rounded-[5px] text-right w-full resize-y break-all "
        />
      </div>
      <div
        id="result"
        className="text-[30px] text-[white] text-right overflow-hidden"
      >
        {props.displayResult}
      </div>
    </div>
  );
};

export default Display;
