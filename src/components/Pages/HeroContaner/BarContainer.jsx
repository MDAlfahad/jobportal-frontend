import { MousePointerClick } from "lucide-react";
import Image from "../../images/company.webp";

const BarContainer = () => {
  return (
    <>
      <div className="w-full max-w-[1800px] m-auto bg-secondary dark:bg-gray-900 shadow-xl noselect ">
        <div className="w-full px-4 lg:px-12  py-2 md:py-4 lg:py-10 md:flex items-center  justify-between text-white">
          <div className=" flex items-center gap-12 justify-between bg-white rounded-full px-6 py-4 md:py-2 text-black md:text-white md:bg-transparent">
            <div className="relative flex  ">
              <img
                className="absolute left-5  rounded-full h-12 w-12 border border-white border-spacing"
                src={Image}
                alt=""
              />
              <img
                className=" h-12 w-12 rounded-full border border-white border-spacing"
                src={Image}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-lg lg:text-4xl  font-semibold ">
                100+
              </h1>
              <p className="text-[10px] lg:text-[16px]">Applicant per day</p>
            </div>
          </div>
          <div className="flex gap-5 items-center px-6 lg:px-3 py-4  md:py-2 bg-white md:bg-transparent rounded-full  text-black md:text-white  justify-between my-4 md:my-0">
            <div>
              <h1 className="text-2xl md:text-lg lg:text-4xl font-semibold ">
                Features
              </h1>
              <p className="text-[10px]  lg:text-[16px]">Apply Easily</p>
            </div>
            <div>
              <img
                className="h-12 w-12 rounded-full border border-secondary"
                src={Image}
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-5 items-center justify-between md:text-white text-black bg-white rounded-full px-6 py-2 md:bg-transparent">
            <div>
              <h1 className="text-2xl md:text-lg lg:text-4xl  font-semibold">
                What we do
              </h1>
              <p className="text-[10px]  lg:text-[16px]">
                Help You to get job
              </p>
            </div>
            <div className="p-1 lg:p-3 md:bg-white bg-secondary md:text-secondary text-white  rounded-s-2xl rounded-t-2xl ">
              <MousePointerClick strokeWidth={1.5} size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarContainer;
