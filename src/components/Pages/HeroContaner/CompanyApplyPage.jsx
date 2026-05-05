import { useNavigate } from "react-router-dom";
import Button from "../../Components/buttons/ButtonComponents";
import useAuthStore from "../../../Store/userAuth";
import { useRef } from "react";
import useAnimate from "../../../Store/animation";

const CompanyApplyPage = () => {
  const { user, isAuthenticated } = useAuthStore();

  const handlenavigate = () => {
    if (user?.auth_role != "company") navigate("/login-page");
    else {
      navigate("/Dashboard-Company");
    }
  };
  const ref = {
    title: useRef(),
    head: useRef(),
    para: useRef(),
    button: useRef(),
  }
  useAnimate(ref.title);
  useAnimate(ref.head, {y:80});
  useAnimate(ref.para, {y:90});
  useAnimate(ref.button, {y:100});
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-16 py-6 md:py-20 max-w-[1800px] m-auto dark:bg-black dark:text-white">
      <div className="flex flex-col gap-6  justify-center items-center w-full bg-black text-white text-center rounded-xl px-2 py-12 relative overflow-hidden">
        <div className="absolute w-40 h-40 bg-gradient-to-r from-secondary to-purple-500 rounded-full blur-3xl opacity-60"></div>
        <div className="text-center">
          <h5
          ref={ref.title}
          className="text-sm bg-gradient-to-r from-blue-500  to-purple-500 bg-clip-text  text-transparent ">
            Get started today
          </h5>
        </div>
        <h1
        ref={ref.head}
        className="text-2xl md:text-4xl lg:text-6xl tracking-tight font-semibold">
          Hire Top Talent Faster <br /> with Our Smart Job Portal
        </h1>
        <p
        ref={ref.para}
        className="text-sm max-w-[800px] text-center">
          Connect with skilled students, freshers, and experienced candidates in
          one place.
        </p>
        <div
        ref={ref.button}
        >
          <Button text="Hire Now" onClick={handlenavigate} />
        </div>
      </div>
    </div>
  );
};
export default CompanyApplyPage;
