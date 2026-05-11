import Button from "../Components/buttons/ButtonComponents";
const Errorcard = ({ head, onclick, para, image }) => {
  return (
    <div
      className={
        "px-6 py-4 h-30 rounded-xl bg-secondary/30  border-t-[10px] border-secondary flex flex-col justify-center items-center backdrop-blur-xl dark:bg-gray-900 dark:border-none dark:text-white "
      }
    >
      <div className="flex items-center gap-4">
        <div>{image}</div>
        <div>
          <h1 className="text-[14px] font-regular">{para}</h1>
          <p className="text-[12px] py-2 ">{head}</p>
        </div>
      </div>
      <button
        onClick={onclick}
        className="w-full bg-secondary rounded-sm hover:bg-textcolor text-white shadow-lg my-2 "
      >
        Ok
      </button>
    </div>
  );
};

export default Errorcard;
