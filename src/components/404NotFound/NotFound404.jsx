import { Link } from "react-router-dom";
import Button from "../Components/buttons/ButtonComponents";

const NotFound404 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center dark:bg-black  px-6 cursor-not-allowed pt-32">
      <h1 className="text-5xl font-semibold text-textcolor dark:text-white">OOPS! PAGE NOT FOUND</h1>
      <p className="text-sm text-center max-w-[500px] dark:text-white ">You must have picked the wrong door because I haven’t been able to lay my eye on the page you’ve been searching for</p>
      <Link to="/" className="mt-5">
        <Button text= "Go back Home"/>
      </Link>
    </div>
  );
};

export default NotFound404;
