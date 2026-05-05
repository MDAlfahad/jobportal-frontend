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
            <thead className="bg-gray-200 ">
              <tr>
                <th className="py-2 text-textcolor font-medium">Email</th>
                <th className="py-2 text-textcolor font-medium">
                  Company name
                </th>
                <th className="py-2 text-textcolor font-medium">
                  Student Name
                </th>
                <th className="py-2 text-textcolor font-medium">
                  Apllication <br /> Status
                </th>
                <th className="py-2 font-medium text-textcolor">
                  Review <br /> applicaiton
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr className="text-center w-full text-sm text-textcolor">
                  <td className="py-2">myself</td>
                  <td className="py-2">Fronetend developer</td>
                  <td className="py-2">20/12/2024</td>
                  <td className="py-2">
                    <p className="border rounded-md py-2 flex items-center justify-center font-semibold">
                      pending
                    </p>
                  </td>
                  <td className="py-2">
                    <p className="border rounded-md py-2 flex items-center justify-center font-semibold bg-secondary text-white">
                      review
                    </p>
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
