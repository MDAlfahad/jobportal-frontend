import { Funnel, Search } from "lucide-react";
import Citydata from "../../../API/cities.json";
import Button from "../../Components/buttons/ButtonComponents";
import JobPageCard from "./JobPageCard";
import FooterContainer from "../HeroContaner/FooterContainer";

import { useEffect, useState } from "react";
import useJobStore from "../../../Store/jobStore";

const JobPage = () => {
  const { jobs, fetchJobs } = useJobStore();

  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const filteredJobs = jobs.filter((job) => {
    const title = job.job_desigination || "";
    const loc = job.job_location || "";
    const sal = job.job_ctc || "";

    const matchesSearch =
      title.toLowerCase().includes(search.toLowerCase()) ||
      loc.toLowerCase().includes(search.toLowerCase());

    const matchesProfile = profile
      ? title.toLowerCase().includes(profile.toLowerCase())
      : true;

    const matchesLocation = location
      ? loc.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchesSalary = salary ? sal >= salary : true;

    return matchesSearch && matchesProfile && matchesLocation && matchesSalary;
  });

  return (
    <>
      <div className="w-full max-w-[1800px] m-auto py-20 px-4 md:px-6 xl:px-20 dark:bg-black  ">
        {/*  MOBILE SEARCH + FILTER */}
        <div className="flex md:hidden items-center gap-2 mb-4 ">
          <div className="flex items-center w-full border overflow-hidden rounded-md">
            <input
              className="w-full px-2 py-2 outline-none"
              type="search"
              name="jobsearch"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className=" h-full w-10 p-2 text-textcolor" />
          </div>

          <button
            onClick={() => setShowFilter(true)}
            className="p-2 border rounded-md"
          >
            <Funnel />
          </button>
        </div>

        <div className="md:flex justify-center items-center ">
          <div
            className={`flex flex-col gap-5 items-center justify-center overflow-hidden w-full md:w-[400px] xl:w-[600px]  border px-4 py-4 rounded-xl md:h-screen max-h-[80vh] md:mt-20 dark:bg-gray-900 dark:text-white dark:border-none
            ${
              showFilter
                ? "fixed inset-0 bg-white z-50 md:relative"
                : "hidden md:flex"
            }`}
          >
            {/* MOBILE HEADER */}
            <div className="flex justify-between w-full items-center  md:hidden">
              <h1 className="flex items-center gap-2 text-xl">
                <Funnel className="text-secondary" />
                Filter
              </h1>
              <button onClick={() => setShowFilter(false)}>✕</button>
            </div>

            <h1 className="hidden md:flex items-center gap-2 lg:text-xl ">
              <Funnel className="text-secondary" />
              Filter
            </h1>

            <div className="flex items-center w-full border overflow-hidden text-sm">
              <input
                className="w-full px-2 py-2 outline-none dark:bg-gray-900"
                type="search"
                name="desigination"
                placeholder="e.g Frontend Developer, Bhilai"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className=" h-full w-10 p-2 text-textcolor" />
            </div>

            <div className="w-full ">
              {/* PROFILE */}
              <div className="flex flex-col text-[12px] lg:text-[14px]">
                <label htmlFor="position">Profile</label>
                <select
                id="position"
                  className="border outline-none px-2 py-2 rounded-md dark:bg-gray-900"
                  onChange={(e) => setProfile(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>

              {/* LOCATION */}
              <div className="flex flex-col mt-3 text-[12px] lg:text-[14px]">
                <label htmlFor="location">Location</label>
                <select
                id="location"
                  className="w-full px-2 py-2 outline-none border rounded-md dark:bg-gray-900"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">All</option>
                  {Citydata?.cities.map((item, index) => (
                    <option key={index} value={item.City}>
                      {item.City}
                    </option>
                  ))}
                </select>
              </div>

              {/* SALARY */}
              <div className="flex flex-col py-4 gap-4">
                <h1 className="text-[12px] lg:text-[16px] font-semibold">
                  Annual Salary (in lakhs)
                </h1>

                <div className="relative w-full px-2">
                  
                  <div
                    className="absolute -top-10 bg-secondary text-white text-md px-2 py-1 rounded-sm transition-all duration-200"
                    style={{
                      left: `calc(${(salary / 10) * 100}% -16px)`,
                    }}
                  >
                    {salary}
                  </div>

                  
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full cursor-pointer accent-blue-500"
                  />

                 
                  <div className="flex justify-between mt-2 text-sm">
                    {[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <span key={num}>{num}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  text="Clear All"
                  onClick={() => {
                    setSearch("");
                    setProfile("");
                    setLocation("");
                    setSalary(0);
                  }}
                />
              </div>

              <button
                onClick={() => setShowFilter(false)}
                className="md:hidden mt-4 w-full bg-secondary text-white py-2 rounded-md"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/*  JOB LIST  */}
          <div className="flex flex-col md:px-10 items-center w-full overflow-y-auto h-[80vh] md:h-screen ">
            <div className="text-center py-6 dark:text-white">
              <h1 className="text-2xl md:text-3xl font-semibold">
                {filteredJobs.length}+ Jobs Posted
              </h1>
              <p className="text-sm md:text-[16px]">
                Search and Apply to Latest Job Vacancies & Openings in India
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((card) => (
                  <JobPageCard key={card.job_id} {...card} />
                ))
              ) : (
                <p className="text-center text-gray-500">No jobs found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterContainer />
    </>
  );
};
export default JobPage;
