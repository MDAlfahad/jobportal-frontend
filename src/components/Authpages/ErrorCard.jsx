import Button from "../Components/buttons/ButtonComponents";

const Errorcard = ({ head, onclick, para, image }) => {
  return (
    <div className="w-80 lg:w-96 px-2 py-4 flex flex-col items-center justify-center rounded-sm shadow-xl border border-gray-200 bg-white dark:bg-gray-900 dark:border-none dark:text-white relative">
      <div>
      <div className="flex items-center justify-center py-2">{image}</div>
        <div>
          <h1 className="text-2xl font-semibold">{para}</h1>
          <p className="text-[12px] lg:text-[16px] py-2 text-center">{head}</p>
        </div>
      </div>
      <button

        onClick={onclick}
        className="w-full bg-secondary rounded-sm hover:bg-textcolor text-white shadow-lg my-2 py-1"
      >
        Ok
      </button>
    </div>
  );
};

export default Errorcard;
