import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserRound, Bell, User } from "lucide-react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import useAuthStore from "../../../Store/userAuth";
import useThemeStore from "../../../Store/lightDarkmode";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import Dummy from "../../images/dummyimage.png";

const Navbar = ({}) => {
  const API_CALL = `http://localhost:4000`;
  const navigate = useNavigate();
  // ------ toggle button
  const [isClick, setIsClick] = useState(false);
  const [scroll, SetScroll] = useState(false);

  const logout = useAuthStore((state) => state.logout);
  const handlelogout = () => {
    logout();
    navigate("/login-page");
  };

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 200) {
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

  const userclick = () => {
    setIsUser((show) => !show);
  };

  // -----login status---

  const { user, isAuthenticated } = useAuthStore();
  const role = user?.auth_role;

  return (
    <div
      className={`w-full fixed z-50 transition-all duration-300 ${scroll ? "bg-white border dark:bg-black dark:border-black dark:text-white" : "bg-transparent border border-transparent"}`}
    >
      <div className="max-w-[1800px] m-auto px-6 md:px-12 py-4 text-textcolor dark:text-white flex justify-between items-center relative">
        <div className="flex gap-5 lg:gap-20 items-center">
          <h1
            className="text-2xl lg:text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            JOB PORTAL
          </h1>

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
        </div>

        <div className="flex items-center gap-6">
          <span
            onClick={toggleTheme} 
            className="cursor-pointer p-2   border  rounded-full bg-lightblue"
          >
            {theme === "light" ? (
              <IoMdMoon className="border" />
            ) : (
              <IoMdSunny className="text-black" />
            )}
          </span>

            {!isAuthenticated && (
            <NavLink
              to={"/login-page"}
              className="hidden md:flex items-center gap-1 px-6 py-2 bg-secondary rounded-md text-md font-bold text-white"
            >
              LOGIN
            </NavLink>
          )}
          {/* <div
            className="md:block bg-lightblue p-2 text-textcolor rounded-full cursor-pointer hover:bg-white hover:text-secondary transition duration-300"
            onClick={() => navigate("/notification")}
          >
            <Bell strokeWidth={1.5} />
          </div> */}
          <div
            onClick={userclick}
            className={
              !role
                ? "md:block bg-lightblue p-2 border border-white text-textcolor rounded-full cursor-pointer hover:bg-white hover:border hover:border-secondary hover:text-secondary transition overflow-hidden"
                : "md:block bg-lightblue  text-textcolor rounded-full cursor-pointer hover:bg-white hover:text-secondary transition overflow-hidden"
            }
          >
            {!role ? (
              <UserRound strokeWidth={1.5} />
            ) : (
              <img
                src={
                  user?.user_image? `${API_CALL}/uploads/${user?.user_image}`: Dummy}
                alt=""
                className="w-10 h-10 object-cover"
              />
            )}
          </div>
          <div className="flex md:hidden">
            <HiOutlineBars3BottomRight
              onClick={toggle}
              className="text-4xl cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`absolute top-full right-5 shadow-lg border border-gray-100  ${isUser ? " translate-y-0" : "max-h-0 hidden -translate-y-0"}`}
        >
          <div className=" flex flex-col text-center bg-white dark:bg-black text-sm">
            {!isAuthenticated ? (
              ""
            ) : (
              <Link
                to={
                  role === "admin"
                    ? "/admin-dashboard"
                    : role === "company"
                      ? "/Dashboard-Company"
                      : "/student-Dashboard"
                }
                className="px-4 py-2 hover:bg-secondary hover:text-white "
                onClick={() => setIsClick(false)}
              >
                DashBoard
              </Link>
            )}
            {!isAuthenticated ? (
              null
            ) : (
              <p
                className="px-4 py-2 hover:bg-secondary hover:text-white "
                onClick={handlelogout}
              >
                logout
              </p>
            )}
          </div>
        </div>

        <div
          className={`flex flex-col bg-white w-full top-full left-0 px-4 py-2 z-50 md:hidden absolute overflow-hidden transition-all duration-500
    ${isClick ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
        >
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to="/job-page"
          >
            job
          </Link>
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-textcolor font-medium hover:text-white transition-all duration-300 hover:bg-secondary px-4 py-2"
            to={"/login-page"}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
