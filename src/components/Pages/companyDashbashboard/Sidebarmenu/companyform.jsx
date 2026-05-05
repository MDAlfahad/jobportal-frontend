import { useState } from "react";
import useAuthStore from "../../../../Store/userAuth";
import axios from "axios";
import Button from "../../../Components/buttons/ButtonComponents";

const CompanyFrom = () => {
  const { user } = useAuthStore();
  const [image, setImage] = useState(null);
  const [data, setdata] = useState({
    address: "",
    number: "",
  });
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
    if (!image) return alert("select Image");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("address", data.address);
    formData.append("number", data.number);
    formData.append("userId", user?.user_id);

    try {
      const res = await axios.post(
        `http://localhost:4000/api/companyDetails`,
        formData,
      );
      alert("Form Submited");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" w-[700px] rounded-md  text-textcolor flex flex-col items-center dark:bg-gray-900 dark:backdrop-blur dark:text-white">
        <h1 className="text-2xl md:text-4xl font-semibold text-black py-10 dark:text-white">
          Personal Details
        </h1>
        <div className=" gap-2 w-full border dark:border-none flex flex-col text-left p-4 text-sm dark:text-white ">
          <label className="font-medium" htmlFor="company">
            Full name
          </label>
          <input
            className="border rounded-sm px-2 py-2 outline-none text-textcolor  dark:bg-gray-900"
            type="text"
            readOnly
            value={user?.user_name}
            placeholder="Full name"
            required
          />

          <label className="font-medium" htmlFor="email">
            E-mail
          </label>
          <input
            className="border rounded-sm px-2 py-2 outline-none  text-textcolor2 dark:bg-gray-900"
            type="email"
            readOnly
            placeholder="Company email"
            value={user?.user_email}
            required
          />

          <label className="font-medium" htmlFor="Address">
            Company address
          </label>
          <input
            className="border rounded-sm px-2 py-2 outline-none  text-textcolor2 dark:bg-gray-900"
            type="text"
            id="address"
            placeholder="Address"
            onChange={handletext}
            value={data.address}
            required
          />

          <label className="font-medium" htmlFor="phone">
            Mobile Number
          </label>
          <input
            className="border rounded-sm px-2 py-2 outline-none  text-textcolor2 dark:bg-gray-900"
            type="tel"
            id="number"
            onChange={handletext}
            value={data.number}
            placeholder="Contact number"
          />
          <div className="py-4 ">
            <label
              htmlFor="file"
              className=" font-medium items-center gap-2 border-dashed border-2 border-secondary  justify-center px-2 py-2 bg-lightblue text-textcolor cursor-pointer"
            >
              Upload Company Logo
            </label>
            <input
              type="file"
              id="file"
              hidden
              onChange={handleImage}
              accept="image/*"
            />
          </div>
          <div>
            <Button text="Submit" onClick={handlesubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyFrom;
