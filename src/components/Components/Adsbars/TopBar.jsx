import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import useAnimate from "../../../Store/animation";
import { X } from "lucide-react";
const TopBar = ({ onClick, ref }) => {
  const [scroll, setScroll] = useState(false);
  const notification = useRef();
  useAnimate(notification, {y:-60});

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      ref={notification}
      className="w-full  relative px-6 py-1 flex items-center justify-start transition-all duration-300 "
    >
      <div className="border border-secondary rounded-xl flex bg-lightblue items-center gap-2 px-2 py-2 ">
        <div className="flex items-center gap-2 text-secondary border border-secondary rounded-lg px-2 py-1 text-[12px] md:text-[14px]">
          <GoDotFill className="text-secondary" /> New feature
        </div>
        <div>
          <p className="flex items-center gap-2 text-[12px] md:text-[14px]">
            We've just released a new feature{" "}
            <X size={18} onClick={onClick} className="cursor-pointer"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
