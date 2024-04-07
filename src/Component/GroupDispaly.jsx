import { Avatar, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger, CiPhone, CiVideoOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineScheduleSend } from "react-icons/md";
import { socket } from "../socket";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import {
  getAllCommunicationforGroup,
  loading,
} from "../Redux/slices/RequestSlice";
import { getAllMessagesGroup, setLoad } from "../Redux/slices/GroupSlice";

export default function GroupDispaly({ chandleClose, chandleClickOpen }) {
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.auth.data);
  const groupid = useSelector((state) => state.group.opnedGroup);
  const groupData = useSelector((state) => state.group.allGroups);
  const allMessages = useSelector((state) => state.group.messages);
  const load = useSelector((state) => state.group.loadGroup);

  const dispatch = useDispatch();

  let Display;
  if (groupData && groupData.length > 0) {
    Display = groupData.filter((el) => {
      return el._id == groupid;
    });
  }

  const sendMessage = () => {
    if (input.length > 0) {
      socket.emit("send-message", {
        _id: groupid,
        msg: input,
        senderID: JSON.parse(user)._id,
        senderName: JSON.parse(user).userName,
      });

      dispatch(setLoad());
      setInput("");
    }
  };
  const getAllMessages = async () => {
    console.log("COLLEXTING THE INFO", groupid);
    await dispatch(getAllMessagesGroup(groupid));
    // dispatch(setLoad());
  };

  useEffect(() => {
    getAllMessages();
    console.log("ALL MESSAGES ARE ", allMessages);
  }, [groupid]);
  return (
    <>
      <div className="conatiner w-full lg:w-8/12 flex flex-col bg-blue-200 text-white">
        <div className="header">
          <div className="flex items-center justify-between mb-4 bg-black p-2 text-white rounded">
            <div
              className="cursor-pointer block lg:hidden bg-blue-300 p-2 rounded-full mx-3"
              onClick={chandleClickOpen}
            >
              <CiMenuBurger className="text-black text-2xl rounded-full" />
            </div>
            <div className="flex items-center">
              <Avatar>
                <CgProfile />
              </Avatar>
              <div className="ml-4 font-semibold">
                {(Display && Display[0].groupName) || "NAME"}
              </div>
            </div>
            <div className="flex items-center">
              <CiPhone className="w-6 h-6 text-white mx-2 cursor-pointer hover:scale-110 hover:font-extrabold" />
              <CiVideoOn className="w-6 h-6 text-white mx-2 cursor-pointer hover:scale-110 hover:font-extrabold" />
              <CgProfile className="w-6 h-6 text-white mx-2 cursor-pointer hover:scale-110 hover:font-extrabold" />
            </div>
          </div>
        </div>
        <div className="main h-[80%] overflow-scroll">
          <div
            className="flex-1 overflow-y-auto px-4 py-2"
            // style={{
            //   boxShadow:
            //     "inset 0px 11px 8px -10px #CCC, inset 0px -11px 8px -10px #CCC",
            // }}
          >
            <div className="flex items-end mb-4  ">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start  ">
                {true &&
                  allMessages.length > 0 &&
                  allMessages.map((el, i) => {
                    if (true) {
                      return (
                        <Message
                          key={i}
                          data={el}
                          background="bg-blue-300 text-black"
                          group={true}
                        >
                          <div className="flex flex-col">
                            <div className="text-black font-bold  pb-2">
                              {el.senderName}
                            </div>
                            <div className="text-black">
                              {el.msg}{" "}
                              <span className="text-blue-900 ml-3">
                                {el.time[3]}
                              </span>
                            </div>
                          </div>
                        </Message>
                      );
                    } else {
                      return (
                        <Message
                          key={i}
                          data={el}
                          background="bg-white text-black"
                        ></Message>
                      );
                    }
                  })}
              </div>
              {/* <Avatar>
              <CgProfile />
            </Avatar> */}
            </div>
            {/* <div className="flex items-start mb-4"> */}
            {/* <Avatar>
              <CgProfile />
            </Avatar> */}
            {/* </div> */}
          </div>
        </div>
        <div className="footer flex justify-around">
          <Input
            className="flex-1 px-2 py-1 mx-1 rounded-full bg-gray-200 shadow-lg hover:bg-gray-200 w-[80%] "
            placeholder="Message Hii"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110"
            onClick={sendMessage}
          >
            <FiSend />
          </button>
        </div>
      </div>
    </>
  );
}
