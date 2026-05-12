import { useState, useEffect, useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import CrauselCard from "../../Components/Cards/CrauselCard";
import useAnimate from "../../../Store/animation";

const CrauselContainer = () => {
  const API = import.meta.env.VITE_API_URL;

  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = data.length - visibleCards;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    fetch(`${API}/api/jobdata`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  const ref = {
    head: useRef(),
    box: useRef(),
  };
  useAnimate(ref.head);
  useAnimate(ref.box, { y: 100 });

  return (
    <div className="max-w-[1800px] m-auto px-4 py-10      md:py-20 dark:text-white dark:bg-black">
      {/* Heading */}
      <div ref={ref.head} className="pb-20">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl text-textcolor font-semibold text-center ">
          Apply Now to Start
          <span className="text-secondary "> Your Career</span>
        </h1>
        <p className="text-center text-[14px] py-4">
          Take the first step toward a successful future.{" "}
        </p>
      </div>

      <div
        ref={ref.box}
        className="flex items-center justify-center w-full max-w-7xl 2xl:max-w-8xl mx-auto"
      >
        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="hidden sm:block p-1 xl:p-3 bg-gray-200 dark:text-black rounded-full mx-2 hover:bg-secondary hover:text-white transition"
        >
          <MoveLeft />
        </button>


        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {data.map((item) => (
              <div
                key={item.id}
               className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] p-2"
              >
                <CrauselCard {...item} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="hidden sm:block p-1 xl:p-3 bg-gray-200 dark:text-black rounded-full mx-2 hover:bg-secondary hover:text-white transition"
        >
          <MoveRight />
        </button>
      </div>

      {/* MOBILE DOTS */}
      <div className="flex justify-center my-6 gap-2 sm:hidden">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${currentIndex === i ? "bg-secondary" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CrauselContainer;
