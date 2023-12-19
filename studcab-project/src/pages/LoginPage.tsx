import { Link } from "react-router-dom";
import ThemeToggleButton from "../components/ThemeToggleButton";

const LoginPage = () => {
  return (
    <div className="w-full h-[100dvh] bg-soft-white p-5 grid grid-rows-[1fr,auto] dark:bg-soft-black-200 text-soft-black-200 dark:text-soft-white">
      <div className="max-w-[24rem] max-h-[32rem] w-full p-5 h-full bg-soft-white-hover dark:bg-soft-black-hover-200 rounded-md self-center justify-self-center flex items-center justify-center flex-col gap-5">
        <p className="text-3xl h-[40%] flex items-center">Login</p>
        <input
          type="text"
          placeholder="Email"
          className="w-full h-10 px-5 border-2 border-transparent rounded-md outline-none dark:bg-soft-black-hover-100 bg-soft-white-hover-200 focus-within:border-soft-green hover:border-soft-green"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-10 px-5 border-2 border-transparent rounded-md outline-none dark:bg-soft-black-hover-100 bg-soft-white-hover-200 focus-within:border-soft-green hover:border-soft-green"
        />

        <Link
          to={"/"}
          className="flex items-center justify-center w-full h-10 mt-10 rounded-md bg-soft-green text-soft-white hover:brightness-75">
          Log in
        </Link>
      </div>
      <div className="ml-auto">
        <ThemeToggleButton hintArrowDirection="right" />
      </div>
    </div>
  );
};

export default LoginPage;
