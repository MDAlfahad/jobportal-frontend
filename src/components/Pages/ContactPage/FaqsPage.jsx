import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import FaqsCard from "./FaqsCard";
import useAnimate from "../../../Store/animation";
const FaqsPage = () => {
  const ref = {
    head: useRef(),
    box: useRef(),
  };

  useAnimate(ref.head);
  useAnimate(ref.box, { y: 90 });
  return (
    <div className="max-w-[1800px] m-auto w-full px-6 md:px-12 py-6 md:py-28 noselect dark:bg-black dark:text-white ">
      <div ref={ref.head} className="flex flex-col">
        <h1 className="text-xl md:text-4xl font-medium">
          Frequently asked question
        </h1>
        <p className="text-[14px] font-light md:max-w-[500px]">
          here's is everything you need to know to get started, manage your
          account, and troubleshoot the most frequent issues
        </p>
      </div>

      <div ref={ref.box} className=" md:flex justify-between  w-full py-10">
        <div className="flex flex-col py-4 gap-4  md:w-[500px] ">
          <FaqsCard
            question="Is it free to use?"
            answer="Yes, the job portal is completely free for job seekers. Recruiters may have separate plans depending on services."
          />
          <FaqsCard
            question="How can I apply for jobs?"
            answer="After logging in, browse available jobs, select a suitable position, and click on the Apply button. Make sure your profile and resume are updated."
          />
          <FaqsCard
            question="Is my personal information secure?"
            answer="Yes, your data is securely stored and only shared with recruiters when you apply for a job."
          />
        </div>
        <div className="flex flex-col py-4 gap-4  md:w-[500px]  ">
          <FaqsCard
            question="What types of jobs are available?"
            answer="The portal offers full-time jobs, part-time jobs, internships, and freelance opportunities across various industries."
          />
          <FaqsCard
            question="What should I do if I face issues?"
            answer="You can contact support through the Help/Contact Us section for assistance."
          />
          <FaqsCard
            question="Can I apply for multiple jobs?"
            answer="Yes, you can apply for as many jobs as you want based on your qualifications and interests."
          />
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
