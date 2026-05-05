import { useState } from "react";
import StudentSideBar from "./StudentSideBar";
import Profile from "./sudentdashboardpages/StudentProfilepage";
import Form from "./sudentdashboardpages/StudentForms";
import SavedForm from "./sudentdashboardpages/SavedFrom";
const StudentDashboard = () => {
  const [activePage, setActivePage] = useState("profile");

  const pages = {
    profile: <Profile />,
    application: <Form />,
    savedform: <SavedForm />,
  };

  return (
    <div className="w-full max-w-[1800px] m-auto md:h-[100vh] flex noselect text-[14px] dark:bg-black dark:text-white">
      <StudentSideBar setActivePage={setActivePage} activePage={activePage} />
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto dark:bg-black">{pages[activePage]}</div>
    </div>
  );
};

export default StudentDashboard;
