import { FC, ReactNode } from "react";
import { IoMdArrowDropup, IoMdArrowDropleft, IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

interface HintProps {
  arrowDirection: "up" | "left" | "down" | "right";
  children?: ReactNode;
}

const Hint: FC<HintProps> = ({ arrowDirection, children }) => {
  const textPositions = {
    up: "top-[calc(100%+1rem)]",
    left: "left-[calc(100%+1rem)]",
    down: "bottom-[calc(100%+1rem)]",
    right: "right-[calc(100%+1rem)]",
  };

  return (
    <div className="absolute items-center justify-center hidden w-full h-full sm:flex">
      {arrowDirection === "up" && (
        <IoMdArrowDropup className="absolute group-hover:block hidden text-4xl text-soft-black-200 dark:text-soft-white top-[calc(100%-5px)]" />
      )}
      {arrowDirection === "left" && (
        <IoMdArrowDropleft className="absolute group-hover:block hidden text-4xl text-soft-black-200 dark:text-soft-white left-[calc(100%-5px)]" />
      )}
      {arrowDirection === "down" && (
        <IoMdArrowDropdown className="absolute group-hover:block hidden text-4xl text-soft-black-200 dark:text-soft-white bottom-[calc(100%-5px)]" />
      )}
      {arrowDirection === "right" && (
        <IoMdArrowDropright className="absolute group-hover:block hidden text-4xl text-soft-black-200 dark:text-soft-white right-[calc(100%-5px)]" />
      )}
      <div
        className={`absolute bg-soft-black-200 dark:bg-soft-white group-hover:block hidden dark:text-soft-black-200 text-soft-white w-max rounded-md p-1 px-2 ${textPositions[arrowDirection]}`}>
        <div className="relative w-full h-full"></div>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Hint;
