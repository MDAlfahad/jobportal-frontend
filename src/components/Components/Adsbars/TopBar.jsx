import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
const TopBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
     className="w-full relative px-6 py-1 text-gray-400 flex items-center justify-start transition-all duration-300 "
      
    >
     <div className="border border-gray-400 rounded-xl flex items-center gap-2 px-2 py-2 ">
        <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-2 py-1 text-gray-300 text-[14px]"><GoDotFill className="text-secondary"/>  New feature</div>
        <div>
            <p className="flex items-center gap-2 text-[14px] text-gray-200">We've just released a new feature   <IoIosArrowRoundForward size={18}/></p>
        </div>
     </div>
    </div>
  );
};

export default TopBar;