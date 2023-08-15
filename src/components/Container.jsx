import React from "react";
import Button from "./Button";
import Author from "./Author";
import Display from "./Display";

const Container = () => {
  return (
    <div className="">
      <div
        id="content"
        className="p-[5px] bg-[white] max-w-fit border-2 border-solid  mx-auto rounded-[5px]"
      >
        <Display />
        <div id="grid" className="mx-auto">
          <div
            id="grid-body"
            className="grid text-[20px] bg-[#8d8c8c] grid-cols-[25%_25%_25%_25%] grid-rows-[20%_20%_20%_20%_20%] rounded-[5px] m-auto"
          >
            <Button className="col-start-1 col-end-3" />
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
