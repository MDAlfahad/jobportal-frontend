// import Image from "../../images/image.webp";
import Button from "../../Components/buttons/ButtonComponents";
import BarContainer from "../HeroContaner/BarContainer";
import Services from "../HeroContaner/Services";
import FooterContainer from "../HeroContaner/FooterContainer";
import { useNavigate } from "react-router-dom";
import CrauselContainer from "./CrauselContainer";
import StillThink from "./StillThink";
import AnimatedCard from "./AnimatedCard";
import { useRef } from "react";
import useAnimate from "../../../Store/animation";
import CompanyApplyPage from "./CompanyApplyPage";
import Traker from "./Tracker";
import MotivatePage from "./MotivatePage";
import Errorcard from "../../Authpages/ErrorCard";

const Hero = () => {
   const ref = {
    head: useRef(),
    para: useRef(),
    box: useRef(),
    button: useRef(),
  }
  
  useAnimate(ref.head)
  useAnimate(ref.para, {y: 80})
  useAnimate(ref.box, {y:90})
  useAnimate(ref.button, {y:100})

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-[1800px] m-auto mainbackground noselect capitalize">
        <div className="w-full md:px-4 lg:px-12 py-4 md:py-6 lg:py-10 px-4 text-center flex flex-col justify-center  lg:h-auto">
          <div className="flex flex-col items-center py-28">
            <h1
            ref={ref.head}
            className="text-4xl md:text-4xl lg:text-6xl 2xl:text-7xl font-semibold pt-20 leading-none">
              Your Journey Never ends, <br />
              Get Your Job Now
            </h1>
            <p
            ref={ref.para}
            className="text-sm md:text-[12px] lg:text-[14px]  text-textcolor max-w-[800px] pt-4">
              The Placement Cell plays a vital role in shaping students’ careers
              by acting as a bridge between students and recruiters. It
              organizes campus recruitment drives, internships to prepare students for
              the professional world.
            </p>
            <div 
            ref={ref.box}
            className="md:w-[600px] py-6">
              {/* <span className="border border-secondary rounded-sm overflow-hidden w-full flex">
                <input
                  type="serach"
                  id="searchbar"
                  placeholder="Start your journey today..."
                  className="w-full px-2 py-1.5 bg-transparent text-[14px] outline-none placeholder-[#6C6C6C] text-black"
                />
                <button className="bg-secondary px-6 text-white text-[14px] font-medium hover:bg-textcolor transition duration-200">
                  Search
                </button>
              </span> */}
            </div>
            <div
            ref={ref.button}
            className="flex  gap-6 justify-center items-center">
              <Button text="Apply Now" onClick={() => navigate("/job-page")} />
            </div>
          </div>
        </div>
      </div>
      <BarContainer />
      <Services />
      <StillThink />
      <CrauselContainer />
      {/* <AnimatedCard/> */}
      <Traker/>
      <MotivatePage/>
      <CompanyApplyPage/>
      <FooterContainer />
    </>
  );
};

export default Hero;
