import { Suspense, lazy, useState } from "react";
import MenuButton from "./MenuButton";

const SideBar = lazy(() => import("./SideBar"));

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <>
      <div className="flex items-center px-3 bg-soft-black-100 text-soft-white">
        <MenuButton setSideBarOpen={setSideBarOpen} />
      </div>
      <Suspense>
        {sideBarOpen && <SideBar setSideBarOpen={setSideBarOpen} />}
      </Suspense>
    </>
  );
};

export default Navbar;
