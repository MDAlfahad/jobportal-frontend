import axios from "axios";
import { Mail } from "lucide-react";
import { useState } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DarkLightComponent from "../../Components/buttons/DarkLightComponent";
import useThemeStore from "../../../Store/lightDarkmode";


const FooterContainer = () => {
  const API = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const{theme} = useThemeStore();

  const apply = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email Required");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/subscribe`, {
        email,
      });

      alert(res.data.message || "Subscribed Successfully");
      setEmail("");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="w-full shadow-2xl border noselect capitalize dark:bg-black dark:text-white dark:border-black">
        <div className="w-full max-w-[1800px] m-auto px-4 md:px-12 py-12 md:flex justify-between">
          <div className="flex flex-col gap-1 text-center md:text-start">
            <h1 className="text-3xl font-semibold md:text-4xl">JOB PORTAL</h1>
            <p className="text-xs text-textcolor2 leading-3 dark:text-white">
              Connect with skilled students, freshers, <br /> and experienced
              candidates in one place.
            </p>

            <div className=" flex items-center md:gap-2 py-4 px-6 md:px-0 justify-between md:justify-start">
              <a
                className="p-2 rounded-full border text-xl border-textcolor2 dark:text-white dark:border-white dark:hover:text-secondary hover:border-secondary hover:bg-gray-200  hover:text-secondary text-textcolor2  transition duration-300"
                href="mailto:alfahadkhan715@gmail.com"
              >
                <IoMailOutline />
              </a>
              <span
                title="instagram"
                className="p-2 rounded-full border text-xl border-textcolor2 dark:border-white dark:text-white dark:hover:text-secondary hover:border-secondary hover:bg-gray-200  hover:text-secondary text-textcolor2  transition duration-300"
              >
                <a
                  href="https://www.instagram.com/al_fahad_2401"
                  target="_blank"
                >
                  <PiInstagramLogoLight />
                </a>
              </span>
              <span
                title="facebook"
                className="p-2 rounded-full border text-xl border-textcolor2 dark:border dark:text-white dark:hover:text-secondary  hover:border-secondary hover:bg-gray-200  hover:text-secondary text-textcolor2  transition duration-300"
              >
                <a href="#" target="_blank">
                  <SlSocialFacebook />
                </a>
              </span> 
              <span
                title="linkedin"
                className="p-2 rounded-full border text-xl border-textcolor2 dark:border-white dark:text-white dark:hover:text-secondary hover:border-secondary hover:bg-gray-200  hover:text-secondary text-textcolor2  transition duration-300"
              >
                <a href="https://www.linkedin.com/MDAlfahad" target="_blank">
                  <SlSocialLinkedin />
                </a>
              </span>
              <span
                title="twitter"
                className="p-2 rounded-full border text-xl border-textcolor2 dark:border-white dark:text-white dark:hover:text-secondary hover:border-secondary hover:bg-gray-200  hover:text-secondary text-textcolor2  transition duration-300"
              > 
                <a href="https://www.X.com/alfahad khan" target="_blank">
                  <SlSocialTwitter />
                </a>
              </span>
            </div>
            <div className="flex border rounded-sm  items-center overflow-hidden">
              <input
                className="px-4 py-2 outline-secondary w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <a
                href="#"
                onClick={apply}
                title="click to subscribe!"
                className="px-4 py-2 bg-secondary text-white hover:bg-textcolor  transition duration-300"
              >
                Subscribe
              </a>
            </div>
            <div className=" flex items-center py-2  gap-2 ">
              <p className="text-[14px]">Light Mode</p>
              <DarkLightComponent/>
              <p className="text-[14px]">Dark Mode</p>
            </div>
          </div>
          <div className="flex gap-16 md:gap-20 py-2 md:py-0">
            <div className="flex flex-col gap-4">
              <h1 className="text-md md:text-xl font-semibold text-textcolor dark:text-white">
                About
              </h1>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/job-page"
              >
                Jobs
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/Dashboard-Company"
              >
                Company
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="#"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-md md:text-xl font-semibold text-textcolor dark:text-white">
                LInks
              </h1>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/login-page"
              >
                Post a Job
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/placement"
              >
                Get Placed
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/company"
              >
                Join us
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/contact-page"
              >
                Blogs
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-md md:text-xl font-semibold text-textcolor dark:text-white">
                Products
              </h1>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/"
              >
                Terms of use
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="Jobs"
              >
                Privacy policy
              </Link>
              <Link
                className="hover:text-secondary text-[14px] transition duration-300"
                to="/login-page"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-[12px] md:py-5 lowercase">
          &copy; copyright 2026 Job Portal, All right reserved.
        </p>
      </div>
    </>
  );
};

export default FooterContainer;
