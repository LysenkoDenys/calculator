import React from "react";
import Button from "./Button";
import Author from "./Author";
import Display from "./Display";

const Container = () => {
  return (
    <div className="">
      <div
        id="content"
        className="p-[5px] bg-[black] max-w-fit border-2 border-solid border-[#47476b] mx-auto rounded-[5px]"
      >
        <Display />
        <div id="grid" className="mx-auto">
          <div
            id="grid-body"
            className="grid text-[20px] bg-[black] grid-cols-[25%_25%_25%_25%] grid-rows-[20%_20%_20%_20%_20%]"
          >
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};

export default Container;
