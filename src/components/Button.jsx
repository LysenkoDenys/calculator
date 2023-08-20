import React from "react";

const Button = (props) => {
  const setStyle = (btn) => {
    const operators =
      "flex items-center justify-center text-white cursor-pointer py-[12px] text-3xl font-bold bg-[linear-gradient(to_top,#3A4438_50%,#fff_98%,#FDFDFD_100%)] border transition-all duration-[0.2s] ease-[ease] text-[#606060] rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa]";
    const className = {
      clear:
        "flex items-center justify-center cursor-pointer py-[12px] text-3xl font-bold text-white bg-[linear-gradient(to_top,#F50000_80%,#fff_100%,#FDFDFD_100%)] border transition-all duration-[0.2s] ease-[ease] text-[#606060] rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa] col-[1/3]",
      equals:
        "flex items-center justify-center cursor-pointer py-[12px] text-3xl font-bold text-white bg-[linear-gradient(to_top,#327323_80%,#fff_100%,#FDFDFD_100%)] border transition-all duration-[0.2s] ease-[ease] text-[#606060] rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa] row-[4/6] col-[4]",
      zero: "flex items-center justify-center cursor-pointer py-[12px] text-3xl font-bold bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] border transition-all duration-[0.2s] ease-[ease] text-[#606060] rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa] col-[1/3]",
      add: operators,
      subtract: operators,
      multiply: operators,
      divide: operators,
    };
    return className[btn];
  };
  const styleDefault =
    "flex items-center justify-center cursor-pointer py-[12px] text-3xl font-bold bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] border transition-all duration-[0.2s] ease-[ease] text-[#606060] rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa]";
  console.log(props.id); //
  console.log(setStyle("clear")); //
  return (
    // https://uiverse.io/lenfear23/empty-lion-5
    <div
      id={props.id}
      onClick={() => {
        props.onClick(props.nameButton);
      }}
      className={
        setStyle(props.id) ? `${setStyle(props.id)}` : `${styleDefault}`
      }
    >
      {props.nameButton}
    </div>
  );
};

export default Button;
