import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../Components/buttons/ButtonComponents";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "../../../Store/userAuth";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Image from "../../images/authpage.jpg";
import Errorcard from "../ErrorCard";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidErrorAlt } from "react-icons/bi";
// import apiClient from "../../../API/API";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [show, setshow] = useState(false);
  const {
    user,
    message,
    success,
    setMessage,
    loading,
    setLoading,
    clearMessage,
  } = useAuthStore();
  const [popup, setpopup] = useState({
    show: false,
    message: "",
    type: "",
  });

  // const API_CALL = `http://localhost:4000`
  const API = import.meta.env.VITE_API_URL;
  // console.log("API URL:", API);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (email == "" || password == "") {
        setpopup({
          show: true,
          message: "Email and password Required",
        });
        setTimeout(() => {
          setpopup({
            show: false,
            message: "",
          });
        }, 3000);
        setLoading(false);
        return;
      }
      const login = await axios.post(`${API}/api/login_users`, {
        email,
        password,
      });

      const { token, user } = login.data;
      setMessage("Login Successful", true);
      setAuth(user, token);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Something went wrong";
      setMessage(errorMsg, false);
    } finally {
      setLoading(false);
    }
  };
  //show passwod

  const showPassword = () => {
    setshow(!show);
  };
  useEffect(() => {
    clearMessage();
  }, []);

  return (
    <>
      <div className="max-w-[1800px] m-auto py-20 flex flex-col justify-center items-center h-screen   px-4 md:px-12 h-sceen  relative bg-gray-100 dark:bg-black">
        <div
          className={
            message
              ? "fixed inset-0 flex items-center justify-center bg-black/30 z-50"
              : "hidden"
          }
        >
          <Errorcard
            onclick={() => {
              clearMessage();
              if (success === false) return;
              if (user?.auth_role === "admin") navigate("/admin-dashboard");
              else if (user?.auth_role === "company")
                navigate("/Dashboard-Company");
              else {
                navigate("/");
              }
            }}
            image={
              success === false ? (
                <span className="p-4 bg-red-100 rounded-full">
                  <BiSolidErrorAlt size={50} color="red" />
                </span>
              ) : (
                <span className="p-4 rounded-full bg-green-100">
                  <BsCheckCircleFill size={60} color="green" />
                </span>
              )
            }
            para={
              success === true ? (
                <p className="text-[green]">Congratulations</p>
              ) : (
                <p className="text-[red]">Error state Conformation</p>
              )
            }
            head={message}
            type={success ? "success" : "error"}
          />
        </div>
        <div className="flex justify-center items-center gap-10 border lg:my-5 overflow-hidden bg-white rounded-xl md:p-4 dark:bg-gray-900 dark:border-none dark:text-white ">
          <form
            className="p-6 w-full lg:w-[400px] flex flex-col "
            onSubmit={handlelogin}
          >
            <h1 className="text-center font-medium text-xl md:text-3xl text-textcolor  dark:text-white py-4">
              Welcome back!
            </h1>
            <div className="flex flex-col gap-2 text-[12px] dark:text-white ">
              <label htmlFor="email">Email</label>
              <input
                className="px-2 py-2 border rounded-sm outline-none text-[14px] placeholder-textcolor2 dark:bg-transparent dark:border-gray-700"
                type="email"
                id="email"
                value={email}
                placeholder="e.g example@.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <span className=" px-0.5 w-full border rounded-sm outline-none flex items-center dark:border-gray-700">
                <input
                  className="px-2 py-2  text-[14px] w-full outline-none placeholder-textcolor2 dark:bg-transparent  "
                  type={!show ? "password" : "text"}
                  id="password"
                  placeholder="password@1234"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p onClick={showPassword}>
                  {!show ? <VscEye size={22} /> : <VscEyeClosed size={22} />}
                </p>
              </span>
              <p className="text-[12px] text-end hover:underline cursor-pointer">
                Forget passwod ?
              </p>
              <p className="text-[red]">{popup.message}</p>

              <button
                disabled={loading}
                type="submit"
                className="border rounded-sm p-2 font-medium bg-secondary hover:bg-textcolor w-full text-white dark:border-none "
              >
                {loading ? "Logging in..." : "Login"}
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
              <span className="flex items-center justify-center pb-2 w-full">
                <hr className=" w-full  " />
                <p className="px-4 ">or</p>
                <hr className=" w-full " />
              </span>
              <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-s font-medium text-textcolor cursor-pointer dark:text-white dark:border-gray-700">
                <FcGoogle className="text-2xl " />
                Login with Google
              </p>
            </div>
          </form>
          <div className="hidden md:block">
            <img src={Image} alt="" className="dark:opacity-80" />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLoginPage;
