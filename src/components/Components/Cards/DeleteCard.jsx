import { BiSolidEditAlt } from "react-icons/bi";

const DeleteCard     = ({
  Delete,
  Cancel,
  SetActive,
  SetInactive,
}) => {
  return (
    <div className="w-[90vw] sm:w-80 lg:w-96 px-4 py-5 flex flex-col items-center justify-center rounded-sm shadow-xl border border-gray-200 bg-white dark:bg-gray-900 dark:border-none relative">
      
      <span className="p-4 bg-blue-100 rounded-full">
        <BiSolidEditAlt size={45} color="blue" />
      </span>

      <h1 className="text-2xl font-semibold mt-3">
        Edit Job Post
      </h1>

      <p className="text-[12px] py-2 text-center text-gray-500">
        Manage your job post settings and update status.
      </p>


      <div className="flex gap-3 py-4 flex-wrap justify-center">
        <button
          type="button"
          onClick={SetActive}
          className="px-4 py-2 rounded-sm bg-green-500 text-white hover:bg-green-600"
        >
          Active Post
        </button>

        <button
          type="button"
          onClick={SetInactive}
          className="px-4 py-2 rounded-sm bg-[red] text-white hover:bg-red-600"
        >
          Inactive Post
        </button>
      </div>

    
      <div className="flex items-center gap-4 mt-3">
        <button
          type="button"
          className="px-6 py-[6.5px] border border-gray-300 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={Cancel}
        >
          Cancel
        </button>

        <button
          type="button"
          className="px-6 py-[6.5px] bg-secondary text-white hover:bg-textcolor rounded-sm"
          onClick={Delete}
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default DeleteCard;