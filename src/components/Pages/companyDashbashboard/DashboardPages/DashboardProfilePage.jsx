import JobPostCard from "../companycards/JobPostCard";
import { useEffect, useState } from "react";
import WorkingMen from "../../../images/workingman.png";
import useAuthStore from "../../../../Store/userAuth";
import useJobStore from "../../../../Store/jobStore";
import userJobApplicaiton from "../../../../Store/userJobApplicaiton";
import Button from "../../../Components/buttons/ButtonComponents";
import { useNavigate } from "react-router-dom";
import DeleteCard from "../../../Components/Cards/DeleteCard";
import axios from "axios";

const DashboardProfilePage = () => {
  const API = import.meta.env.VITE_API_URL;
  const { user, token } = useAuthStore();
  const { jobs, fetchJobs } = useJobStore();
  const navigate = useNavigate();
  const [isdelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(!isdelete);
  };
  const handleDeleteJob = async (e, jobId) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/api/delete-job`,
        { job_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchJobs(token);
    }
  }, [token, fetchJobs]);

  return (
    <>
      {/* Added padding + height fix */}
      <div className="mt-16  md:px-6 py-4 relative w-full dark:bg-black dark:text-white">
        {/* HEADER */}
        <div className="border-b-2 dark:border-none flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold py-2 text-center md:text-left">
            Job and Placement Details
          </h1>
          <div>
            <Button
              text="Profile"
              onClick={() => navigate("/handlenavigate")}
            />
          </div>
        </div>

        {/*  CARD SECTION */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around my-6 gap-4">
          <div className="w-full bg-secondary rounded-sm text-white px-4 md:px-12 py-4">
            {/*  FLEX FIX */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* LEFT */}
              <div className="text-center md:text-left">
                <span className="text-lg sm:text-xl md:text-3xl font-semibold flex flex-col md:flex-row gap-1">
                  <h1>Welcome {user?.user_name}</h1>
                </span>

                <p className="text-sm md:text-[14px]">
                  You had a {10} application today,
                </p>

                <div className="mt-6 md:mt-10">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    Total posts: {jobs.length}
                  </h1>
                </div>
              </div>

              {/*  IMAGE FIX */}
              <div className="flex justify-center">
                <img src={WorkingMen} className="w-32 sm:w-40 md:w-56" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* JOB LIST */}
        <div className="relative">
          {/* delete job post  */}

          <div
            className={`fixed inset-0 flex items-center justify-center bg-black/30 z-50  ${!isdelete ? "hidden" : "block"}`}
          >
            <DeleteCard Cancel={() => setIsDelete(false)} />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl py-4 font-semibold text-center md:text-left">
            Job posted details
          </h1>

          {/*  CARD LIST FIX */}
          <div className="border rounded-sm dark:border-gray-500 mt-4 p-4 flex flex-col gap-4">
            {jobs.length > 0 ? (
              jobs.map((item) => {
                return (
                  <JobPostCard
                    key={item.job_id || item.id}
                    {...item}
                    Delete={handleDelete}
                  />
                );
              })
            ) : (
              <div className="text-center py-10 text-textcolor2 italic">
                No Job Posted yet. Start adding !
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfilePage;
