import Cards from "../../Components/Cards/Cards";
import { HiClipboardList } from "react-icons/hi";
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import useAnimate from "../../../Store/animation";

const Services = () => {
  const navigate = useNavigate();
  const ref = {
    head: useRef(),
    para: useRef(),
    card: useRef(),
  }
  useAnimate(ref.head);
  useAnimate(ref.para, {y: 70});
  useAnimate(ref.card, {y:90});
 


  return (
    <>
      <div
        className="w-full  max-w-[1800px] m-auto px-4 md:px-12 py-12 noselect dark:bg-black dark:text-white"
      
      >
        <div className="animate flex flex-col gap-0 py-10">
          <h1
            ref={ref.head}
          className="text-3xl md:text-4xl  lg:text-5xl text-textcolor dark:text-white text-center font-semibold md:text-bold">
            Services Provide here
          </h1>

          <p
          ref={ref.para}
          className="text-[14px] font-normal py-4 text-center">
            Career Services Connecting Talent with the Right Opportunities
          </p>
        </div>

        <div
        ref={ref.card}
        className="w-full md:flex justify-center  gap-12  ">
          <Cards
            logo={<HiClipboardList className="text-4xl text-secondary" />}
            h1="Verified Job Listings & Smart Job Matching"
            p="Access thousands of trusted job opportunities from top companies across various industries. Our intelligent matching system connects you with roles that fit your skills, experience, and career goals."
            text="Apply now"
            open={() => navigate("/jobpage")}
          />

          <Cards
            logo={<VscServerProcess className="text-3xl text-secondary" />}
            h1="Easy Application Process"
            p="Create one comprehensive profile and use it to apply for multiple job opportunities quickly and effortlessly. Upload your resume, showcase your skills, experience, certifications, and achievements in one place, and avoid the hassle of filling out repetitive application forms."
            text="Apply Now"
            open={() => navigate("/jobpage")}
          />

          <Cards
            logo={<AiOutlineMessage className="text-3xl text-secondary" />}
            h1="Job Alerts & Notifications"
            p="Stay updated with personalized job alerts so you never miss an opportunity."
            text="Apply Now"
            open={() => navigate("/jobpage")}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
