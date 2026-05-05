import { useNavigate } from "react-router-dom";
import Button from "../../Components/buttons/ButtonComponents";
import { useRef } from "react";
import useAnimate from "../../../Store/animation";
const ApplyPage = () => {
  const ref = {
    head: useRef(),
    box: useRef(),
    button: useRef(),
  };

  useAnimate(ref.head);
  useAnimate(ref.box, { y: 90 });
  useAnimate(ref.button, { y: 100 });
  const navigate = useNavigate();

  return (
    <div className="contactBackground2 max-w-[1800px] m-auto flex justify-between items-center noselect px-4 md:px-16 py-6 md:py-28 capitalize">
      <div className="flex flex-col gap-2 ">
        <h1
        ref={ref.head}
        className="text-3xl font-bold md:text-4xl lg:font-medium xl:text-[60px] md:leading-tight">
          Still Searching! <br />
          Apply Now To get hired
        </h1>
        <p
        ref={ref.box}
        className="max-w-[500px] lg:max-w-[750px] font-light text-[12px] lg:text-[14px] py-4">
          {" "}
          If you are eager to learn, ready to take on new challenges, and want
          to build a successful career, this is the perfect opportunity for you.
          We offer a positive work environment, career growth opportunities,
          skill development, and the chance to work on exciting projects. Join
          us and become a part of a team that values innovation, teamwork, and
          success.
        </p>
        <div
        ref={ref.button} 
        className="flex items-end gap-2 md:pt-12">
          <Button text="Apply Now" onClick={() => navigate("/job-page")} />

          <p className="text-[12px] lg:text-[16px]">Get Your maximum hireing</p>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
