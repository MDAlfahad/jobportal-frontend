import { useRef } from "react";
import useAnimate from "../../../Store/animation";
import Image1 from "../../images/golife1.png";
import Image2 from "../../images/golife2.png";

const Traker = () => {

  const head = useRef();
  const para = useRef();
  const image = useRef();

  useAnimate(head, {y:90});
  useAnimate(para, {y:100});
  useAnimate(image, {y:110});
  return (
    <div className="w-full px-4 md:px-16 bg-black text-white dark:bg-black dark:text-white py-6 md:py-10 max-w-[1800px] m-auto relative noselect">
      <div>
        <h1
        ref={head}
        className="text-7xl md:text-8xl xl:text-[200px] font-semibold text-center tracking-wide">
          GO LIFE UP
        </h1>
      </div>
      <div
        className="
        md:flex  "
      >
        {/* <img src={Image1} alt="" /> */}
        <img
        ref={image}
        src={Image2} alt="" className="w-[250px] lg:w-[300px]" />
        <div><p
        ref={para}
        className="text-sm md:text-[14px] font-light text-center">
          job portal is designed to elevate careers and connect talent with
          opportunity. It serves as a bridge between ambitious job seekers and
          forward-thinking employers, offering a seamless platform to explore,
          apply, and grow. With user-friendly navigation, personalized job
          recommendations, and tools for skill development, to take the next
          step in their professional journey while helping organizations
          discover the right talent to move their business forward.
        </p>
        <p className="text-sm font-extralight md:mt-32 py-6">_Your dream, we Work , get your chance.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Traker;
