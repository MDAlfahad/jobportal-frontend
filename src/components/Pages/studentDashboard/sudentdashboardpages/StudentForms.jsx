
import { SlNotebook } from "react-icons/sl";
import userJobApplicaiton from "../../../../Store/userJobApplicaiton";
import { useEffect } from "react";

const StudentForms = () => {
  const { applications, fetchMyApplications } = userJobApplicaiton();
  useEffect(() => {
    fetchMyApplications();
  }, []);

  //formatte data

  return (
    <>
      <div className="mt-20 overflow-y-auto  ">
        <div className="">
          <h1 className="text-xl md:text-3xl font-semibold py-6">
            Applicaitons
          </h1>
        </div>
        <div className="w-full  rounded-xl overflow-hidden dark:text-white dark:border-none">
          <table className="w-full">
            <thead className="bg-white dark:bg-gray-900 border border-b-textcolor  dark:border-none ">
              <tr>
                <th className="py-4 font-semibold">Company</th>
                <th className="py-4 font-semibold">Profile</th>
                <th className="py-4 font-semibold">Applied on</th>
                <th className="py-4 font-semibold">
                  Apllication <br /> Status
                </th>
                <th className="py-4 font-semibold">
                  Review <br /> applicaiton
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item) => (
                <tr className="text-center w-full bg-white  dark:bg-gray-900  ">  
                  <td className="py-4">{item.company_name}</td>
                  <td className="py-4">{item.job_desigination}</td>
                  <td className="py-4">{item.applied_at ? new Date(item.applied_at).toLocaleDateString() : "N/A"}</td>
                  <td className="py-4">
                    <p className="border rounded-full py-1">{item.status}</p>
                  </td>
                  <td className="py-4 items-center flex justify-center">
                    <SlNotebook size={22} className="text-blue-400 " />
                  </td>
                </tr>
              ))}
              {}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentForms;
