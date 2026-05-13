import { useEffect, useState } from "react";
import useAuthStore from "../../../../Store/userAuth";
import axios from "axios";
import Button from "../../../Components/buttons/ButtonComponents";

const CompanyFrom = () => {
  const API = import.meta.env.VITE_API_URL;
  const { user } = useAuthStore();

  const [image, setImage] = useState(null);

  const [data, setdata] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  });

  useEffect(() => {
    if (user) {
      setdata({
        name: user?.user_name || "",
        email: user?.user_email || "",
        address: user?.user_address || "",
        number: user?.user_phone || "",
      });
    }
  }, [user]);

  const handletext = (e) => {
    setdata({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handlesubmit = async () => {
    // if (!image) return alert("Select Company Logo");

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("number", data.number);
    formData.append("userId", user?.user_id);

    try {
      await axios.post(`${API}/api/companyDetails`, formData);
      alert("Update Successfully");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="w-full max-w-[700px] mx-auto rounded-sm border bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white overflow-hidden">
        
        <div className="px-6 py-8 dark:border-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Personal Details
          </h1>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            Update your company profile information
          </p>
        </div>

        
        <div className="flex flex-col gap-5 p-6 text-[14px]">

          
          <div className="flex flex-col gap-2">
            <label className="font-regular text-[14xpx]">
              Full Name
            </label>

            <input
              className="border rounded-sm border-textcolor2 px-2 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
              type="text"
              id="name"
              value={data.name}
              placeholder="Enter full name"
              onChange={handletext}
            />
          </div>

          
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              E-mail
            </label>

            <input
              className="border border-textcolor2 rounded-sm px-2 py-2 outline-none bg-gray-100 dark:bg-gray-800 dark:border-gray-600 cursor-not-allowed"
              type="email"
              id="email"
              readOnly
              value={data.email}
              placeholder="Company email"
            />
          </div>

      
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              Company Address
            </label>

            <input
              className="border border-textcolor2 rounded-sm px-2 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
              type="text"
              id="address"
              placeholder="Enter address"
              onChange={handletext}
              value={data.address}
            />
          </div>

        
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">
              Mobile Number
            </label>

            <input
              className="border border-textcolor2 rounded-sm px-2 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
              type="tel"
              id="number"
              onChange={handletext}
              value={data.number}
              placeholder="Enter contact number"
            />
          </div>

          
          <div className="flex flex-col gap-3">
            <label className="font-medium text-sm">
              Upload Company Logo
            </label>

            <label
              htmlFor="file"
              className="border-2 border-textcolor2  border-dashed rounded-sm p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <span className="text-sm text-textcolor dark:text-gray-400">
                {image ? image.name : "Click to upload image"}
              </span>
            </label>

            <input
              type="file"
              id="file"
              hidden
              onChange={handleImage}
              accept="image/*"
            />
          </div>

          
          <div className="pt-2">
            <Button text="Submit" onClick={handlesubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyFrom;
