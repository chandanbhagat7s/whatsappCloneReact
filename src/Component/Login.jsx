import { Button, Checkbox, Input } from "@mui/material";

export default function Login() {
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
              Username
            </label>
            <Input id="username" placeholder="Username" className="w-full" />
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
              type="password"
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Checkbox id="remember-me" />
              <label className="ml-2 text-sm text-black" htmlFor="remember-me">
                Show Password
              </label>
            </div>
          </div>
          <button className="px-2 py-3 text-sm rounded w-full bg-black hover:bg-gray-900 uppercase text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
