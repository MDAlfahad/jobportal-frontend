import { useState } from "react";
import Adminsidebar from "./Admindashboardpages/AdminSidebar";
import Profile from "./Admindashboardpages/AdminPorfilepage";
import User from "./Admindashboardpages/UserPage"
import CompanyUser from "./Admindashboardpages/CompayUserpage";
import JobPostedFromDetails from "./Admindashboardpages/JobPostedFormDetails";
import FromDeatails from "./Admindashboardpages/FormsDetails"


const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("profile");

  const pages = {
    profile: <Profile />,
    application: <User />,
    CompanyUser: <CompanyUser />,
    form : <FromDeatails/>,
    jobposted:<JobPostedFromDetails/>
  };

  return (
    <div className="w-full max-w-[1800px] m-auto md:h-[100vh] flex noselect dark:bg-black dark:text-white">
      <Adminsidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="flex-1 ">{pages[activePage]}</div>
    </div>
  );
};
export default AdminDashboard;
