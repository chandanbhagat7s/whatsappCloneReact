import { Button, Checkbox, Input } from "@mui/material";

export default function Signin() {
  return (
    <div
      className="min-h-screen w-[100vw]  m-auto bg-sky-100  md:p-4 flex justify-center items-center"
      style={{ marginTop: "-8vh" }}
    >
      <div className="w-full max-w-md rounded-lg bg-sky-200 p-12">
        <div className="flex items-center mb-8">
          <h1 className="m-auto text-2xl font-bold text-black">
            Sign in to Application
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
