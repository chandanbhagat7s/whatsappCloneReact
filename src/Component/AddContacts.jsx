/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0mASomo4fWg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button, Input, Link } from "@mui/material";

export default function AddContacts() {
  return (
    <div className="m-auto bg-white rounded-lg   shadow-lg overflow-hidden flex w-full max-w-6xl bg-gray-200">
      <div className="m-auto min-h-screen flex items-center justify-center w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mx-auto">
          <div className="bg-white  rounded p-4">
            <img
              alt="Random Image"
              className="rounded-lg object-cover w-full "
              height={200}
              src="https://atlas-content-cdn.pixelsquid.com/stock-images/chat-icon-computer-8d1vPA9-600.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width={200}
            />
          </div>
          <form className="bg-white text-center rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h1 className="block text-gray-700 text-2xl font-bold mb-2 text-center">
                ADD CONTACTS
              </h1>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <Input
                className="input-field"
                id="username"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                E-mail
              </label>
              <Input
                className="input-field"
                id="password"
                placeholder="abc@gmail.com"
                type="password"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Mobile Number
              </label>
              <Input
                className="input-field"
                id="password"
                placeholder="1234567890"
                type="text"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-center">
              <button className="btn-primary bg-black text-white px-2  rounded py-2  ">
                ADD !
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
