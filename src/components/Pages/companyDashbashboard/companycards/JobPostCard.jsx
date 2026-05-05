import { Locate } from "lucide-react";
import { useState } from "react";
import { FaLocationArrow, FaRegSun } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiArrowCircleDown, TfiArrowCircleRight } from "react-icons/tfi";

const JobPostCard = ({
  job_desigination,
  company_name,
  job_location,
  job_ctc,
  job_experience,
  job_description,
  job_skills,
  job_workingtype,
  job_startdate,
  Job_lastdate,
  about_company,
}) => {
  const [isShow, setisShow] = useState(false);

  const toggleShow = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <div className="w-full h-auto md:px-2 ">
        <div className="w-full border rounded-lg overflow-hidden bg-gray-100 border-0.5 text-black">
          <div className="w-full flex ">
            <div className="w-2 h-50  bg-secondary"></div>
            <div className="py-4  flex justify-between pl-1 md:pl-3 pr-1 md:pr-6 w-full">
              <div>
                <h1 className="md:text-xl font-semibold text-secondary">
                  {job_desigination}
                </h1>
                <p className="text-[12px] md:text-sm text-textcolor2 font-semibold">
                  {company_name}
                </p>
                <p className="text-[12px] md:text-md text-textcolor2 font-semibold flex gap-1 items-center">
                  <CiLocationOn />
                  {job_location}
                </p>
              </div>
              <div className="flex  items-center md:gap-12">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] md:text-[14px] font-medium">
                    Start Date: {job_startdate}
                  </p>
                  <p className="text-[10px] md:text-[14px] font-medium">
                    Apply By: {Job_lastdate}
                  </p>
                </div>
                <p onClick={toggleShow}>
                  {!isShow ? (
                    <TfiArrowCircleRight className="text-2xl text-secondary" />
                  ) : (
                    <TfiArrowCircleDown className="text-2xl text-secondary" />
                  )}
                </p>
              </div>
            </div>
          </div>

          {isShow && (
            <div className=" text-textcolor text-[12px] md:text-[16px] px-4 md:px-12 py-4 w-full flex flex-col gap-2 bg-white">
              <span className=" flex py-4 text-[16px] font-medium">
                Company:
                <h1 className="text-[14px] font-normal pr-1">
                  {company_name}{" "}
                </h1>
              </span>
              <div className="md:flex justify-between md:justify-around border py-4 bg-gray-100 rounded-lg  ">
                <div className="flex justify-center gap-6 items-center md:gap-20">
                  <span className=" bg-gray-100 rounded-md flex text-[14px] font-light flex-col text-center">
                    <h1 className="font-medium text-[16px]">Job Type</h1>{" "}
                    {job_workingtype}
                  </span>
                  <span className=" bg-gray-100 rounded-md flex text-[14px] font-light flex-col text-center">
                    <h1 className="font-medium text-[16px]">Annual CTC</h1> {job_ctc}
                  </span>
                </div>
                <hr className="md:none " />
                <div className="flex justify-center gap-6 items-center md:gap-20">
                  <span className=" bg-gray-100 rounded-md flex text-[14px] font-light flex-col text-center">
                    <h1 className="font-medium text-[16px]">Experience</h1>{" "}
                    {job_experience}
                  </span>
                  <span className=" bg-gray-100 rounded-md flex text-[14px] font-light flex-col text-center">
                    <h1 className="font-medium text-[16px]">Last Date</h1> {Job_lastdate}
                  </span>
                </div>
              </div>

              <span className="px-2 py-2 rounded-md text-sm">
                <h1 className="font-medium text-[16px]">About Job</h1>
                {job_description}
              </span>
              <span className="px-2 py-2 rounded-md text-sm">
                <h1 className="font-medium text-[16px]">Skills</h1>
                {job_skills}
              </span>
              <span className="px-2 py-2 rounded-md text-sm">
                <h1 className="font-medium text-[16px]">About Company</h1>
                {about_company}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobPostCard;
