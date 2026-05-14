import { UserRoundPen } from "lucide-react";
import AdminProfileCard from "./adminprofilepagecard/AdminPorfilecard";
import useAuthStore from "../../../../Store/userAuth";
import useJobStore from "../../../../Store/jobStore";
import { useEffect } from "react";
import useAdminStore from "../../../../Store/adminStore";
import useApplication from "../../../../Store/applicationcountStore";
import AdminPage from "../../../images/admin-page.png";

const AdminProfilePage = () => {
  const { user, token } = useAuthStore();
  const { jobs, fetchJobs } = useJobStore();
  const { adminStats, fetchAdminStats } = useAdminStore();
  const { application, fetchapplicaiton } = useApplication();

  useEffect(() => {
    if (token && user?.auth_role) {
      fetchJobs(token, user.auth_role);
    }
    fetchAdminStats();
    fetchapplicaiton();
  }, [token, user?.auth_role, fetchJobs, fetchAdminStats, fetchapplicaiton]);
  const date = new Date();
  const day = new Date().toLocaleString("en-US", {
    weekday: "long",
  });

  return (
    <>
      <div className="bg-gray-100 w-full min-h-[100vh] overflow-y-auto px-4 md:px-6 py-4 md:py-6 dark:bg-black text-white">
        <div className="mt-16 md:mt-10 px-2 md:px-6 py-4 rounded-xl">
          <div className="my-4 border px-4 md:px-6 py-4 md:py-6 bg-green-200 rounded-xl shadow-lg dark:bg-gray-900 dark:border-none ">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20 px-2 mt-4">
              <div className="flex flex-col gap-4">
                <div className="text-textcolor dark:text-white flex items-center gap-2">
                  <h1 className="text-xl font-semibold">{day}</h1>{" "}
                  <p>{date.toLocaleDateString()}</p>{" "}
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-green-500 dark:text-white">
                    Hey, {user?.user_name}
                  </h1>
                </div>
                <div className="flex items-center text-center gap-6 px-2 py-2 rounded-md">
                  <div>
                    <p className="text-sm md:text-md text-textcolor dark:text-white">
                      Name
                    </p>
                    <p className="text-base md:text-[14px] font-medium p-1 dark:text-white break-words text-textcolor">
                      {user?.user_name || "Loading...."}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm md:text-md text-textcolor dark:text-white">
                      Email
                    </p>
                    <p className="text-base md:text-[14px] font-medium p-1 break-words text-textcolor dark:text-white">
                      {user?.user_email || "Loading...."}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm md:text-md text-textcolor dark:text-white">
                      Access
                    </p>
                    <p className="text-base md:text-[14px] font-medium p-1 break-words text-textcolor dark:text-white">
                      {user?.auth_role || "Loading...."}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <img src={AdminPage} alt="" width={200} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <AdminProfileCard
              heading="Total user"
              number={adminStats.user || 0}
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
        </div>
      </div>
    </>
  );
};

export default AdminProfilePage;
