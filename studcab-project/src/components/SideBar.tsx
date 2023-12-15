import { FC, useRef } from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";

import LogoutButton from "./LogoutButton";
import ThemeToggleButton from "./ThemeToggleButton";

interface SideBarProps {
  setSideBarOpen: (value: boolean) => void;
}

const SideBar: FC<SideBarProps> = ({ setSideBarOpen }) => {
  const bgRef = useRef<HTMLDivElement>(null);

  const buttons = [
    {
      title: "Home",
      icon: <FaHome className="text-[22px]" />,
      href: "/",
    },
    {
      title: "Info",
      icon: <FaUserCircle className="text-[24px]" />,
      href: "/info",
    },
    {
      title: "Grades",
      icon: <IoSchool className="text-[23px]" />,
      href: "/grades",
    },
    {
      title: "Assignments",
      icon: <GiNotebook className="text-[28px]" />,
      href: "/assignments",
    },
    {
      title: "Rating",
      icon: <MdOutlineQueryStats className="text-[26px]" />,
      href: "/rating",
    },
    {
      title: "Schedule",
      icon: <IoCalendar className="text-[25px]" />,
      href: "/schedule",
    },
  ];

  const onBgClick = (e: React.MouseEvent<HTMLElement>) => {
    if (bgRef.current && e.target === bgRef.current) {
      setSideBarOpen(false);
    }
  };

  return (
    <div
      ref={bgRef}
      onClick={onBgClick}
      className="absolute w-full h-full bg-black/80">
      <div className="h-full w-[15rem] bg-soft-white dark:bg-soft-black-200 flex flex-col text-soft-black-200 dark:text-soft-white select-none justify-between py-5">
        <div>
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => setSideBarOpen(false)}
              className="w-full h-10 px-5 text-left sm:dark:hover:bg-soft-black-hover-200 sm:hover:bg-soft-white-hover">
              <Link to={btn.href}>
                <div className="flex items-center w-full h-full gap-2">
                  <span className="w-8">{btn.icon}</span>
                  <span>{btn.title}</span>
                </div>
              </Link>
            </button>
          ))}
        </div>

        <div className="flex justify-evenly">
          <LogoutButton />
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
