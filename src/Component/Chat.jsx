import { Avatar, Button, Input } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { CiVideoOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineScheduleSend } from "react-icons/md";

export default function Chat() {
  return (
    <div
      className="min-h-screen w-[100vw]  m-auto bg-gray-100  md:p-2 flex justify-center items-start"
      // style={{ marginTop: "-8vh" }}
    >
      <div className="bg-white rounded-lg h-[85vh] shadow-lg overflow-hidden flex w-full max-w-6xl">
        <div className="hidden lg:block w-4/12 bg-blue-400 p-4 overflow-y-auto">
          <div className="flex items-center px-4 mb-5">
            <Input
              className="flex-1 px-4 py-2 rounded-full bg-blue-200 text-blue-700 border-0"
              placeholder="Search"
            />
            <CiSearch className="text-2xl text-white font-extrabold ml-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center px-4 py-2 hover:bg-blue-300 hover:text-blue-800 rounded cursor-pointer">
              <Avatar>
                <CgProfile />
              </Avatar>
              <div className="ml-4">
                <div className="font-semibold">Katya Nikolaenko</div>
                <div className="text-sm text-gray-600">
                  Ah, I see, I'm coming!
                </div>
              </div>
              <div className="ml-auto text-sm text-gray-600">09:38</div>
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-blue-300 hover:text-blue-800 rounded cursor-pointer">
              <Avatar>
                <CgProfile />
              </Avatar>
              <div className="ml-4">
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-gray-600">Hey there!</div>
              </div>
              <div className="ml-auto text-sm text-gray-600">10:15</div>
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-blue-300 hover:text-blue-800 rounded cursor-pointer">
              <Avatar>
                <CgProfile />
              </Avatar>
              <div className="ml-4">
                <div className="font-semibold">Alice Smith</div>
                <div className="text-sm text-gray-600">
                  Ready for the meeting?
                </div>
              </div>
              <div className="ml-auto text-sm text-gray-600">11:45</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 flex flex-col bg-blue-200 text-white">
          <div className="flex items-center justify-between mb-4 bg-black p-2 text-white rounded">
            <div className="flex items-center">
              <Avatar>
                <CgProfile />
              </Avatar>
              <div className="ml-4 font-semibold">Katya Nikolaenko</div>
            </div>
            <div className="flex items-center">
              <CiPhone className="w-6 h-6 text-white mx-2 cursor-pointer hover:scale-110 hover:font-extrabold" />
              <CiVideoOn className="w-6 h-6 text-white mx-2 cursor-pointer hover:scale-110 hover:font-extrabold" />
              <CgProfile className="w-6 h-6 text-white mx-2 cursor-pointer hover:scale-110 hover:font-extrabold" />
            </div>
          </div>
          <div
            className="flex-1 overflow-y-auto px-4 py-2"
            // style={{
            //   boxShadow:
            //     "inset 0px 11px 8px -10px #CCC, inset 0px -11px 8px -10px #CCC",
            // }}
          >
            <div className="flex items-end mb-4">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Hello! How are you?
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Les meet at 5pm?
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Sure, see you then!
                  </span>
                </div>

                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Sure, see you then!
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Sure, see you then!
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Sure, see you then!
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Sounds good!
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black text-white ">
                    Looking forward to it!
                  </span>
                </div>
              </div>
              <Avatar>
                <CgProfile />
              </Avatar>
            </div>
            <div className="flex items-start mb-4">
              <Avatar>
                <CgProfile />
              </Avatar>
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 ">
                    Hi there!
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 ">
                    Are we still meeting today?
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 ">
                    Yes, let meet at 5pm as planned.
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 ">
                    Great, see you then!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center px-4 rounded mt-2 py-1 bg-blue-300">
            <button className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110">
              <IoDocumentAttachOutline className="" />
            </button>

            <Input
              className="flex-1 px-2 py-1 mx-1 rounded-full bg-gray-200 shadow-lg hover:bg-gray-200 "
              placeholder="Message Hii"
            />
            <button className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110">
              <FiSend />
            </button>
            <button className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110">
              <MdOutlineScheduleSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
