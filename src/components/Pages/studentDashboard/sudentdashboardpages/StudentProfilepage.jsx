    import { ConciergeBell, SquarePen, X } from "lucide-react";
    import Logo from "../../../images/image.webp";
    import Button from "../../../Components/buttons/ButtonComponents";
    import { useState } from "react";
    import axios from "axios";
    import { useEffect } from "react";
    import useAuthStore from "../../../../Store/userAuth";
    import Dummy from "../../../images/dummyimage.png";
    const StudentProfilePage = () => {
      // const API_CALL = `http://localhost:4000`;
      const API = import.meta.env.VITE_API_URL;

      const [EditShow, EditSetShow] = useState(false);
      const [editbio, seteditbio] = useState(false);
      const { user, loading, setLoading } = useAuthStore();
      const [showData, setShowData] = useState([]);
      const [image, setImage] = useState(null);

      const [isData, setIsData] = useState({
        name: "",
        contact: "",
        address: "",
      });

      const [preview, setPreview] = useState(null);

      // show and uplaod image  
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
        }
      };

      const handleChange = (e) => {
        setIsData({
          ...isData,
          [e.target.name]: e.target.value,
        });
      };
      const handlEvent = async (e) => {
        e.preventDefault();

        try {
          const res = await axios.post(`${API}/api/user-details`, isData);
        } catch (err) {
          console.log(err);
        }
      };
      
      const handleUpload = async () => {
        if (!image) return alert("Select Image ");

        const formData = new FormData();
        formData.append("image", image);
        formData.append("userId", user?.user_id);

        try {
          setLoading(true);
          const res = await axios.post(`${API}/api/upload_photo`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if (res.data.success) {
            const { token, setAuth } = useAuthStore.getState();
            const updateUser = {
              ...user,
              user_image: res.data.file,
            };
            setAuth(updateUser, useAuthStore.getState().token);
          }

          alert("Photo Uploaded Successfully");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      return (
        <>
          <div className=" mt-10 md:mt-20 md:mx-10 relative">
            {/* edit profile card  */}
            {EditShow && (
              <div className="flex w-96 flex-col gap-4 absolute border p-4 rounded-xl bg-white top-32 right-1/3 shadow-xl  dark:bg-gray-900  dark:text-white">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Edit Profile</h1>
                  <span
                    className="cursor-pointer"
                    onClick={() => EditSetShow(false)}
                  >
                    <X strokeWidth={1.5} />
                  </span>
                </div>
                <form
                  action="submit"
                  onSubmit={handlEvent}
                  className="flex flex-col gap-2 dark:text-textcolor  "
                >
                  <input
                    className="px-2 py-2 border rounded-md outline-none"
                    type="text"
                    name="name"
                    value={isData.name}
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  {/* sidabled the emai upadation  */}
                  {/* <input
                    className="px-2 py-2 border rounded-md"
                    type="text"
                    name="email"
                    value={isData.email}
                    placeholder="Your Email"
                  
                    onChange={handleChange}
                  /> */}
                  <input
                    className="px-2 py-2 border rounded-md outline-none"
                    type="tel"
                    name="contact"
                    value={isData.contact}
                    placeholder="Your Phone number"
                    onChange={handleChange}
                  />
                  <input
                    className="px-2 py-2 border rounded-md outline-none "
                    type="text"
                    name="address"
                    value={isData.address}
                    placeholder="Address"
                    onChange={handleChange}
                  />
                  <Button text="Save profile" />
                </form>
              </div>
            )}

            {/* edit bio  */}

            {editbio && (
              <div className="flex w-96 flex-col gap-4 absolute border p-4 rounded-xl bg-white top-72 right-1/3 shadow-xl  dark:bg-gray-900 dark:text-white ">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Edit Bio</h1>
                  <span
                    className="cursor-pointer"
                    onClick={() => seteditbio(false)}
                  >
                    <X strokeWidth={1.5} className="text-black dark:text-white" />
                  </span>
                </div>
                <form action="submit" className="flex flex-col gap-2">
                  <textarea
                    className="px-2 py-2 border rounded-md outline-none dark:text-textcolor"
                    type="text"
                    placeholder="Your Bio"
                    required
                  />
                  <Button text="Save profile" />
                </form>
              </div>
            )}
            {/* profile  */}
            <h1 className="text-2xl md:text-4xl font-semibold py-10 capitalize">
              Profile <span className="text-secondary "> {user.user_name}</span>
            </h1>
            <div>
              <div className="w-full md:flex p-6 gap-10 bg-white rounded-md md:rounded-xl dark:bg-gray-900 ">
                <div className="flex flex-col items-center justify-center gap-2 ">
                  <div className="w-[200px] h-[200px] md:w-[100px] lg:w-[150px] lg:h-[150px] overflow-hidden bg-gray-200 rounded-lg">
                    <img
                      className="w-full h-full object-contain"
                      src={
                        preview
                          ? preview
                          : user?.user_image
                            ? `${API}/uploads/${user.user_image}`
                            : Dummy
                      }
                      alt="profile"
                    />
                  </div>
                  <div className="lg:flex items-center flex gap-2 py-2">
                    <input
                      type="file"
                      id="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <label
                      className="border border-secondary text-secondary  px-1 py-1 text-[12px] rounded-md "
                      htmlFor="file"
                    >
                      Choose
                    </label>
                    <button
                      onClick={handleUpload}
                      className="bg-secondary text-white px-1 py-1 text-[12px] rounded-md"
                    >
                      {loading ? "Uploading..." : "Upload"}
                    </button>
                  </div>
                </div>
                <div>
                  {/* profile  */}
                  <div className=" flex items-center justify-between ">
                    <h1 className="text-xl font-semibold">Personal Info</h1>

                    <span
                      className="flex items-center text-[12px] gap-2 border rounded-md p-1 cursor-pointer bg-gray-50 dark:border-gray-500 dark:bg-transparent "
                      onClick={() => EditSetShow(!EditShow)}
                    >
                      <SquarePen strokeWidth={1.5} size={18} /> <p>Edit</p>
                    </span>
                  </div>
                  <div className="lg:flex flex-col ">
                    <label className="text-textcolor2" htmlFor="name">
                      Name
                    </label>

                    <input
                      type="text"
                      value={user?.user_name}
                      readOnly
                      className="w-full md:w-60 border dark:boder-gray-500 bg-transparent px-2 py-1 rounded-sm dark:border-gray-500 outline-secondary"
                    />

                    <label className="text-textcolor2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="text"
                      value={user?.user_email}
                      readOnly
                      className="w-full md:w-60 border dark:boder-gray-500 bg-transparent px-2 py-1 rounded-sm dark:border-gray-500 outline-secondary"
                    />

                    <label className="text-textcolor2" htmlFor="phone">
                      Phone
                    </label>

                    <input
                      type="text"
                      value={user?.user_contact}
                      readOnly
                      className="w-full md:w-60 border dark:boder-gray-500 bg-transparent px-2 py-1 rounded-sm dark:border-gray-500 outline-secondary"
                    />

                    <label className="text-textcolor2" htmlFor="address">
                      Address
                    </label>
                    <input
                      type="text"
                      value={user?.user_address}
                      readOnly
                      className="w-full md:w-60 border dark:boder-gray-500 bg-transparent px-2 py-1 rounded-sm dark:border-gray-500 outline-secondary"
                    />
                  </div>
                </div>
              </div>

              <div className="border rounded-xl py-4 px-4 md:p-12 my-6 bg-white dark:bg-gray-900 dark:border-none">
                <div className="flex justify-between">
                  <h1 className="text-lg font-semibold">Bio</h1>
                  <span
                    className="flex items-center gap-2 border rounded-md bg-gray-50 dark:bg-transparent  p-1 cursor-pointer"
                    onClick={() => seteditbio(!editbio)}
                  >
                    <SquarePen strokeWidth={1.5} size={16} />
                    <p>Edit bio</p>
                  </span>
                </div>
                <p className="my-2  text-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
                  quaerat fugiat, ipsum, dolores placeat eligendi deserunt
                  asperiores cumque ex nostrum non earum. Voluptatibus error cum
                  blanditiis veniam maxime debitis officiis.
                </p>
              </div>
            </div>
          </div>
        </>
      );
    };

    export default StudentProfilePage;
