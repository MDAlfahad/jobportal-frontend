import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const FaqsCard = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col gap-1 bg-gray-200 p-2 rounded-sm min-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] transition-all duration-300 dark:bg-white dark:text-black">
      <h1 className="flex items-center text-[12px] lg:text-[14px] justify-between" onClick={handleshow}>
       {question}
        {!show ? (
          <LuPlus />
        ) : (
          <LuMinus />
        )}
      </h1>
      {show && (
        <p className="text-[14px] font-light max-w-96 ">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqsCard;
