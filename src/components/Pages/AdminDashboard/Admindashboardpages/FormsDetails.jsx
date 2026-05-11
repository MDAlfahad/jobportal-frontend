import { useEffect, useState } from "react";
import useCompanyApplications from "../../../../Store/companyApplicationStore";

const FormsDetails = () => {
  const { applications, fetchCompanyApplications } = useCompanyApplications();

  useEffect(() => {
    fetchCompanyApplications();
  }, []);

  return (
    <>
      <div className="mt-20 overflow-y-auto px-4">
        <div className="">
          <h1 className="text-xl md:text-3xl font-semibold py-6">
            Total Forms
          </h1>
        </div>
        <div className="w-full border rounded-md overflow-hidden ">
          <table className="w-full text-sm">
            <thead className="bg-gray-200 dark:bg-gray-900 dark:text-white">
              <tr>
                <th className="py-2 font-medium">Email</th>
                <th className="py-2 font-medium">
                  Company name
                </th>
                <th className="py-2 font-medium">
                  Student Name
                </th>
                <th className="py-2 font-medium">
                  Apllication <br /> Status
                </th>
                <th className="py-2 font-medium">
                  Review <br /> applicaiton
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="text-center w-full bg-white border-b text-textcolor"
                >
                  <td className="py-2 line-clamp-1 lg:line-clamp-none">{item.uuser_email}</td>
                  <td className="py-2">{item.job_desigination}</td>
                  <td className="py-2 line-clamp-1 lg:line-clamp-none">{item.job_location}</td>
                  <td className="py-2">
                    {item.applied_at
                      ? new Date(item.applied_at).toLocaleDateString()
                      : "N/A"}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormsDetails;
