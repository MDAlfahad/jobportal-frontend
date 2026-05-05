import FooterContainer from "../HeroContaner/FooterContainer";
import ApplyPage from "./ApplyPage";
import FaqsPage from "./FaqsPage";

const ContactPage = () => {
  return (
    <>
      <div className=" px-6 w-full md:px-12 md:flex justify-center py-6 items-center max-w-[1800px] m-auto contactBackground relative  ">
        <div className="md:flex xl:ml-52 py-10 md:0 w-full justify-around items-center">
          <div className="flex flex-col gap-1 xl:mt-20 md:mt-0  dark:text-white">
            <span className="font-medium text-[12px] flex items-center">
              Email:
              <p className="font-light">alfahadkhan715@gamil.com</p>
            </span>
            <span className="font-medium text-[12px] flex items-center">
              Contact: <p className="font-light">+91 6260379325</p>
            </span>
            <span className="font-medium text-[12px] ">
              Address:
              <p className="font-light ">
                Near, Rungta College of engineering and <br /> technology kokha
                kurud Bhilai - CG 490024
              </p>
            </span>
          </div>
          <div className=" flex flex-col md:w-[450px] md:bg-white py-10 dark:bg-black dark:text-white text-black">
            <div className="leading-6  ">
              <h1 className="text-[30px]">Need help ?</h1>
              <p className="text-[14px] font-light">
                Contact us for further assistance{" "}
              </p>
            </div>
            <form
              action="submit"
              className="flex flex-col gap-2 py-4 md:w-[400px] lg:w-[500px] text-[14px] "
            >
              <label htmlFor="name">Name</label>
              <input
                className="border border-textcolor rounded-sm px-2 py-2 outline-none w-full bg-transparent"
                type="text"
                id="name"
                placeholder="name"
              />
              <label htmlFor="email">Email</label>
              <input
                className="border border-textcolor rounded-sm px-2 py-2 outline-none bg-transparent"
                type="email"
                id="email"
                placeholder="e.g example.com"
              />
              <label htmlFor="contact">Contact Number</label>
              <input
                className="border border-textcolor rounded-sm px-2 py-2 outline-none bg-transparent"
                type="tel"
                id="contact"
                placeholder="62XXXXXXXX00"
              />
              <label htmlFor="message">Your Message</label>
              <textarea
                className="md:min-w-[400px] min-h-28 max-h-48 border border-textcolor outline-none rounded-sm p-2 bg-transparent"
                name="message"
                id="message"
                placeholder="Your message here..."
              ></textarea>
              <button
                className="p-2  bg-secondary hover:bg-textcolor text-white rounded-sm transition duration-300"
                type="submit"
              >
                Submit
              </button>
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
