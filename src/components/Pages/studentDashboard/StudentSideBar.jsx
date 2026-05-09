import {
  Bookmark,
  ClipboardList,
  LogOut,
  TextAlignJustify,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../Store/userAuth";

const StudentSideBar = ({ setActivePage, activePage }) => {
  const navigate = useNavigate();
  // multiple pages routing

  const logout = useAuthStore((state) => state.logout);
  const handlelogout = () => {
    logout();
    navigate("/login-page");
  };

  const [show, setShow] = useState(false);
  const menuClass = (page) =>
    `flex items-center gap-3 px-4 py-3 cursor-pointer  transition-all duration-300 ${
      activePage === page ? "bg-secondary text-white" : "hover:bg-blue-100 dark:hover:bg-secondary"
    }`;

  return (
    <div
      className={` bg-white border  transition-all duration-300 dark:bg-black dark:border-gray-900 ${
        show ? "w-[250px]" : "w-[50px]"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-5 mt-20">
        <TextAlignJustify
          strokeWidth={1.5}
          width={16}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        {show && (
          <p className="text-lg font-semibold transition-all duration-300">
            DASHBOARD
          </p>
        )}
      </div>

      <div className="flex flex-col h-[70%] justify-between">
        <div className="flex flex-col gap-2">
          <div
            className={menuClass("profile")}
            onClick={() => setActivePage("profile")}
            title={!show ? "Profile" : ""}
          >
            <UserRound size={16} strokeWidth={1} />
            {show && <p>Profile</p>}
          </div>

          <div
            className={menuClass("application")}
            onClick={() => setActivePage("application")}
            title={!show ? "applicaton" : ""}
          >
            <ClipboardList size={16} strokeWidth={1} />
            {show && <p>Application</p>}
          </div>

          <div
            className={menuClass("savedform")}
            onClick={() => setActivePage("savedform")}
            title={!show ? "Saved Forms" : ""}
          >
            <Bookmark size={16} strokeWidth={1} />
            {show && <p>Saved</p>}
          </div>
        </div>

        <div
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 rounded-md"
          title={!show ? "Logout" : ""}
          onClick={handlelogout}
        >
          <LogOut size={16} strokeWidth={1} />
          {show && <p>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default StudentSideBar;
