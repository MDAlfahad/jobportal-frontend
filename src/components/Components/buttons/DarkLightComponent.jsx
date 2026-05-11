import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useThemeStore from "../../../Store/lightDarkmode";

const DarkLightComponent = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      onClick={toggleTheme}
      className={`w-[60px] h-[30px] rounded-full border bg-secondary relative overflow-hidden
        ${theme === "light" ? ` border-secondary ` : ` border-gray-900`}`}
    >
      <div
        className={`h-6 w-6 flex items-center justify-center  top-0.5  absolute rounded-full   duration-500 transfom overflow-hidden 
          ${
            theme === "light"
              ? "bg-white/80 text-white  translate-x-0.5 "
              : " bg-white/80 text-black translate-x-[31px]"
          }`}
      >
       
      </div>
    </div>
  );
};

export default DarkLightComponent;
