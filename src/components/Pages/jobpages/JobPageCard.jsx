import {
  Bookmark,
  BriefcaseBusiness,
  IndianRupee,
  MapPin,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Button from "../../Components/buttons/ButtonComponents";


const JobPageCard = ({
  job_id,
  job_desigination,
  company_name,
  job_location,
  job_ctc,
  job_experience,
  job_description,
  job_skills,
  job_workingtype,
  posted_at,
  company_logo,
}) => {

  const navigate = useNavigate();
  const [Click, setClick] = useState(true);
  const handleclick = () => {
    setClick(!Click);
  };
  const formattedate = formatDistanceToNow(
    new Date(posted_at.replace(" ", "T")),
    { addSuffix: true },
  );

  return (
    <>
      <div className="w-full flex flex-col p-4 shadow-sm rounded-xl border bg-white text-textcolor dark:bg-gray-900 dark:border-none dark:text-white">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl xl:text-2xl font-semibold ">
              {job_desigination}
            </h1>
            <div className="flex items-center xl:gap-10">
              <p className="text-textcolor2 text-[12px] lg:text-[14px]">{company_name}</p>
              <p className="p-1 xl:px-1 py-0.5 border bg-gray-100 rounded-sm flex items-center gap-1 text-[10px] lg:text-[12px] dark:bg-transparent">
                <TrendingUp strokeWidth={1.5} size={12} className="text-secondary"/>
                Actively hiring
              </p>
            </div>
          </div>
          <div className="cover overflow-hidden">
            <img src={company_logo || ""}
             width={60} alt="" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex gap-4 items-center">
              <p className="text-[12px] lg:text-[14px] lg:font-medium  flex gap-2 items-center">
                <MapPin strokeWidth={2} size={16} />
                {job_location}
              </p>
              <p className="text-[12px] lg:text-[14px] lg:font-medium flex gap-2 items-center">
                <IndianRupee strokeWidth={2} size={16} />
                {job_ctc}
              </p>
              <p className="text-[12px] lg:text-[14px] lg:font-medium  flex gap-2 items-center">
                <BriefcaseBusiness strokeWidth={2} size={16} />
                {job_experience}
              </p>
            </div>

            <p className="text-[12px] lg:text-[14px]  line-clamp-1">
              {job_description}
            </p>
            <p className="text-[12px] lg:text-[14px] text-textcolor2">{job_skills}</p>
            <p className="line-clamp-2 text-[12px] lg:text-[14px] my-2">
              {job_workingtype}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-0.5 md:gap-4 items-center"  >
            <p className="flex items-center gap-1 border text-[10px] lg:text-[12px] bg-gray-100 rounded-sm px-2 py-1 text-secondary dark:text-black ">
            <TimerReset strokeWidth={1.5} size={15} />
            {formattedate}
          </p>
          <p className="flex items-center md:gap-2 text-[10px] lg:text-[12px] border bg-gray-100 rounded-sm px-2 py-1 dark:bg-gray-900">
            {" "}
            <Zap strokeWidth={1.5} className="text-primary" size={18} />
            Be Early
          </p>
          <p
            className="px-1 py-1 flex items-center gap-2 text-sm md:text-[14px] bg-gray-100 rounded-sm dark:bg-gray-900"
            onClick={handleclick}
          >
            {Click ? <FaRegBookmark /> : <FaBookmark />}
          </p>
          </div>
          <Button
          text="View Details "
          onClick={()=> navigate(`/job-page-route/${job_id}`)}/>
        </div>
      </div>
    </>
  );
};

export default JobPageCard;
