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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Login from "./Login";
import AddGroupForm from "./AddGroupForm";
import { loading } from "../Redux/slices/RequestSlice";
import GroupDispaly from "./GroupDispaly";
import { success } from "../Redux/slices/ErrorSlice";
import { socket } from "../socket";

export default function Chat() {
  let opnedBy = useSelector((state) => state.friends.openedUser);
  const open = useSelector((state) => state.friends.open);
  let load = useSelector((state) => state.friends.load);
  let groupLoading = useSelector((state) => state.friends.loadGroup);
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();

  let addGroupPage = useSelector((state) => state.friends.addGroupPage);
  let opnedGroup = useSelector((state) => state.group.opnedGroup);

  let auth = useSelector((state) => state.auth.data);

  useEffect(() => {}, [load, groupLoading]);

  return (
    <div
      className="min-h-screen w-[100vw]  m-auto bg-gray-100  md:p-2 flex justify-center items-start"
      // style={{ marginTop: "-8vh" }}
    >
      <div className="bg-white rounded-lg h-[85vh] shadow-lg overflow-hidden flex w-full max-w-6xl">
        <ChatList tab={tab} setTab={setTab} />
        {}
        {open && !addGroupPage ? (
          <Chatting />
        ) : addGroupPage || opnedGroup ? (
          opnedGroup ? (
            <GroupDispaly />
          ) : (
            <AddGroupForm />
          )
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
