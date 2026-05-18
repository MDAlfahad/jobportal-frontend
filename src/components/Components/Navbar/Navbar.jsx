import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserRound, Bell, User } from "lucide-react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import useAuthStore from "../../../Store/userAuth";
import useThemeStore from "../../../Store/lightDarkmode";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import Dummy from "../../images/dummyimage.png";
import Button from "../buttons/ButtonComponents";

const Navbar = ({}) => {
  // const API_CALL = `http://localhost:4000`;
  const API = import.meta.env.VITE_API_URL;
  const dropdownRef = useRef();

  const navigate = useNavigate();
  // ------ toggle button
  const [isClick, setIsClick] = useState(false);
  const [scroll, SetScroll] = useState(false);

  //user avatar

  const getAvatar = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");

    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-indigo-400",
    "bg-orange-400",
  ];

  const randomColor = (color) => {
    if (!color) return "bg-gray-500";

    const index = color.charCodeAt(0) % colors.length;
    return colors[index];
  };

  //loaout

  const logout = useAuthStore((state) => state.logout);
  const handlelogout = () => {
    logout();
    navigate("/login-page");
  };
  // scroll Animation

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 300) {
        SetScroll(true);
      } else {
        SetScroll(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const toggle = () => {
    setIsClick((prev) => !prev);
  };

  const [isUser, setIsUser] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  // drop down menu
  const userclick = () => {
    setIsUser((show) => !show);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // -----login status---

  const { user, isAuthenticated } = useAuthStore();
  const role = user?.auth_role;

  return (
    <div
      className={`w-full fixed z-50 transition-all duration-300 ${scroll ? "bg-white border shadow-sm  dark:bg-black dark:border-black dark:text-white" : "bg-transparent border border-transparent"}`}
    >
      <div className="max-w-[1800px] w-full m-auto px-6 md:px-12 py-[15px] text-textcolor dark:text-white flex justify-between items-center relative">
        <div className="flex gap-5 lg:gap-20 items-center">
          <h1
            className="text-2xl lg:text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            JOB PORTAL
          </h1>
          {/* Desktop nav  */}

          {user?.auth_role === "admin" || user?.auth_role === "company" ? (
            ""
          ) : (
            <div className="hidden md:flex gap-5 lg:gap-10">
              <NavLink
                className={({ isActive }) =>
                  `relative px-2  ${
                    isActive ? "text-secondary after:w-full" : "after:w-0"
                  } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-secondary after:transition-all `
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `relative px-2  ${
                    isActive
                      ? "text-secondary after:w-full duration-300"
                      : "after:w-0"
                  } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-secondary after:transition-all `
                }
                to="/job-page"
              >
                Job
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `relative px-2 ${
                    isActive
                      ? "text-secondary after:w-full transition-all duration-300"
                      : "after:w-0 "
                  } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-secondary after:transition-all duration-300`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <p className="text-secondary hidden md:block md:text-[14px] capitalize font-regular  dark:text-white px-2 py-1">
            {user?.user_name}
          </p>

          {!isAuthenticated && (
            <div className="hidden md:block">
              <Button text="Sign Up" onClick={() => navigate("login-page")} />
            </div>
          )}
          <div
            onClick={userclick}
            className={`md:block bg-secondary text-white border-2 border-secondary  rounded-full cursor-pointer hover:bg-white hover:text-secondary transition overflow-hidden
  ${!role ? "p-2" : "bg-lightblue"}`}
          >
            {!role ? (
              <UserRound strokeWidth={1.5} />
            ) : user?.user_image ? (
              <img
                src={`${API}/uploads/${user?.user_image}`}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white text-lg ${randomColor(
                  user?.user_name,
                )}`}
              >
                {getAvatar(user?.user_name)}
              </div>
            )}
          </div>

          <div className="flex md:hidden">
            <HiOutlineBars3BottomRight
              onClick={toggle}
              className="text-4xl cursor-pointer"
            />
          </div>
        </div>
        {/* dropDown menu  */}
        <div
          ref={dropdownRef}
          className={`absolute top-full right-16 md:right-5 shadow-lg  border-gray-100  ${isUser ? " translate-y-0" : "max-h-0 hidden -translate-y-0"}`}
        >
          <div className=" flex flex-col text-center bg-white dark:bg-black text-sm">
            {!isAuthenticated ? (
              <button
                type="button"
                className="md:hidden w-full px-4 py-2 text-left outline-none border-none hover:bg-secondary hover:text-white"
                onClick={() => navigate("login-page")}
              >
                Sign Up
              </button>
            ) : (
              <Link
                to={
                  role === "admin"
                    ? "/admin-dashboard"
                    : role === "company"
                      ? "/Dashboard-Company"
                      : "/student-Dashboard"
                }
                onClick={() => setIsClick(false)}
                className="px-4 py-2 hover:bg-secondary hover:text-white "
              >
                DashBoard
              </Link>
            )}
            {isAuthenticated && (
              <button
                type="button"
                className="w-full px-4 py-2 text-left outline-none border-none hover:bg-secondary hover:text-white"
                onClick={handlelogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* mobilemenu */}

        <div
          className={`flex flex-col bg-lightblue w-full top-full left-0 px-4 py-2 z-50 md:hidden absolute overflow-hidden transition-all duration-500 dark:bg-secondary 
    ${isClick ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
        >
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-textcolor  px-4 py-2 dark:text-white"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-textcolor px-4 py-2 dark:text-white"
            to="/job-page"
          >
            job
          </Link>
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-textcolor px-4 py-2 dark:text-white"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
