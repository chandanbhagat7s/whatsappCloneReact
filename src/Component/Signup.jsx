import { Button, Checkbox, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { error, success, warning } from "../Redux/slices/ErrorSlice";
import axios from "axios";
import { signupForm } from "../Redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const nevigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
    mobile: "",
    bio: "",
    age: "",
  });
  const [seen, setSeen] = useState(false);
  const dispatch = useDispatch((state) => state.error);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }
  function handleShowChange() {
    setSeen(seen ? false : true);
  }
  async function handleSubmit() {
    console.log(inputData);
    if (
      !inputData.email ||
      !inputData.password ||
      !inputData.cnfPassword ||
      !inputData.mobile ||
      !inputData.bio ||
      !inputData.age ||
      !inputData.name
    ) {
      dispatch(warning({ message: "please Fill all the fileds" }));
      return;
    }
    if (inputData.password != inputData.cnfPassword) {
      dispatch(
        warning({
          message: "please enter password and confirm password correctly",
        })
      );
      return;
    }

    const response = await dispatch(signupForm({ ...inputData }));
    console.log(response);
    if (response.payload?.data?.status) {
      dispatch(success({ message: "Your are Logged in Successfully" }));
      nevigate("/chat");
    } else {
      dispatch(
        error({ message: response.payload.data.msg || "something went wrong" })
      );
    }
    return;
  }
  return (
    <div
      className="min-h-screen w-[99vw]  m-auto bg-sky-100  flex justify-center items-center pb-44 pt-12 lg:pt-12 lg:pb-44"
      style={{ marginTop: "-8vh" }}
    >
      <div className="w-full lg:w-2/3 rounded-lg bg-sky-200 p-12">
        <div className="flex items-center mb-8">
          <h1 className="m-auto text-2xl font-bold text-black">
            Sign in to Application
          </h1>
        </div>

        <form className="">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div className="mb-4 w-100">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                className="w-full"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                placeholder="email@xyz.com"
                className="w-full"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="mobile"
              >
                Mobile
              </label>
              <Input
                id="mobile"
                name="mobile"
                placeholder="XXXXXXXXX"
                className="w-full"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-100">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <Input
                id="age"
                name="age"
                placeholder="21"
                className="w-full"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-100 col-span-2">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="mobile"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                placeholder="XXXXXXXXX"
                className="w-full bg-transparent border-1 border-black border p-2 rounded "
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                id="password"
                placeholder="password"
                name="password"
                type={seen ? "text" : "password"}
                className="w-full"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4  lg:w-full w-1/2">
              <label
                className="block text-xl font-medium text-blue-900 font-bold mb-2"
                htmlFor="rpassword"
              >
                Retype Password
              </label>
              <Input
                id="rpassword"
                placeholder="Retype Password"
                type={seen ? "text" : "password"}
                className="w-full"
                onChange={handleChange}
                name="cnfPassword"
              />
              <div className="flex items-center justify-between mb-6 ">
                <div className="flex items-center">
                  <Checkbox id="remember-me" />
                  <label
                    className="ml-2 text-sm text-black"
                    htmlFor="remember-me"
                    onClick={handleShowChange}
                  >
                    Show Password
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <button
                type="button"
                className="px-2 py-3 text-sm rounded w-full bg-black hover:bg-gray-900 uppercase text-white"
                onClick={handleSubmit}
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
