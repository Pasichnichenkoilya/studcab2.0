import { FC } from "react";
import { FiMenu } from "react-icons/fi";

interface MenuButtonProps {
  setSideBarOpen: (value: boolean) => void;
}

const MenuButton: FC<MenuButtonProps> = ({ setSideBarOpen }) => {
  return (
    <button
      onClick={() => setSideBarOpen(true)}
      className="flex items-center justify-center w-10 h-10 rounded-md sm:hover:bg-soft-black-hover-100">
      <FiMenu className="text-2xl cursor-pointer" />
    </button>
  );
};

export default MenuButton;
