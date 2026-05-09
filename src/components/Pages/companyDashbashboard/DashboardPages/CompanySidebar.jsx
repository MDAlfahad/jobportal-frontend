import { ClipboardList, LogOut, TextAlignJustify } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { CiLocationArrow1,CiSquarePlus  } from "react-icons/ci";
import useAuthStore from "../../../../Store/userAuth";

const CompanySidebar = ({ setActivePage, activePage }) => {
  const navigate = useNavigate();

  // side bar for active page
  const [show, setShow] = useState(true);

  const menuClass = (page) =>
    `flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md transition-all duration-300 ${
      activePage === page ? "bg-secondary text-white" : "hover:bg-gray-200 dark:hover:bg-secondary"
    }`;
  //handle jobpost

  const handlenavigate = () => {
    navigate("/job-post-page");
  };

  // handle for logout
  const logout = useAuthStore((state) => state.logout);
  const handlelogout = () => {
    logout();
    navigate("/login-page");
  };

  return (
    <div
      className={`mt-14 bg-white  dark:bg-black dark:border-gray-900 dark:text-white   transition-all duration-300 ${
        show ? "w-[250px]" : "w-[50px]"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-5">
        <TextAlignJustify
          strokeWidth={1.5}
          width={16}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        {show && (
          <p className="text-lg font-semibold transition-all duration-200">
            DASHBOARD
          </p>
        )}
      </div>

      <div className="flex flex-col h-[80%] justify-between">
        <div className="flex flex-col gap-2">
          <div
            className={menuClass("profile")}
            onClick={() => setActivePage("profile")}
            title={!show ? "Profile" : ""}
          >
            <CiLocationArrow1 size={16} />
            {show && <p>Total posts</p>}
          </div>

          <div
            className={menuClass("application")}
            onClick={() => setActivePage("application")}
            title={!show ? "applicaton" : ""}
          >
            <ClipboardList strokeWidth={1} size={16} />
            {show && <p>Application</p>}
          </div>

          <div
            className={menuClass("jobpost")}
            title={!show ? "jobpost" : ""}
            onClick={() => setActivePage("jobpost")}
          >
            <CiSquarePlus  width={16} className=" text-textcolor" />
            {show && <p>Create post</p>}
          </div>
        </div>

        <div
          onClick={handlelogout}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 rounded-md"
          title={!show ? "Logout" : ""}
        >
          <LogOut size={16} />
          {show && <p>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default CompanySidebar;
