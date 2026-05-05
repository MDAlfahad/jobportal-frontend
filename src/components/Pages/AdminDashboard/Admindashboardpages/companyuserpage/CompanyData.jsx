import { UserRound, X } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "../../../../Components/buttons/ButtonComponents";
import userDetaiilStore from "../../../../../Store/userDetailsStore";

const CompanyData = () => {
  const [open, setOpen] = useState(false);
  const { companies, fetchCompanies } = userDetaiilStore();

  const [statusMap, setStatusMap] = useState({});
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    setCompanyList(companies);
  }, [companies]);

  // Toggle active / deactive
  const toggleStatus = (id) => {
    setStatusMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Delete UI only
  const deleteCompany = (id) => {
    const updated = companyList.filter((item) => item.user_id !== id);
    setCompanyList(updated);
  };

  return (
    <>
      <div className="mt-16 px-6 py-4 relative w-full h-[90vh]">
        {/* Popup */}
        {open && (
          <div className="p-8 border shadow-lg rounded-xl absolute bg-white top-10 left-[25%] z-50">
            <div className="flex gap-6 items-center justify-between">
              <h1 className="text-xl md:text-2xl lg:text-4xl text-secondary font-bold">
                Create Company Account
              </h1>

              <X
                strokeWidth={2.25}
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <form className="flex flex-col gap-2 w-full mt-4">
              <label>Company Name</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="text"
              />

              <label>Company Email</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="email"
              />

              <label>Set Password</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="password"
              />

              <label>Contact Number</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="tel"
              />

              <label>Address</label>
              <input
                className="px-2 py-2 border rounded-md bg-gray-100 outline-none"
                type="text"
              />

              <Button text="Create" />
            </form>
          </div>
        )}

        {/* Table */}
        <div className="overflow-y-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl text-textcolor font-medium py-6">
              Companies
            </h1>

            <h1
              onClick={() => setOpen(true)}
              className="flex gap-1 font-semibold px-3 py-2 bg-secondary rounded-md text-white cursor-pointer"
            >
              <UserRound strokeWidth={2.5} />
              Add+
            </h1>
          </div>

          <div className="w-full border rounded-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr >
                  <th className="py-2 text-sm font-medium">Name</th>
                  <th className="py-2 text-sm font-medium">Email</th>
                  <th className="py-2 text-sm font-medium">Created at</th>
                  <th className="py-2 text-sm font-medium">Status</th>
                  <th className="py-2 text-sm font-medium">Action</th>
                </tr>
              </thead>

              <tbody>
                {companyList.map((company) => {
                  const isActive =
                    statusMap[company.user_id] === undefined
                      ? true
                      : statusMap[company.user_id];

                  return (
                    <tr
                      key={company.user_id}
                      className="text-center text-sm"
                    >
                      <td className="py-2 text-left pl-5">
                        {company.user_name}
                      </td>

                      <td className="py-2">{company.user_email}</td>

                      <td className="py-2">
                        {new Date(
                          company.created_at
                        ).toLocaleDateString()}
                      </td>

                      {/* Status Button */}
                      <td >
                        <button
                          onClick={() =>
                            toggleStatus(company.user_id)
                          }
                          className={`border rounded-md px-3 py-1  cursor-pointer font-semibold ${
                            isActive
                              ? "text-green-600 border-green-600"
                            : "text-red-600 border-red-600"
                          }`}
                        >
                          {isActive ? "Active" : "Deactive"}
                        </button>
                      </td>

                      <td className="py-2 px-2">
                        <button
                          onClick={() =>
                            deleteCompany(company.user_id)
                          }
                          className="px-3 py-1 rounded-md text-white font-semibold bg-secondary w-full"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyData;