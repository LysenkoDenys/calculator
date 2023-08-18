import React from "react";

const Button = (props) => {
  return (
    // https://uiverse.io/lenfear23/empty-lion-5
    <div
      id={props.id}
      onClick={() => {
        props.onClick(props.nameButton);
      }}
      className="flex items-center justify-center cursor-pointer py-[20px] text-[32px] font-bold bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] border transition-all duration-[0.2s] ease-[ease] text-sm font-semibold text-[#606060] rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa]"
    >
      {props.nameButton}
    </div>
  );
};

export default Button;
