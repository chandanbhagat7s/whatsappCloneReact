import { Button, Checkbox, Input } from "@mui/material";

export default function Pages() {
  return (
    <div
      className="min-h-screen w-[100vw]  m-auto bg-sky-100  md:p-4 flex justify-center items-center"
      style={{ marginTop: "-8vh" }}
    >
      <div className="w-full max-w-md rounded-lg bg-sky-200 p-12">
        <div className="flex items-center mb-8">
          <h1 className="m-auto text-2xl font-bold text-black">CREATE PAGE</h1>
        </div>

        <form className="">
          <div className="mb-4 w-full ">
            <label
              className="block text-xl font-medium text-blue-900 font-bold mb-2"
              htmlFor="username"
            >
              Title
            </label>
            <Input id="username" placeholder="Username" className="w-full" />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-blue-900 font-bold mb-2"
              htmlFor="password"
            >
              Description
            </label>
            <Input
              id="password"
              placeholder="Password"
              type="text"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-blue-900 font-bold mb-2 "
              htmlFor="password"
            >
              Media file
            </label>
            <Input
              id="password"
              placeholder="Password"
              type="file"
              className="w-full"
            />
          </div>
          <div className=" py-1 text-blue-400 mt-0 mb-2 text-center">
            <p>if you do not upload media it will be uploaded as only text</p>
          </div>

          <button className="px-2 py-3 text-sm rounded w-full bg-black hover:bg-gray-900  text-white">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
