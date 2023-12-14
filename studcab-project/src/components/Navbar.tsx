import { useState } from "react";
import MenuButton from "./MenuButton";
import SideBar from "./SideBar";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div className="flex items-center px-3 bg-soft-black-100 text-soft-white">
        <MenuButton setSideBarOpen={setSideBarOpen} />
        <ThemeToggleButton />
      </div>
      {sideBarOpen && <SideBar setSideBarOpen={setSideBarOpen} />}
    </>
  );
};

export default Navbar;
