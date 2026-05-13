import { FcGoogle } from "react-icons/fc";
import Background from "../../images/background.png";
import { useState } from "react";
import Button from "../../Components/buttons/ButtonComponents";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import useAuthStore from "../../../Store/userAuth";


const CompanySignupPage = () => {

  const navigate = useNavigate();

  const[show, setshow] = useState(false);
  const showPassword = ()=>{
    setshow(!show)
  }
  const {setLoading, loading} = useAuthStore();


  // const API_CALL = `http://localhost:4000`;
  const API = import.meta.env.VITE_API_URL;
  

  const [isSignup, setIsSignup] = useState({
    name: "",
    email: "",
    password: "",
    mobilenumber: "",
  });

  const handleChange = (e) => {
    setIsSignup({
      ...isSignup,
      [e.target.name]: e.target.value,
    });
  };

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const signup = await axios.post(
        `${API}/api/register_company`,
        isSignup,
      );
      console.log(signup.data);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };
  //navigate page 

  const handlenavigate =()=>{
    navigate("/login-page")
  }

  // const [password, setpassword] = useState("");
  return (
    <>
      <div className="max-w-[1800px] m-auto  w-full noselect    ">
        <div className="w-full md:h-[100vh] lg-auto bg-secondary py-10 md:pt-20 md:flex justify-between px-4 md:px-12 items-center overflow-hidden dark:bg-black">
          <div>
            <div className="mt-10">
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold ">
                Start hiring now
              </h1>
              <p className="text-sm lg:text-md text-white py-2">
                Hire students from top Colleges and Universities
              </p>
              <div >
                <img width={700} src={Background} alt="" />
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handlesignup}
              className=" p-6 md:w-[400px] flex flex-col gap-2 text-[14px] text-textcolor bg-white rounded-md dark:bg-gray-900 dark:text-white "
            >
              <div className="flex flex-col items-center">
                <p className="flex gap-4 items-center border px-2 py-2 w-full justify-center rounded-sm text-md font-semibold cursor-pointer dark:border-gray-700">
                  <FcGoogle className="text-2xl md:text-4xl" />
                  Login with google
                </p>
                <span className="flex items-center justify-center py-2 w-full">
                  <hr className=" w-full  " />
                  <p className="px-4">or</p>
                  <hr className=" w-full " />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[12px] font-medium">Name</label>
                <input
                  className="px-2 py-2 border rounded-sm bg-transparent outline-none text-[14px] placeholder dark:border-gray-700"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={isSignup.name}
                  placeholder="name"
                  required
                />
                <label htmlFor="email"  className="text-[12px] font-medium">Offical email</label>
                <input
                  className="px-2 py-2 border rounded-sm outline-none dark:bg-gray-900 dark:border-gray-700"
                  type="email"
                  id="email"
                  name="email"
                  value={isSignup.email}
                  placeholder="example@company.com"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password"  className="text-[12px] font-medium">Password</label>
                <span className="flex px-2 border rounded-sm items-center dark:border-gray-700 ">
                  <input
                  className="px-2 py-2 outline-none bg-transparent w-full "
                  type={!show ? "password": "text"}
                  id="password"
                  required
                  name="password"
                  placeholder="password"
                  value={isSignup.password}
                  onChange={handleChange}
                />
                <p onClick={showPassword}>{!show ?  <VscEye  size={22}/> : <VscEyeClosed  size={22}/> }</p>
                </span>

                <label htmlFor="number"  className="text-[12px] font-medium">Mobile number</label>
                <input
                  className="px-2 py-2 border rounded-sm outline-none dark:bg-gray-900 dark:border-gray-700"
                  type="tel"
                  name="mobilenumber"
                  value={isSignup.mobilenumber}
                  onChange={handleChange}
                  placeholder="e.g +91 6260XX XXXX XX"
                />
                <Button
                disabled = {loading}
                text={loading ?"Creating account...": "Create account"} onclick="handlenavigate"/>
              </div>
              <p className="text-sm md:text-[12px] py-4 text-center">
                Already have Account?
                <Link className="text-secondary" to="/login-page">
                  Login
                </Link>
                <span></span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySignupPage;
