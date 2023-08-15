import React from "react";

const Display = () => {
  return (
    <div id="display" className="bg-[#b6b2b2] mb-[5px] p-[5px] rounded-[5px]">
      <div
        id="formula"
        className="min-h-[20px] text-2xl text-[orange] text-right align-text-top break-words"
      >
        <input type="number" className="bg-[black] rounded-[5px] block" />
      </div>
      <div id="result" className="text-[29px] text-[white] text-right">
        result
      </div>
    </div>
  );
};

export default Display;
