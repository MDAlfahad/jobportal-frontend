import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useThemeStore from "../../../Store/lightDarkmode";
import Lightmode from "../../images/lightmode.png"
import Darkmode from "../../images/darkmode.png"

const DarkLightComponent = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      onClick={toggleTheme}
      className={`w-[80px] h-[30px] rounded-full border relative overflow-hidden
        ${theme === "light" ? ` border-black ` : ` border-white`}`}
    >
      <div
        className={`h-6 w-6 flex items-center justify-center border top-0.5  absolute rounded-full border-black  duration-500 transfom overflow-hidden 
          ${
            theme === "light"
              ? "bg-black text-white  translate-x-0.5 "
              : " bg-white text-black translate-x-[52px]"
          }`}
      >
       
      </div>
    </div>
  );
};

export default DarkLightComponent;
