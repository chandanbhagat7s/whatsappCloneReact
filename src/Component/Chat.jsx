import { Avatar, Button, Input } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { CiVideoOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineScheduleSend } from "react-icons/md";
import ChatList from "./ChatList";
import Chatting from "./Chatting";
import { useSelector } from "react-redux";

export default function Chat() {
  const open = useSelector((state) => state.friends.open);

  return (
    <div
      className="min-h-screen w-[100vw]  m-auto bg-gray-100  md:p-2 flex justify-center items-start"
      // style={{ marginTop: "-8vh" }}
    >
      <div className="bg-white rounded-lg h-[85vh] shadow-lg overflow-hidden flex w-full max-w-6xl">
        <ChatList />
        {open ? (
          <Chatting />
        ) : (
          <>
            <div className="w-full lg:w-8/12 flex flex-col bg-blue-200 text-white p-3">
              <div className="h-[90%] m-auto ">
                <div className="p-2 text-center text-2xl text-blue-400 font-bold capitalize">
                  Select Your Friend to
                </div>
                <div className="p-2 text-center text-3xl text-blue-800 font-bold capitalize">
                  communicate
                </div>

                <img
                  src="https://cdn-icons-png.freepik.com/512/186/186044.png"
                  alt=""
                  className="h-[90%] rounded"
                />
              </div>
            </div>
          </>
        )}
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
