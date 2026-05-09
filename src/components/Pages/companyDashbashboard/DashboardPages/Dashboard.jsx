
import { useState } from "react";
import CompanySidebar from "./CompanySidebar";
import Profile from "../DashboardPages/DashboardProfilePage"
import Form from "../DashboardPages/DashboardApplicantPage"
import Dashboardjobpost from "../DashboardPages/Dashboardjobpost";


const Dashboard = () => {

  const [activePage, setActivePage] = useState("profile");

  const pages = {
    profile: <Profile />,
    application: <Form />,
    jobpost: <Dashboardjobpost />
    // savedform: <SavedForm/>
  };

  return (
    <div className="w-full max-w-[1800px] dark:bg-black m-auto flex ">
      <CompanySidebar
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <div className="flex-1 p-4 bg-gray-50 dark:bg-black h-[100vh] overflow-auto ">
        {pages[activePage]}
      </div>

    </div>
  );
};


export default Dashboard;