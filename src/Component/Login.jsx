import { Button, Checkbox, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { error, success, warning } from "../Redux/slices/ErrorSlice";
import { loginForm } from "../Redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nevigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [seen, setSeen] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }
  function handleShowChange() {
    setSeen(seen ? false : true);
  }
  async function handleSubmit() {
    if (!inputData.email || !inputData.password) {
      dispatch(warning({ message: "please enter email and password" }));
      return;
    }
    const response = await dispatch(loginForm(inputData));

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

  // useEffect(() => {}, [inputData]);

  return (
    <div
      className="min-h-screen w-[100vw]  m-auto bg-sky-100  md:p-4 flex justify-center items-center"
      style={{ marginTop: "-8vh" }}
    >
      <div className="w-full max-w-md rounded-lg bg-sky-200 p-12">
        <div className="flex items-center mb-8">
          <h1 className="m-auto text-2xl font-bold text-black">
            Login to Application
          </h1>
        </div>

        <form>
          <div className="mb-4 w-full">
            <label
              className="block text-xl font-medium text-blue-900 font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <Input
              id="username"
              placeholder="abc@gmail.com"
              name="email"
              className="w-full"
              onChange={handleChange}
            />
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
              placeholder="Password"
              type={seen ? "text" : "password"}
              name="password"
              className="w-full"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Checkbox id="remember-me" onClick={handleShowChange} />
              <label className="ml-2 text-sm text-black" htmlFor="remember-me">
                Show Password
              </label>
            </div>
          </div>
          {/* <button
            className="px-2 py-3 text-sm rounded w-full bg-black hover:bg-gray-900 uppercase text-white"
            onClick={handleSubmit}
          >
            Log in
          </button> */}
          <input
            type="button"
            value="Login"
            className="bg-black text-white border-1 border-black hover:bg-blue-900 px-2 py-3 text-sm rounded w-full"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
