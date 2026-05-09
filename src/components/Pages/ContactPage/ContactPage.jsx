import FooterContainer from "../HeroContaner/FooterContainer";
import ApplyPage from "./ApplyPage";
import FaqsPage from "./FaqsPage";
import Image from "../../images/telephone.png"
import Button from "../../Components/buttons/ButtonComponents";

const ContactPage = () => {
  return (
    <>
      <div className=" px-4 md:px-12 py-6 md:py-16 flex items-center justify-center max-w-[1800px] m-auto dark:bg-black">
        <div className="md:flex items-center justify-between px-6 border pb-4 lg:w-[1100px] lg:h-[550px] mt-20 md:mt-10 rounded-xl border-gray-300 overflow-hidden bg-gray-50 py-6 md:py-2 dark:bg-gray-900 dark:border-none dark:text-white">
          <div className="md:flex items-center justify-center gap-4 ">
            <img src={Image} alt="" className="h-[550px] hidden md:block" />
            <div>
              <p className="text-[12px] md:text-[14px]">jobportal@gmail.com</p>
              <p className="text-[12px] md:text-[14px]">tel: +91 6260379325</p>
              <p className="text-[12px] md:text-[14px]">Bhilia, Chhattisgarh 490024</p>
            </div>
          </div>
          <div>
            <form action="submit" 
            className="flex flex-col gap-2 md:w-[400px]">
              <div>
                <h1 className="text-2xl md:text-4xl">Need help !</h1>
              <p className="text-[12px]">Contact us for further assistance</p>
              </div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" id="name" className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular bg-transparent" />
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Name" id="email" className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular bg-transparent" />
              <label htmlFor="phone">Phone</label>
              <input type="text" placeholder="Name" id="phone" className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular bg-transparent" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder="Your message" className="border border-textcolor rounded-sm px-2 py-2 outline-secondary text-[14px] font-regular h-28 max-h-[600px] bg-transparent mb-2"></textarea>
              <Button
              text ="Submit"/>
            </form>
          </div>
        </div>
      </div>  
      <FaqsPage />
      <ApplyPage />
      <FooterContainer />
    </>
  );
};

export default ContactPage;

