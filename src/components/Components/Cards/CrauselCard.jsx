  import { ArrowRight } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  import useJobStore from "../../../Store/jobStore";
  import { useEffect } from "react";

  const CrauselCard = ({
    company_name,
    job_ctc,
    job_description,
    job_skills,
    job_id,
  }) => {
    const navigate = useNavigate();

    return (
      <>
        <div className=" px-6 py-12 md:w-92 h-60 flex flex-col gap-2 text-textcolor bg-white border rounded-xl dark:bg-gray-900 dark:border-none  ">
          <div>
            <h1 className="text-[14px] md:text-lg xl:text-xl  dark:text-white font-semibold md:font-bold capitalize line-clamp-1">
              {company_name}
            </h1>
          </div>
          <div>
            <p className="font-semibold text-[12px] lg:text-[14px]  dark:text-white">
              {" "}
              ₹{job_ctc}
            </p>
          </div>
          <div>
            <p className="text-[12px] xl:text-[14px]  dark:text-white  line-clamp-1  capitalize">
              {job_description}
            </p>
          </div>
          <div className="text-[12px] xl:text-[14px] lowercase text-textcolor2 dark:text-white">
            {job_skills}
          </div>
          <div className="flex gap-5 items-center text-secondary hover:text-textcolor dark:hover:text-white transition scale-100 duration-300">
            <p
              onClick={() => navigate(`/job-page-route/${job_id}`)}
              className="mt-auto text-[12px] cursor-pointer  "
            >
              Learn More
            </p>
            <ArrowRight strokeWidth={1.5} size={20} />
          </div>
        </div>
      </>
    );
  };

  export default CrauselCard;
