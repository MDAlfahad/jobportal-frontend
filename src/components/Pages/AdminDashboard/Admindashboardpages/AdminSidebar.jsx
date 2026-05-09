import {
  Bookmark,
  BookText,
  ClipboardList,
  LogOut,
  TextAlignJustify,
  User,
} from "lucide-react";
import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../../Store/userAuth";
import useThemeStore from "../../../../Store/lightDarkmode";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const AdminSidebar = ({ setActivePage, activePage }) => {
  const { theme, toggleTheme } = useThemeStore();

  const navigate = useNavigate();

  //acive side bar
  const [show, setShow] = useState(true);
  const logout = useAuthStore((state) => state.logout);

  const menuClass = (page) =>
    `flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md transition-all duration-100 ${activePage === page
      ? "bg-secondary text-white"
      : "hover:bg-gray-200 dark:hover:bg-secondary"
    }`;

  const handlelogut = () => {
    logout();
    navigate("/login-page");
  };

  return (
    <div
      className={` bg-white  border transition-all duration-100 dark:bg-black dark:border-gray-900 ${show ? "w-[250px]" : "w-[50px] text-[22px]"
        }`}
    >
      <div className="flex items-center gap-3 px-4 py-5 mt-14 ">
        <TextAlignJustify
          strokeWidth={1.5}
          size={16}
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        {show && (
          <p className="text-lg font-semibold transition-all duration-100">
            ADMIN DASHBOARD
          </p>
        )}
      </div>

      <div className="flex flex-col h-[80%]">
        <div className="flex flex-col gap-2">
          <div
            className={menuClass("profile")}
            onClick={() => setActivePage("profile")}
            title={!show ? "Profile" : ""}
          >
            <RiAdminLine size={16} />
            {show && <p>Dashboard</p>}
          </div>

          <div
            className={menuClass("application")}
            onClick={() => setActivePage("application")}
            title={!show ? "applicaton" : ""}
          >
            <CiUser size={16} />
            {show && <p>User Credentials</p>}
          </div>

          <div
            className={menuClass("CompanyUser")}
            onClick={() => setActivePage("CompanyUser")}
            title={!show ? "Saved Forms" : ""}
          >
            <PiBuildingOfficeLight size={16} />
            {show && <p>company Credentials</p>}
          </div>
          <div
            className={menuClass("form")}
            onClick={() => setActivePage("form")}
            title={!show ? "forms" : ""}
          >
            <IoIosInformationCircleOutline size={16} />
            {show && <p>Forms</p>}
          </div>
          {/* <div className={menuClass("jobposted")}
          onClick={()=>setActivePage("jobposted")}
          title={!show ? "forms" : ""}>
            
           <SiGoogleforms />
            {show && <p>Posted job</p>}
            
          </div> */}
        </div>
        <div className="flex flex-col gap-2 mt-auto w-full items-start justify-start">
          <div onClick={toggleTheme} className={`${menuClass("mode")} w-full`}>
            {theme === "light" ? (
              <BsMoonStars size={16} />
            ) : (
              <IoSunnyOutline size={16} />
            )}
            {show && <p>{theme === "light" ? "Dark" : "Light"}</p>}
          </div>

          <div
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-secondary rounded-md w-full"
            title={!show ? "Logout" : ""}
            onClick={handlelogut}
          >
            <LogOut size={16} />
            {show && <p>Logout</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
