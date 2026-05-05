import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/buttons/ButtonComponents";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "../../../Store/userAuth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Image from "../../images/authman.png";
import Errorcard from "../ErrorCard";
// import apiClient from "../../../API/API";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [show, setshow] = useState(false);
  const { message, success, setMessage, clearMessage } = useAuthStore();
  const [popup, setpopup] = useState({
    show: false,
    message: "",
    type: "",
  });

  // const API_CALL = `http://localhost:4000`
  const API = import.meta.env.VITE_API_URL;


  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      if (email == "" || password == "") {
        setpopup({
          show: true,
          message: "Email and password Required",
        });
        setTimeout(()=>{
          setpopup({
            show: false,
            message: ""
          })
        }, 3000)
        return;

        
      }
      const login = await axios.post(`${API}/api/login_users`, {
        email,
        password,
      });
        

      const { token, user } = login.data;
      setAuth(user, token);

      if (user.auth_role === "admin") navigate("/admin-dashboard");
      else if (user.auth_role === "company") navigate("/Dashboard-Company");
      else {
        navigate("/");
      }
    } catch (err) {
     
       const errorMsg = err.response?.data?.message || "Something went wrong";
      setMessage(errorMsg, false);
    }
  };
  //show passwod

  const showPassword = () => {
    setshow(!show);
  };
  useEffect(()=>{
    clearMessage();
  }, [])

  return (
    <>
      <div className="max-w-[1800px] m-auto md:py-[68px] px-4 md:px-12 authBg py-6  relative ">
        <div
          className={
            message ? "absolute top-20 left-1/2 -translate-x-1/2 " : "hidden"
          }
        >
          <Errorcard
          onclick={!success==true ?clearMessage : message => navigate("/login-page")}
          head={message} 
          type={success ? "success" : "error"}
           />
        </div>
        <div className="flex justify-between items-center h-[80vh]  w-full lg:px-20 pt-20">
          <form className="p-6 w-full lg:w-[400px] flex flex-col " onSubmit={handlelogin}>
            <h1 className="text-center font-medium text-xl md:text-3xl text-textcolor dark:text-white py-4">
              Welcome back!
            </h1>
            <div className="flex flex-col gap-2 text-[12px] dark:text-white ">
              <label htmlFor="email">Email</label>
              <input
                className="px-2 py-2 border rounded-sm outline-none text-[14px] placeholder-textcolor2 dark:bg-transparent"
                type="email"
                id="email"
                value={email}
                placeholder="e.g example@.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <span className=" px-2 w-full border rounded-sm outline-none flex items-center ">
                <input
                  className="px-2 py-2  text-[14px] w-full outline-none placeholder-textcolor2 dark:bg-transparent  "
                  type={!show ? "password" : "text"}
                  id="password"
                  placeholder="password@1234"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p onClick={showPassword} className="dark:bg-black">
                  {!show ? (
                    <IoIosEye size={22} />
                  ) : (
                    <IoIosEyeOff size={22} />
                  )}
                </p>
              </span>
              <p className="text-[red]">{popup.message}</p>

              <button
                type="submit"
                className="border rounded-sm p-2 font-medium bg-secondary hover:bg-textcolor w-full text-white dark:border-none"
              >
                Login
              </button>
            </div>

            <p className="text-[11px] md:text-[12px] py-4 dark:text-white">
              Don't have account? Create
              <span>
                ({" "}
                <Link to="/user-signup" className="text-secondary">
                  Student
                </Link>
                /
                <Link to="/company-signup" className="text-secondary">
                  Company
                </Link>
                )
              </span>
            </p>
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center py-2 w-full">
                <hr className=" w-full  " />
                <p className="px-4 ">or</p>
                <hr className=" w-full " />
              </span>
              <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-s font-medium text-textcolor cursor-pointer dark:text-white">
                <FcGoogle className="text-2xl " />
                Login with Google
              </p>
            </div>
          </form>
          <div className="hidden md:block">
            <img
              src={Image}
              alt=""
              className="lg:mr-28 md:w-[250px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLoginPage;
