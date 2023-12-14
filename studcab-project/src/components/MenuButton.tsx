import { FC } from "react";
import { FiMenu } from "react-icons/fi";
import Hint from "./Hint";

interface MenuButtonProps {
  setSideBarOpen: (value: boolean) => void;
}

const MenuButton: FC<MenuButtonProps> = ({ setSideBarOpen }) => {
  return (
    <button
      onClick={() => setSideBarOpen(true)}
      className="relative flex items-center justify-center w-10 h-10 rounded-md sm:hover:bg-soft-black-hover-100 group">
      <>
        <FiMenu className="text-2xl cursor-pointer" />
        <Hint arrowDirection="up">Menu</Hint>
      </>
    </button>
  );
};

export default MenuButton;
