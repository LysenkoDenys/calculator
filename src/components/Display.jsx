import React from "react";

const Display = (props) => {
  const rowsOfTextarea =
    1 + Math.floor(props.displayFormula.length / props.lengthOfRow);
  return (
    <div
      id="display"
      className="bg-[linear-gradient(to_top,#676665_100%,#fff_98%,#FDFDFD_0%)] mb-[5px] p-[5px] rounded-[5px] max-w-[280px] border-2 border-solid border-[black]]"
    >
      <div id="formula" className="text-[22px] text-[orange] text-right">
        <textarea
          value={props.displayFormula}
          onChange={props.onChange}
          autoFocus
          rows={rowsOfTextarea}
          className="bg-[black] rounded-[5px] text-right w-full"
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
