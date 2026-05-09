import { MousePointerClick } from "lucide-react";
import Image from "../../images/company.webp";

const BarContainer = () => {
  return (
    <>
      <div className="w-full max-w-[1800px] mx-auto bg-secondary dark:bg-gray-900 shadow-xl noselect overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-10 xl:py-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-20 2xl:gap-80 text-white">
          
          {/* Card 1 */}
          <div className="w-full sm:w-[80%] md:w-auto flex items-center justify-between md:justify-center gap-4 lg:gap-8 bg-white rounded-full px-5 sm:px-6 py-3 md:py-2 text-black md:text-white md:bg-transparent">
            <div className="relative flex ">
              <div className="h-12 w-12  rounded-full overflow-hidden border border-white ">
                <img
                className="w-full h-full object-cover"
                src={Image}
                alt=""
              />
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden absolute left-5 top-0 border border-white">
                <img
                className="w-full h-full object-cover"
                src={Image}
                alt=""
              />
              </div>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                100+
              </h1>
              <p className="text-[11px] sm:text-xs lg:text-base">
                Applicant per day
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[80%] md:w-auto flex items-center justify-between md:justify-center gap-5 lg:gap-6 px-5 sm:px-6 lg:px-3 py-3 md:py-2 bg-white md:bg-transparent rounded-full text-black md:text-white">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-white">
              <img
                className=" w-full h-full object-cover"
                src={Image}
                alt=""
              />
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Features
              </h1>
              <p className="text-[11px] sm:text-xs lg:text-base">
                Apply Easily
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[80%] md:w-auto flex items-center justify-between md:justify-center gap-4 lg:gap-5 md:text-white text-black bg-white rounded-full px-5 sm:px-6 py-3 md:py-2 md:bg-transparent">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                What we do
              </h1>
              <p className="text-[11px] sm:text-xs lg:text-base">
                Help You to get job
              </p>
            </div>

            <div className="p-2 lg:p-3 md:bg-white bg-secondary md:text-secondary text-white rounded-s-2xl rounded-t-2xl flex items-center justify-center">
              <MousePointerClick strokeWidth={1.5} size={32} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarContainer;