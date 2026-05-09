import {
  BaggageClaimIcon,
  Calendar,
  History,
  HomeIcon,
  TimerIcon,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaRupeeSign, FaSuitcase, FaSuitcaseRolling } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Button from "../buttons/ButtonComponents";
import { formatDistanceStrict, formatDistanceToNow, isDate } from "date-fns";
import useJobStore from "../../../Store/jobStore";
import useAuthStore from "../../../Store/userAuth";
import axios from "axios";

const JobApplyForm = ({ className, onClose }) => {
  // const API_CALL = `http://localhost:4000`;
  const API = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  const [isJobData, setIsJobData] = useState(null);
  const { jobs } = useJobStore();
  const { user, token } = useAuthStore();

  // --- NEW: Form State ---
  const [availability, setAvailability] = useState("");
  const [travel, setTravel] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const cahched_job = jobs.find(
      (job) => String(job.job_id || job.id) === String(id),
    );

    if (cahched_job) {
      setIsJobData(cahched_job);
    }

    fetch(`${API}/api/jobdata/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsJobData(data);
      })
      .catch((error) => {
        console.log("failed to fetch data", error);
        setIsJobData(null);
      });
  }, [id]);
  // --- NEW: Form Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return alert("Please upload your resume!");
    if (!availability || !travel || !experience)
      return alert("Please fill all fields!");

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("jobId", id);
    formData.append("username", user?.user_name || "");
    formData.append("useremail", user?.user_email || "");
    formData.append("userId", user?.user_id || "");
    formData.append("companyId", isJobData.user_id || "");
    formData.append("companyname", isJobData.company_name || "");
    formData.append("number", user?.user_phone || "")
    formData.append("jobdesigination", isJobData.job_desigination || "");
    formData.append("availability", availability);
    formData.append("travel", travel);
    formData.append("experience", experience);
    formData.append("resume", resume);

    console.log(isJobData.company_id);

    try {
      const response = await fetch(`${API}/api/apply-form`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        onClose();
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isJobData) return <h1>Loading...</h1>;

  const formattedDate = formatDistanceToNow(
    new Date(isJobData.posted_at.replace(" ", "T")),
    { addSuffix: true },
  );

  // Send  Mail
  const apply = async () => {
    try {
      const res = await axios.post(`${API}/api/sendMail`, {
        name: user?.user_name,
        email: user?.user_email,
        position: isJobData.job_desigination,
        companyName: isJobData.company_name,
        companyEmail: isJobData.company_email,
        file: isJobData?.resume_path,
      });
    } catch (error) {
      alert("apply falied");
      return;
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm overflow-y-auto z-50 ">
      <div className="min-h-full flex justify-center items-start pt-10 pb-10 ">
        <div className="flex flex-col gap-2 bg-white md:w-[1100px] border  rounded-lg overflow-hidden dark:bg-gray-900 dark:text-white dark:border-none ">
          <div className="flex justify-between py-6 bg-gray-100 border-b p-8 items-center dark:bg-gray-900 ">
            <h1 className="text-xl md:text-3xl text-black md:ml-72  font-semibold dark:text-white">
              Applying to {isJobData.job_desigination}
            </h1>
            <X  className="cursor-pointer text-black dark:text-white" onClick={onClose} />
          </div>

          <div className="flex flex-col gap-2 p-8 ">
            <div className="flex items-center justify-between ">
              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-xl dark:text-white ">
                  {isJobData.job_desigination}
                </h1>
                <p className="text-sm text-textcolor2 dark:text-white">
                  {isJobData.company_name}
                </p>
              </div>
              <div>
                <p>company logo</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="flex items-center gap-2 text-sm text-textcolor2 dark:text-white ">
                <FaRupeeSign className="text-[14px] " />
                {isJobData.job_ctc}
              </span>
              <span className="flex items-center gap-2 text-sm text-textcolor2 dark:text-white">
                <HomeIcon size={16} />
                {isJobData.job_location}
              </span>
              <span className="flex items-center gap-2 text-sm text-textcolor2 dark:text-white">
                <Calendar size={16} />3 months
              </span>
            </div>
            <div className="md:flex gap-6">
              <div className="flex gap-6">
                <div className="flex gap-2 rounded-sm items-center px-2 text-[14px] bg-green-200 text-green-500 ">
                  <History size={16}  strokeWidth={1.5} />
                  {formattedDate}
                </div>
                <span className="flex items-center gap-2 px-2 text-[14px] bg-orange-200 text-orange-800 rounded-sm">
                  <FaSuitcase size={16} strokeWidth={1.5} />
                  Job Offring upto 6LPA
                </span>
              </div>
              <div className="flex gap-6">
                <span className="flex  text-[12px] items-center px-2  rounded-sm border  bg-gray-100 border-0.5 dark:bg-gray-900">
                  {isJobData.job_type}
                </span>
                <span className="flex text-[14px] items-center px-2  rounded-sm border bg-gray-100 border-0.5 dark:bg-gray-900">
                  vacancies
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <h1 className="text-lg md:text-xl font-semibold text-black dark:text-white">
                About the intership
              </h1>
              <div>
                <h1 className="text-black font-semibold dark:text-white">Role Overview</h1>
                <p className="text-sm md:text-[14px] text-textcolor2 dark:text-white">
                  {isJobData.job_description}
                </p>
              </div>
              <div>
                <h1 className="text-black font-semibold dark:text-white">Requirements</h1>
                <p className="text-[14px]  text-textcolor2 dark:text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  error obcaecati quidem nobis, possimus beatae ipsum aliquam
                  ipsa, enim ullam molestiae quae aspernatur. Odio alias velit
                  doloremque ipsam totam magni!
                </p>
              </div>
              <div className="flex flex-col ">
                <h1 className="text-black font-semibold dark:text-white">
                  Additional Information
                </h1>
                <span className="flex gap-2 items-center text-black font-semibold dark:text-white">
                  Stipend :{" "}
                  <p className=" text-textcolor2 text-[14px] dark:text-white">₹ {isJobData.job_ctc}</p>
                </span>
              </div>
              <div className="flex flex-col gap-2 ">
                <h1 className="text-md md:text-xl font-semibold text-black dark:text-white">
                  About {isJobData.company_name}
                </h1>
                <p className="text-textcolor2 text-[14px] dark:text-white">
                  {isJobData.about_company}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 p-8 border-t"
          >
            <h1 className="text-lg md:text-xl font-semibold text-black dark:text-white">
              Apply Now
            </h1>
            <h1 className="text-sm md:text-[16px] font-semibold text-black dark:text-white">
              Confirm your availability
            </h1>
            <div className="flex flex-col gap-2 border py-4 px-2 rounded-xl bg-gray-200  dark:text-white dark:bg-black/30 dark:border-none">
              <label className="flex gap-2 items-center text-[16px] cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="immediate"
                  onChange={(e) => setAvailability(e.target.value)}
                />
                <p  className="text-[14px]">Yes, I am available to join immediately</p>
              </label>
              <label className="flex gap-2 items-center text-[16px] cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="later"
                  onChange={(e) => setAvailability(e.target.value)}
                />
                <p className="text-[14px]">No, talk and select the date of joining</p>
              </label>
              <label className="flex gap-2 items-center text-[16px] cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="other"
                  onChange={(e) => setAvailability(e.target.value)}
                />
                <p  className="text-[14px]">Other, please specify your availability</p>
              </label>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h1 className="text-sm md:text-[16px] font-semibold text-black dark:text-white">
                Additional questions
              </h1>
              <p className=" text-[14px]">
                Are you open to travel for fieldwork as part of your
                responsibilities?
              </p>
              <div className="flex flex-col border bg-gray-200 py-4 px-2 rounded-xl dark:bg-black/30 dark:border-none text-[14px]">
                <label className="flex gap-2 items-center cursor-pointer">
                  <input
                    type="radio"
                    name="travel"
                    value="yes"
                    onChange={(e) => setTravel(e.target.value)}
                  />{" "}
                  Yes
                </label>
                <label className="flex gap-2 items-center cursor-pointer">
                  <input
                    type="radio"
                    name="travel"
                    value="no"
                    onChange={(e) => setTravel(e.target.value)}
                  />{" "}
                  No
                </label>
              </div>
              <div className="flex flex-col gap-2 py-2">
                <p className="text-black font-semibold text-[16px] dark:text-white">
                  How many months of experience do you have?
                </p>
                <div className="flex gap-2 items-center">
                  <input
                  type="text"
                  min="0"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Enter numeric value"
                  className="outline-none border p-2 rounded-md w-48 bg-white dark:bg-black/30 text-[14px]"
                />
                <p className="text-[14px] text-[red]">Freshers Type NA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center border rounded-xl p-4 mt-2 dark:border-none dark:bg-black/30">
              <h1 className="text-md md:text-lg text-black font-semibold dark:text-white">
                Upload resume
              </h1>
              <div className=" ">
                <label
                  htmlFor="file"
                  className="border-2 text-[14px] border-black dark:border-white border-dotted p-4 rounded-md flex items-center md:text-lg font-semibold text-black gap-2 w-48 justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white"
                >
                  <FiUpload />
                  {resume ? "File Selected" : "Upload file"}
                </label>
                <input
                  type="file"
                  id="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                  hidden
                />
                {resume && (
                  <p className="text-sm mt-2 text-green-600">{resume.name}</p>
                )}
              </div>
            </div>

            <div className="flex py-4 justify-center">
              {/* Changed to use native button to pass the onSubmit, or you can adjust your Button component to accept type="submit" */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-secondary text-white rounded-sm hover:bg-textcolor disabled:bg-gray-400 "
                onClick={apply}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplyForm;
