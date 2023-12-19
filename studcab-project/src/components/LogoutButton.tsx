import { BsDoorOpenFill } from "react-icons/bs";
import Hint from "./Hint";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  return (
    <Link
      to={"/login"}
      className="relative flex items-center justify-center w-10 h-10 rounded-md sm:dark:hover:bg-soft-black-hover-200 sm:hover:bg-soft-white-hover group">
      <BsDoorOpenFill className="text-2xl" />
      <Hint arrowDirection="down">Log out</Hint>
    </Link>
  );
};

export default LogoutButton;
