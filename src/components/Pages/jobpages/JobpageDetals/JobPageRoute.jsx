import {
  Bookmark,
  Briefcase,
  CalendarClock,
  IndianRupee,
  MapPin,
  Share2,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";
import Button from "../../../Components/buttons/ButtonComponents";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import Footer from "../../HeroContaner/FooterContainer";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import JobApplyForm from "../../../Components/forms/JobApplyFrom";
import useJobStore from "../../../../Store/jobStore";
import userAuth from "../../../../Store/userAuth";

const JobPageRoute = () => {
  // const API_CALL = `http://localhost:4000`;
  const API = import.meta.env.VITE_API_URL;
  const [job, setJob] = useState(null);
  const [ischange, setischange] = useState(true);
  const [isApply, setIsApply] = useState(false);
  const navigate = useNavigate();

  const { jobs: alljobs } = useJobStore();
  const { user } = userAuth();
  const { id } = useParams();

  useEffect(() => {
    const cached_job = alljobs.find(
      (item) => String(item.job_id || item.id) === String(id)
    );

    if (cached_job) {
      setJob(cached_job);
    } else {
      fetch(`${API}/api/jobdata/${id}`)
        .then((res) => res.json())
        .then((result) => setJob(result))
        .catch((error) => {
          console.error("Fetch error:", error);
          setJob(null);
        });
    }
  }, [id, alljobs]);

  if (!job) return <h1 className="text-center py-20">Loading...</h1>;

  const formattedDate = job?.posted_at
    ? formatDistanceToNow(new Date(job.posted_at.replace(" ", "T")), {
        addSuffix: true,
      })
    : "Date unavailable";

  return (
    <>
      {/* APPLY FORM */}
      {isApply && <JobApplyForm onClose={() => setIsApply(false)} />}

      {/* MAIN */}
      <div className={isApply ? "blur pointer-events-none" : ""}>
        <div className="w-full max-w-[1800px] m-auto flex flex-col items-center pt-16 md:pt-20 px-2 md:px-0 bg-gray-200 text-textcolor2 dark:bg-black ">

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold pt-6 md:pt-10 text-black text-center px-2 dark:text-white">
            {job.job_desigination}
          </h1>

          {/* MAIN CARD */}
          <div className="border w-full max-w-[1100px] p-4 md:p-6 rounded-xl flex flex-col gap-4 my-6 md:my-10 border-gray-200 dark:bg-gray-900 dark:backdrop-blur dark:border-none">

            {/* HEADER */}
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl  dark:bg-black dark:text-white">

              <div className="border rounded-sm px-2 py-1 w-fit flex gap-2 items-center">
                <TrendingUp size={16} className="text-secondary" />
                <p className="text-sm md:text-md">Actively hiring</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4   ">
                <div>
                  <h1 className="text-gray-800 font-semibold text-lg md:text-xl">
                    {job.job_desigination}
                  </h1>
                  <p className="text-sm">{job.company_name}</p>
                </div>
                <div className="text-sm text-gray-500">Company Logo</div>
              </div>

              <div className="flex gap-1 items-center text-sm md:text-base">
                <MapPin size={16} />
                <h1>{job.job_location}</h1>
              </div>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-2 py-6 md:flex justify-between gap-4 text-sm md:text-base ">

                <div className="text-center">
                  <span className="flex items-center gap-1 justify-center">
                    <CalendarClock size={16} />
                    <h1>Start Date</h1>
                  </span>
                  <p>{job.job_startdate}</p>
                </div>

                <div className="text-center">
                  <span className="flex items-center gap-1 justify-center">
                    <IndianRupee size={16} />
                    <h1>CTC</h1>
                  </span>
                  <p>{job.job_ctc}</p>
                </div>

                <div className="text-center">
                  <span className="flex items-center gap-1 justify-center">
                    <Briefcase size={16} />
                    <h1>Experience</h1>
                  </span>
                  <p>{job.job_experience}</p>
                </div>

                <div className="text-center">
                  <span className="flex items-center gap-1 justify-center">
                    <CalendarClock size={16} />
                    <h1>Apply by</h1>
                  </span>
                  <p>{job.Job_lastdate}</p>
                </div>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 md:gap-4 items-center text-sm">
                <span className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1 dark:bg-black">
                  <TimerReset size={16} />
                  <p>{formattedDate}</p>
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full dark:bg-black">
                  {job.job_type}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">

                <div className="flex gap-2 items-center">
                  <span className="p-1 rounded-full bg-orange-500">
                    <Zap size={16} />
                  </span>
                  <p className="text-[12px]">Be the early applicant</p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                  <Share2 size={18} />
                  <p onClick={() => setischange(!ischange)}>
                    {ischange ? (
                      <IoBookmarkOutline size={22} />
                    ) : (
                      <IoBookmark size={22} className="text-secondary" />
                    )}
                  </p>

                  <Button
                    text="Apply now"
                    onClick={() =>
                      user ? setIsApply(!isApply) : navigate("/login-page")
                    }
                  />
                </div>
              </div>
            </div>

            

            {/* ABOUT */}
            <div className="bg-white p-4 rounded-xl dark:bg-black dark:text-white">
              <h1 className="text-lg md:text-xl font-semibold text-black  dark:text-white">
                About this job
              </h1>
              <p className="mt-2  break-words font-light text-[14px]">
                {job.job_description}
              </p>
            </div>

            {/* SKILLS */}
            <div className="p-4 bg-white rounded-xl dark:bg-black dark:text-white  ">
              <h1 className="font-semibold text-black dark:text-white">Skills required</h1>
              <p className=" font-light text-[14px]">{job.job_skills}</p>
            </div>

            {/* CERTIFICATIONS */}
            <div className="p-4 bg-white rounded-xl dark:bg-black dark:text-white">
              <h1 className="font-semibold text-black dark:text-white">
                Earn certificates in this skills
              </h1>
              <p className="font-light text-[14px]">{job.certifications}</p>
            </div>

            {/* EXTRA */}
            <div className="p-4 bg-white rounded-xl dark:bg-black dark:text-white ">
              <h1 className="font-semibold text-black dark:text-white">Who can apply</h1>
              <p className="font-light text-[14px]">
                Only those candidates can apply who:
                <br />1. have minimum 1 years of experience
              </p>
              <p className="mt-2">Salary: {job.job_ctc}</p>
            </div>

            {/* COMPANY */}
            <div className="p-4 bg-white rounded-xl dark:bg-black dark:text-white">
              <h1 className="font-semibold text-black dark:text-white">
                About (company name)
              </h1>
              <p className="font-light text-[14px]">{job.about_company}</p>
            </div>

            {/* APPLY BUTTON */}
            {/* <div className="flex justify-center">
              <Button
                text="Apply Now"
                onClick={() =>
                  user ? setIsApply(!isApply) : navigate("/login-page")
                }
              />
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default JobPageRoute;