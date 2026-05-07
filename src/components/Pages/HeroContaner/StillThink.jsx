import { useNavigate } from "react-router-dom";
import Button from "../../Components/buttons/ButtonComponents";
import RightImage from "../../images/sideimg_1.png";
import { useRef } from "react";
import useAnimate from "../../../Store/animation";

const StillThink = () => {
  const navigate = useNavigate();
  const ref = {
    head: useRef(),
    para: useRef(),
    box: useRef(),
    quoit: useRef(),
  }
  
  useAnimate(ref.head)
  useAnimate(ref.para, )
  useAnimate(ref.box,)
  useAnimate(ref.quoit, )
  return (
    <>
      <div 
      
      className="still_background w-full px-4 lg:px-12 2xl:py-80 py-10 flex items-center md:h-[100vh] 2xl:h-auto dark:text-white text-black select-none max-w-[1800px] m-auto">
        <div className="flex flex-col gap-2 ">
          <h1 
          ref={ref.head}
          className="text-3xl md:text-4xl xl:text-6xl font-bold py-4">
            Still Thinking ? <br /> Why Don’t You Apply
          </h1>
          <p
          ref={ref.para}
          className="text-[12px] lg:text-[14px] max-w-[700px]">
            "Stop just thinking—start applying! Our job portal connects you with
            opportunities tailored to your skills and ambitions. Whether you're
            exploring new career paths or aiming for your dream role, we make
            the search simple, fast, and effective."
          </p>
          <div
          ref={ref.box}
          className="mt-6">
            <Button 
            text="Apply Now" onClick={() => navigate("/job-page")} />
          </div>
          <p 
          ref={ref.quoit}
          className="xl:mt-20 text-[12px] lg:text-[14px]">Don’t just dream about success—apply for it</p>
        </div>
        
      </div>
    </>
  );
};
export default StillThink;
