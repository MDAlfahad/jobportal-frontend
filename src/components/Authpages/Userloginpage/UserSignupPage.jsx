import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/buttons/ButtonComponents";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "../../images/authman.png";
import useAuthStore from "../../../Store/userAuth";
import Errorcard from "../ErrorCard";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import ErrorImage from "../../images/error.png"
import GreenTick from "../../images/GreenTick.png"


const UserLSignupPage = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const { message, success, setMessage, clearMessage } = useAuthStore();
  const showPassword = () => {
    setshow(!show);
  };
  // const API_CALL = `http://localhost:4000`;
  const API = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [popup, setpopup] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/register_User`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      const result = res.data;
      setMessage(result.message, result.success);

      
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Something went wrong";
      setMessage(errorMsg, false);
    }
  };
  useEffect(() => {
    clearMessage();
  }, []);
  const [password, setpassword] = useState("");

  return (
    <>
      <div className="max-w-[1800px] m-auto py-6 md:py-[68px] px-4 authBg md:px-12  authbg noselect relative">
        <div
          className={
            message ? "absolute top-20 left-1/2 -translate-x-1/2 " : "hidden"
          }
        >
          <Errorcard
          onclick={!success==true ?clearMessage : message => navigate("/login-page")}
          image={!success === true ? <img src={ErrorImage} width={70}/> : <img src={GreenTick} width={70}/> }
          para = {!success === true ? "Error state Conformation" : "Congratulations"}
          head={message } 
          type={success ? "success" : "error"}
           />
        </div>
        <div className="flex justify-between items-center h-[80vh] lg:px-20  pt-20 dark:text-white ">
          {/* login form */}
          <form className="p-6 w-[400px]  flex flex-col " onSubmit={handlEvent}>
            <h1 className="text-center font-medium text-xl md:text-3xl text-textcolor py-6 dark:text-white">
              Get Registerd Here!
            </h1>

            <div className="flex flex-col gap-2 text-[12px]">
              <label htmlFor="name">Name</label>
              <input
                className="text-[14px] px-2 py-2 border rounded-sm outline-none placeholder-textcolor2 dark:bg-black"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                id="name"
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                className=" text-[14px] px-2 py-2 border rounded-sm outline-none placeholder-textcolor2 dark:bg-black"
                type="email"
                id="email"
                name="email"
                placeholder="e.g example@.com"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <span className=" text-[14px] px-2 border rounded-sm flex items-center ">
                <input
                  className="px-2 py-2  outline-none  w-full placeholder-textcolor2 dark:bg-black"
                  type={!show ? "password" : "text"}
                  id="password"
                  placeholder="password contain atleast 6 digits"
                  name="password"
                  value={formData.password}
                  // onChange={(e) => {
                  //   setpassword(e.target.value);
                  // }
                  // }
                  onChange={handleChange}
                />
                {password.length > 0 && (
                  <p style={{ color: password.length < 5 ? "red" : "green" }}>
                    {password.length < 5
                      ? "password must contain 6 digits"
                      : "strong password !"}
                  </p>
                )}
                <p onClick={showPassword}>
                  {" "}
                  {!show ? (
                    <IoIosEye  size={22}  />
                  ) : (
                    <IoIosEyeOff  size={22} />
                  )}
                </p>
              </span>
              <p className="text-[red]">{popup.message}</p>
              <button className="w-full p-2 border rounded-sm my-2 bg-secondary hover:bg-textcolor text-white font-medium dark:border-none">
                Sign up
              </button>
            </div>
            <p className="text-sm md:text-[12px] py-2 text-center">
              Already have Account?
              <span>
                <Link to="/login-page" className="text-secondary">
                  {" "}
                  Login
                </Link>
              </span>
            </p>
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center py-2 w-full">
                <hr className=" w-full  " />
                <p className="px-4">or</p>
                <hr className=" w-full " />
              </span>
              <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-sm font-medium  text-textcolor cursor-pointer dark:text-white">
                <FcGoogle className="text-2xl" />
                Login with google
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

export default UserLSignupPage;
