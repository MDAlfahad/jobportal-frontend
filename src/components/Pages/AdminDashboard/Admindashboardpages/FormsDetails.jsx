import { useEffect } from "react";
import useCompanyApplications from "../../../../Store/companyApplicationStore";
import axios from "axios";

const FormsDetails = () => {
  const API = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(`${API}/api/application/1`);

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-20 px-4">
      {/* Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold py-6 dark:text-white">
          Total Forms
        </h1>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto  rounded-xl shadow-sm">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="bg-gray-200 dark:bg-gray-900 dark:border-b dark:border-secondary dark:text-white">
            <tr>
              <th className="py-3 px-4 font-medium text-left">Email</th>

              <th className="py-3 px-4 font-medium text-left">Company Name</th>

              <th className="py-3 px-4 font-medium text-left">Student Name</th>

              <th className="py-3 px-4 font-medium text-left">Applied Date</th>
            </tr>
          </thead>

          <tbody>
            {/* {applications?.length > 0 ? (
              applications.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-3 px-4">
                    {item.user_email}
                  </td>

                  <td className="py-3 px-4">
                    {item.job_desigination}
                  </td>

                  <td className="py-3 px-4">
                    {item.job_location}
                  </td>

                  <td className="py-3 px-4">
                    {item.applied_at
                      ? new Date(
                          item.applied_at
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No applications found
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormsDetails;
