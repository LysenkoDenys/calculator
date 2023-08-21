import React from "react";

const Button = (props) => {
  const styleDefaultAdd =
    "bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_98%,#FDFDFD_0%)] text-[#606060]";
  const styleDefault =
    "flex items-center justify-center cursor-pointer py-[12px] text-3xl font-bold border transition-all duration-[0.2s] ease-[ease]  rounded-[5px] border-solid border-[#8F9092] hover:shadow-[inset_0_0_3px_3px_#CECFD1] active:shadow-[inset_0_0_30px_#aaa] focus:shadow-[inset_0_0_30px_#aaa] ";
  const setStyle = (btn) => {
    const operators =
      styleDefault +
      "text-white bg-[linear-gradient(to_top,#3A4438_99%,#fff_98%,#FDFDFD_0%)]";
    const className = {
      clear:
        styleDefault +
        "text-white bg-[linear-gradient(to_top,#F50000_99%,#fff_98%,#FDFDFD_0%)]",
      backspace:
        styleDefault +
        "text-white bg-[linear-gradient(to_top,#676665_99%,#fff_98%,#FDFDFD_0%)]",
      equals:
        styleDefault +
        "text-white bg-[linear-gradient(to_top,#327323_99%,#fff_98%,#FDFDFD_0%)] row-[4/6] col-[4]",
      zero: styleDefault + styleDefaultAdd + " col-[1/3]",
      add: operators,
      subtract: operators,
      multiply: operators,
      divide: operators,
    };
    return className[btn];
  };

  return (
    // https://uiverse.io/lenfear23/empty-lion-5
    <div
      id={props.id}
      onClick={() => {
        props.onClick(props.nameButton);
      }}
      className={
        setStyle(props.id)
          ? `${setStyle(props.id)}`
          : `${styleDefault + styleDefaultAdd}`
      }
    >
      {props.nameButton}
    </div>
  );
};

export default Button;
