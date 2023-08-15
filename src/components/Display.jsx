import React from "react";

const Display = () => {
  return (
    <div id="display" className="bg-[#4d4a4a] m-[2px] p-[5px] rounded-[5px]">
      <div
        id="formula"
        className="min-h-[20px] text-xl text-[orange] text-right align-text-top leading-5 break-words"
      >
        <input type="number" className="bg-[black]" />
      </div>
      <div id="result" className="text-[29px] text-[white] text-right">
        result
      </div>
    </div>
  );
};

export default Display;
