import { BsDoorOpenFill } from "react-icons/bs";
import Hint from "./Hint";

const LogoutButton = () => {
  return (
    <button className="relative flex items-center justify-center w-10 h-10 rounded-md sm:dark:hover:bg-soft-black-hover-200 sm:hover:bg-soft-white-hover group">
      <BsDoorOpenFill className="text-2xl" />
      <Hint arrowDirection="down">Log out</Hint>
    </button>
  );
};

export default LogoutButton;
