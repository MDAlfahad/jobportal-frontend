import { useState } from "react";
import Citydata from "../../../../API/cities.json";
import axios from "axios";
import Button from "../../../Components/buttons/ButtonComponents";
import useAuthStore from "../../../../Store/userAuth";

const CompanyForm3 = () => {
  //routing job post data;

  // const API_CALL = `http://localhost:4000`;
  const API = import.meta.env.VITE_API_URL;
  const{user} = useAuthStore();

  const [isForm, setIsForm] = useState({
    desigination: "",
    companyname: "",
    companyEmail: user.user_email,
    jobtype: "",
    locationtype: "",
    worktype: "",
    location: "",
    startdate: "",
    annualCTC: "",
    experience: "",
    certificate: "",
    vacancies: "",
    joboffering: "",
    applyby: "",
    aboutthisjob: "",
    requirements: "",
    skills: "",
    aboutcompany: "",
  });

  const handleChange = (e) => {
    setIsForm({
      ...isForm,
      [e.target.id]: e.target.value,
    });
  };
  
  const handlEvent = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API}/api/postjob`, isForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to submit data");
    }
  };

  return (
    <>
      <form
        className="w-full lg:w-[900px] xl:w-full flex flex-col gap-2 items-center py-4 text-black text-[12px] lg:text-[14px]  dark:text-white"
        onSubmit={handlEvent}
      >
        <h1 className="text-xl md:text-4xl font-semibold my-10 text-black dark:text-white " >
          Post Job & Interships
        </h1>

        <div className="flex flex-col gap-2 border rounded-md p-4  w-full dark:bg-gray-900  dark:border-none">
          <label className="font-semibold " htmlFor="designation">
            Designation
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            id="desigination"
            type="text"
            value={isForm.desigination}
            placeholder="Designation"
            onChange={handleChange}
          />
          <label className="font-semibold " htmlFor="companyname dark:backdrop-blur-xl dark:bg-white/20 dark:border-none">
            ComapnyName
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="text"
            id="companyname"
            value={user.user_name}
            placeholder="Comapny Name"
            onChange={handleChange}
          />
          <label htmlFor="locationtype" className="font-semibold dark:backdrop-blur-xl ">
            Location Type
          </label>
          <select
            id="locationtype"
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/30 dark:text-black dark:border-none"
            value={isForm.locationtype}
            onChange={handleChange}
            required
          >
            <option value="select"></option>
            <option value="workFromHome">Work form home</option>
            <option value="remote">remote</option>
            <option value="location">location</option>
          </select>

          <label htmlFor="jobtype" className="font-semibold ">
            Job type
          </label>
          <select
            id="jobtype"
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            value={isForm.jobtype}
            onChange={handleChange}
          >
            <option className="dark:text-black" value="select"></option>
            <option className="dark:text-black" value="workFromHome">Intership</option>
            <option className="dark:text-black" value="remote">Job</option>
          </select>

          <label htmlFor="worktype" className="font-semibold ">
            Work type
          </label>
          <select
            id="worktype"
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20   dark:border-none"
            value={isForm.worktype}
            onChange={handleChange}
            required
          >
            <option className="dark:text-black" value="select"></option>
            <option className="dark:text-black" value="workFromHome">Part Time</option>
            <option className="dark:text-black" value="remote">Full time</option>
          </select>
          <label className="font-semibold " htmlFor="location">
            Select Location
          </label>
          <select
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20    dark:border-none"
            id="location"
            value={isForm.location}
            onChange={handleChange}
          >
            <option></option>
            {Citydata &&
              Citydata.cities.map((item, index) => (
                <option key={index} value={item.City} className="px-2 py-2 dark:text-black">
                  {item.City}
                </option>
              ))}
          </select>

          <label className="font-semibold " htmlFor="startdate">
            Start date
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="date"
            id="startdate"
            value={isForm.startdate}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="annualCTC">
            Anual CTC
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none "
            type="text"
            placeholder="CTC amount"
            id="annualCTC"
            value={isForm.annualCTC}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="experience">
            Experience
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="text"
            placeholder="Experience"
            id="experience"
            value={isForm.experience}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="certificate">
            Add Certificates
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="text"
            placeholder="Add certificate"
            id="certificate"
            value={isForm.certificate}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="vacancies">
            No. of Vacancies
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="number"
            placeholder="No. of vacancies"
            id="vacancies"
            value={isForm.vacancies}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="joboffering">
            Job Offer
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="number"
            placeholder="Job offering amount in LPA"
            id="joboffering"
            value={isForm.joboffering}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="applyby">
            Apply By
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none "
            type="date"
            id="applyby"
            value={isForm.applyby}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="aboutthisjob">
            About this job
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            id="aboutthisjob"
            value={isForm.aboutthisjob}
            onChange={handleChange}
          ></textarea>

          <label className="font-semibold " htmlFor="requirements">
            Job requirements
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            id="requirements"
            value={isForm.requirements}
            onChange={handleChange}
          ></textarea>

          <label className="font-semibold " htmlFor="skills">
            Skills required
          </label>
          <input
            className="border outline-none rounded-sm px-2 py-2 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            type="text"
            id="skills"
            placeholder="Skills required"
            value={isForm.skills}
            onChange={handleChange}
          />

          <label className="font-semibold " htmlFor="aboutcompany">
            About this company
          </label>
          <textarea
            className="border outline-none rounded-sm px-2 py-2 min-h-40 max-h-96 dark:backdrop-blur-xl dark:bg-white/20 dark:border-none"
            value={isForm.aboutcompany}
            id="aboutcompany"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </>
  );
};

export default CompanyForm3;
