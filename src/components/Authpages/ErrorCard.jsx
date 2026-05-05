import Button from "../Components/buttons/ButtonComponents";
import ErrorImage from "../images/error.png"
const Errorcard = ({ head, onclick }) => {
  return (
    <div
      className={
        "px-4 py-3 h-30 rounded-xl bg-secondary/30 border flex flex-col justify-center items-center backdrop-blur-xl dark:bg-gray-900 dark:border-none dark:text-white "
      }
    >
      <div className="flex items-center gap-2">
        <div >
          <img src={ErrorImage} width={70} alt="" />
        </div>
        <div>
        <h1 className="text-[14px] font-regular">Error state Conformation</h1>
      <p className="text-[12px] py-2">{head}</p>
      </div>
      </div>
      <button
      onClick={onclick}
      className="w-full bg-secondary rounded-sm hover:bg-textcolor text-white shadow-lg ">Ok</button>
    </div>
  );
};

export default Errorcard;
