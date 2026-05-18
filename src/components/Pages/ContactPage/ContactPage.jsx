import FooterContainer from "../HeroContaner/FooterContainer";
import ApplyPage from "./ApplyPage";
import FaqsPage from "./FaqsPage";
import Image from "../../images/telephone.png";
import Button from "../../Components/buttons/ButtonComponents";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const ContactPage = () => {
  return (
    <>
      <div className=" px-4 md:px-12 py-10 md:py-16 flex flex-col items-center  w-full justify-center max-w-[1800px] m-auto dark:bg-black">
        <div className="lg:flex justify-center items-center border rounded-sm lg:w-[1000px] lg:h-[550px] overflow-hidden px-2 py-2 mt-10 dark:bg-gray-900 dark:border-none">
          <div className="lg:w-[500px] bg-background h-full rounded-sm p-2 text-textcolor dark:bg-gray-900 dark:text-white  ">
            <h1 className="text-xl  md:text-2xl lg:text-6xl font-semibold">contact information</h1>
            <p className="text-12px lg:text-[14px]">We will create high quality linkable contact and support </p>

            <div className="flex flex-col gap-4 py-10">
              <span className="flex items-center gap-2">
                {" "}
                <FaPhone size={22}/>
                +91 6260379325
              </span>
              <span className="flex items-center gap-2">
                {" "}
                <MdEmail size={22}/>
                jobportal@support.com
              </span>
              <span className="flex items-center gap-2">
                {" "}
                <ImLocation size={22}/> Bhilai, Chhattisgarh
              </span>
            </div>
          </div>
          <form action="submit" className="flex flex-col gap-2 lg:w-[500px] px-2 text-textcolor dark:text-white">
            <div>
              <h1 className="text-2xl md:text-4xl font-medium">Need help !</h1>
              <p className="text-[12px]">Contact us for further assistance</p>
            </div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular bg-transparent"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Name"
              id="email"
              className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular bg-transparent"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              placeholder="Name"
              id="phone"
              className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular bg-transparent"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular min-h-28 max-h-[200px] bg-transparent mb-2"
            ></textarea>
            <Button text="Submit" />
          </form>
        </div>
      </div>

      <FaqsPage />
      <ApplyPage />
      <FooterContainer />
    </>
  );
};

export default ContactPage;
