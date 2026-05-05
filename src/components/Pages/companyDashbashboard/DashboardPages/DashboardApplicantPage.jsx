import { useEffect, useState } from "react";
import useCompanyApplications from "../../../../Store/companyApplicationStore";
import { CircleDot, ClockFading, ExternalLink, Trash2 } from "lucide-react";
import Button from "../../../Components/buttons/ButtonComponents";
import axios from "axios";
import useAuthStore from "../../../../Store/userAuth";

const DashboardApplicantPage = () => {
  const [changevalue, setchangevalue] = useState(false);
  const { applications, fetchCompanyApplications } = useCompanyApplications();
  const [status, setStatus] = useState({});
  const API_CALL = `http://localhost:4000`;
  const { token, isAuthenticated } = useAuthStore();

  
  const value = () => {
    setchangevalue(!changevalue);
  };
  useEffect(() => {
    fetchCompanyApplications();
  }, []);
  //sending the status value
  const updateStatus = async (id, value) => {
    try {
      await axios.put(
        `${API_CALL}/api/update-status/${id}`,
        { status: value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setStatus({ ...status, [id]: value });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh] capitalize dark:text-white">
        {/* Table start here */}

        <div className=" overflow-y-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold py-6">
              Applicaitons
            </h1>
          </div>
          <div className="w-full border rounded-md text-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-300 w-full dark:text-black">
                <tr>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">Candidate Name</th>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">email</th>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">Designation</th>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">Date</th>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">Resume </th>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">Status </th>
                  <th className="py-4 text-[12px] lg:text-[14px] font-medium ">Action</th>
                </tr>
              </thead>
              {/* table body  */}
              <tbody>
                {applications.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="text-center w-full bg-white border-b text-textcolor"
                  >
                    <td className="py-2 line-clamp-1 lg:line-clamp-none">{item.user_name}</td>
                    <td className="py-2">{item.user_email}</td>
                    <td className="py-2 line-clamp-1 lg:line-clamp-none">{item.job_desigination}</td>
                    <td className="py-2">
                      {item.applied_at
                        ? new Date(item.applied_at).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      <a
                        href={`http://localhost:4000/uploads/${item.resume_path}`}
                        target="_blank"
                        className="flex items-center gap-2 justify-center underline hover:bg-secondary hover:text-white border border-secondary py-0.5 rounded-sm  text-secondary"
                      >
                        Open <ExternalLink size={16} />
                      </a>
                    </td>

                    <td className="py-2">
                      <p
                        className={`border flex items-center gap-2 py-0.5 rounded-sm  justify-center ${item.status == "pending" ? "border-red-500 text-red-500" : "border-green-500 text-green-500"}`}
                      >
                        {item.status === "pending" ? (
                          <ClockFading size={14} />
                        ) : (
                          ""
                        )}
                        {item.status}
                      </p>
                    </td>

                    <td className="py-2 items-center flex justify-center">
                      {!status[item.application_id] && (
                        <span className="flex items-center gap-1">
                          <p
                            onClick={() =>
                              updateStatus(item.application_id, "accepted")
                            }
                            className="border  border-green-500 px-2 py-0.5 rounded-sm  text-green-500 cursor-pointer"
                          >
                            Accept
                          </p>

                          <p
                            onClick={() =>
                              updateStatus(item.application_id, "Rejected")
                            }
                            className="border py-0.5 rounded-sm  border-red-500 px-2  text-red-500 cursor-pointer"
                          >
                            Reject
                          </p>
                        </span>
                      )}

                      {status[item.application_id] === "accepted" && (
                        <p className="border  border-green-500 px-2 py-0.5 rounded-sm  font-semibold text-green-500">
                          Accepted
                        </p>
                      )}

                      {status[item.application_id] === "Rejected" && (
                        <p className="border  border-red-500 px-2 py-0.5 rounded-sm font-semibold text-red-500">
                          Rejected
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApplicantPage;
