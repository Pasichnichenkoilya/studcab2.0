import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Hint from "./Hint";

const ThemeToggleButton = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");

    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="relative flex items-center justify-center w-10 h-10 rounded-md sm:dark:hover:bg-soft-black-hover-200 sm:hover:bg-soft-white-hover group">
      {dark && <MdSunny className="text-2xl" />}
      {!dark && <FaMoon className="text-xl" />}
      <Hint arrowDirection="down">Change to {dark ? "light" : "dark"}</Hint>
    </button>
  );
};

export default ThemeToggleButton;
