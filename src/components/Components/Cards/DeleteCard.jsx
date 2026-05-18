import Button from "../buttons/ButtonComponents";
import { RxCross1 } from "react-icons/rx";
import { BiSolidErrorAlt } from "react-icons/bi";

const DeleteCard = ({ Remove, Cancel }) => {
  return (
    <div className=" lg:w-96 px-2 py-4 flex flex-col items-center justify-center rounded-sm shadow-xl border border-gray-200 bg-white dark:bg-gray-900 dark:border-none relative">
      <span className="p-4 bg-red-100 rounded-full">
        <BiSolidErrorAlt size={50} color="red" />
      </span>
      <h1 className="text-2xl font-semibold">Delete this job?</h1>
      <p className="text-[12px] lg:text-[12px] py-2 text-center">
        Are you sure you want to delete this job? <br />
        This Action Will delete Job Permanently{" "}
      </p>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="px-6 py-[6.5px] border border-gray-300 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 "
          onClick={Cancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-6 py-[6.5px] bg-red-500 text-white hover:bg-red-600 rounded-sm"
          onClick={Remove}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteCard;
