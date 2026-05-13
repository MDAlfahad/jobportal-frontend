import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Pages/HeroContaner/Hero";
import JobPage from "../Pages/jobpages/Jobpage";
import UserLoginPage from "../Authpages/Userloginpage/UserLoginPage";
import UserSignupPage from "../Authpages/Userloginpage/UserSignupPage";
import CompanySignupPage from "../Authpages/Companysignuppage/CompanySignupPage";
import StudentDashboard from "../Pages/studentDashboard/StudentDashboard";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import CompanyDashboard from "../Pages/companyDashbashboard/CompanyDashboard";
import JobPostPage from "../Pages/companyDashbashboard/Sidebarmenu/JobPostPage";
import Dashboard from "../Pages/companyDashbashboard/DashboardPages/Dashboard";
import ScrollTopTop from "../ScrollToTop";
import JobPageRoute from "../Pages/jobpages/JobpageDetals/JobPageRoute";
import ProtectedRoute from "../../protectetroutes/ProtectedRoute";
import NotFound404 from "../404NotFound/NotFound404";
import ContactPage from "../Pages/ContactPage/ContactPage";
import { useEffect, useRef, useState } from "react";
import useThemeStore from "../../Store/lightDarkmode";
import TopBar from "../Components/Adsbars/TopBar";
import useAnimate from "../../Store/animation";

const MainRoute = () => {
  useEffect(() => {
  const { theme, setTheme } = useThemeStore.getState();

  setTheme(theme);
}, []);

  const [show, setShow] = useState(false);

  const handleshow = () => {
    setTimeout(() => {
      setShow(!show);
    }, 2000);
  };

  return (
    <Router>
      <ScrollTopTop />

      <Navbar />
      <div className={`${show ? "hidden " : "fixed bottom-5 right-2 z-50"} `}>
        <TopBar onClick={handleshow} />
      </div>
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<Hero />} />
        <Route path="/job-page" element={<JobPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login-page" element={<UserLoginPage />} />
        <Route path="/user-signup" element={<UserSignupPage />} />
        <Route path="/company-signup" element={<CompanySignupPage />} />
        <Route path="/job-page-route/:id" element={<JobPageRoute />} />
        {/* ---  Student Dashboard Protection --*/}
        {/* Fixed: wrapped "user" in an array to match ProtectedRoute logic */}
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/student-Dashboard" element={<StudentDashboard />} />
        </Route>

        {/* --- Admin Dashboard Protection --- */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        {/* --- Company Dashboard Protection --- */}
        <Route element={<ProtectedRoute allowedRoles={["company"]} />}>
          {/* Moved /Dashboard-Company inside here! 
            Previously it was public, now it's protected.
          */}

          <Route path="/Dashboard-Company" element={<Dashboard />} />
          <Route path="/handlenavigate" element={<CompanyDashboard />} />
          <Route path="/job-post-page" element={<JobPostPage />} />
        </Route>

        {/* Catch-all for 404 (Optional but recommended) */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
