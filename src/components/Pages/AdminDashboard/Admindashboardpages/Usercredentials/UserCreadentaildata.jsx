import { Dot, NotebookText } from "lucide-react";
import { useState } from "react";
import userDetaiilStore from "../../../../../Store/userDetailsStore";
import { useEffect } from "react";

const UserCredentialdata = () => {
  const [changevalue, setchangevalue] = useState(true);
  const { users, fetchUsers, loading } = userDetaiilStore();
  useEffect(() => {
    fetchUsers();
  }, []);

  const [statusMap, setStatusMap] = useState({});
  const toggleStatus = (id) => {
    setStatusMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <div className="mt-20 px-2 sm:px-4">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl text-textcolor dark:text-white font-semibold py-4 md:py-6 text-center sm:text-left">
            Applications
          </h1>
        </div>

        <div className="w-full border rounded-md overflow-x-auto dark:border-none">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-200 text-textcolor dark:border-b dark:border-secondary dark:bg-gray-900  dark:text-white">
              <tr>
                <th className="ppy-2  font-semibold text-sm ">
                  Name
                </th>
                <th className="py-2  font-semibold text-sm ">
                  Email
                </th>
                <th className="py-2 font-semibold text-sm ">
                  Created at
                </th>
                <th className="py-2 font-semibold text-sm ">
                  Status
                </th>
                <th className="py-2 font-semibold text-sm ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => {
                const isActive = statusMap[user.user_id] ?? true;
                return (
                  <tr className="text-center dark:bg-gray-900 " key={user.user_id} >
                    <td className="py-2 text-sm  ">{user.user_name}</td>

                    <td className="py-2 text-sm  break-words">
                      {user.user_email}
                    </td>

                    <td className="py-2 text-sm">
                      {new Date(user.created_at).toLocaleDateString()}
                    </td>

                    <td className="py-2">
                      <p
                        className={`border rounded-md cursor-pointer font-medium ${
                          isActive
                            ? "text-green-600 border-green-600"
                            : "text-red-600 border-red-600"
                        }`}
                        onClick={() => toggleStatus(user.user_id)}
                      >
                        {isActive ? "Active" : "Deactive"}
                      </p>
                    </td>

                    <td className="py-2 ">
                      <p className="border rounded-md py-1  px-2 flex items-center justify-center font-semibold bg-secondary text-white text-sm cursor-pointer">
                        Delete
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserCredentialdata;
