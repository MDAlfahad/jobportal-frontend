import { UserRoundPen } from "lucide-react";
import AdminProfileCard from "./adminprofilepagecard/AdminPorfilecard";
import useAuthStore from "../../../../Store/userAuth";
import useJobStore from "../../../../Store/jobStore";
import { useEffect } from "react";
import useAdminStore from "../../../../Store/adminStore";
import useApplication from "../../../../Store/applicationcountStore";

const AdminProfilePage = () => {
  const { user, token } = useAuthStore();
  const { jobs, fetchJobs } = useJobStore();
  const { adminStats, fetchAdminStats,  } = useAdminStore();
  const{application, fetchapplicaiton}= useApplication();



  useEffect(() => {
    if (token && user?.auth_role) {
      fetchJobs(token, user.auth_role);
    }
    fetchAdminStats();
    fetchapplicaiton();
  }, [token, user?.auth_role, fetchJobs, fetchAdminStats, fetchapplicaiton]);


  return (
    <>

      <div className="bg-gray-100 w-full min-h-[100vh] overflow-y-auto px-4 md:px-6 py-4 md:py-6 dark:bg-black text-white">
        
        <div className="mt-16 md:mt-20 px-2 md:px-6 py-4 rounded-xl">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <AdminProfileCard
              heading="Total user"
              number={adminStats.user  || 0}
              text="Total Active user"
            />

            <AdminProfileCard
              heading="Total Companies"
              number={adminStats.company || "0"}
              text="Total Active Companies"
            />

            <AdminProfileCard
              heading="Total forms"
              number={application?.applicationCount || 0}
              text="Total forms"
            />

            <AdminProfileCard
              heading="Total Job posted"
              number={jobs?.length > 0 ? jobs.length : "0"}
              text="Total posted job"
            />
          </div>

         
          <div className="my-4 border px-4 md:px-6 py-4 md:py-6 bg-white rounded-xl shadow-lg dark:bg-gray-900 dark:border-none">
        
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-1">
              <h1 className="text-lg sm:text-xl md:text-3xl font-medium">Profile</h1>

              {/* <span className="flex items-center gap-2 border px-2 py-1 rounded-lg cursor-pointer">
                <UserRoundPen strokeWidth={1.5} />
                <p>Edit</p>
              </span> */}
            </div>

          
            <div className="flex flex-col md:flex-row gap-4 md:gap-20 px-2 mt-4">
              
              <div>
                <p className="text-sm md:text-md text-textcolor2">Name</p>
                <p className="text-base md:text-[14px] font-medium p-1 break-words">
                  {user?.user_name || "Loading...."}
                </p>
              </div>

              <div>
                <p className="text-sm md:text-md text-textcolor2">Email</p>
                <p className="text-base md:text-[14px] font-medium p-1 break-words">
                  {user?.user_email || "Loading...."}
                </p>
              </div>

              <div>
                <p className="text-sm md:text-md text-textcolor2">Admin</p>
                <p className="text-base md:text-[14px] font-medium p-1 break-words">
                  {user?.auth_role || "Loading...."}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminProfilePage;