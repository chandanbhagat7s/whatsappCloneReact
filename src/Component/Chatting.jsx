import { Avatar, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiPhone, CiVideoOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineScheduleSend } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../socket";
import Message from "./Message";
import { loading } from "../Redux/slices/RequestSlice";

import { MdVerified } from "react-icons/md";
import { GoVerified } from "react-icons/go";

import { FaCheck } from "react-icons/fa";

export default function Chatting() {
  let auth = useSelector((state) => state.auth.data);

  let opnedBy = useSelector((state) => state.friends.openedUser);
  let friends = useSelector((state) => state.friends.chatListUsers);
  let load = useSelector((state) => state.friends.load);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  let display = [];
  let user;
  let sender;
  if (friends.length > 0) {
    display = friends.filter((el) => {
      let a = el.user1._id == JSON.parse(auth)._id;
      let b = el.user2._id == JSON.parse(auth)._id;

      let d = el.user1._id == opnedBy;
      let e = el.user2._id == opnedBy;

      let c = a || b;
      let f = d || e;
      return c && f;
    });
    user =
      display[0].user1._id == JSON.parse(auth)._id
        ? display[0].user1
        : display[0].user2;

    sender =
      display[0].user1._id == JSON.parse(auth)._id
        ? display[0].user2
        : display[0].user1;
  }

  const sendMessage = () => {
    if (input.length > 0) {
      socket.emit("send_message", {
        resever: sender._id,
        message: input,
        sender: JSON.parse(auth)._id,
        communication: display[0].chats._id,
      });
      dispatch(loading());
      setInput("");
    }
  };

  useEffect(() => {
    // console.log("***** came into useEFFE");
    socket.emit("mark_all_seen", {
      resever: opnedBy,
      sender: JSON.parse(auth)._id,
    });
    // dispatch(loading());
  }, [load]);
  return (
    <>
      <div className="w-full lg:w-8/12 flex flex-col bg-blue-200 text-white">
        <div className="flex items-center justify-between mb-4 bg-black p-2 text-white rounded">
          <div className="flex items-center">
            <Avatar>
              <CgProfile />
            </Avatar>
            <div className="ml-4 font-semibold">
              {(display.length > 0 && sender.userName) || "NAME"}
            </div>
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
          <div className="flex items-end mb-4  ">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start  ">
              {display.length > 0 &&
                display[0].chats.msg.map((el, i) => {
                  if (el.by !== JSON.parse(auth)._id) {
                    return (
                      <Message
                        key={i}
                        data={el}
                        background="bg-black text-white"
                      >
                        <>
                          {el.message}

                          <span className="text-blue-200 ml-3">
                            {el.time[3]}
                          </span>
                        </>
                      </Message>
                    );
                  } else {
                    return (
                      <Message
                        key={i}
                        data={el}
                        background="bg-white text-black"
                      >
                        <>
                          {el.message}
                          {el.seen ? (
                            <MdVerified className="text-sm text-blue-700 mt-1 ml-2" />
                          ) : (
                            <FaCheck className="text-xs text-blue-700 mt-1 ml-2" />
                          )}
                          <span className="text-blue-400 ml-2">
                            {el.time[3]}
                          </span>
                        </>
                      </Message>
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
        <div className="flex items-center px-4 rounded mt-2 py-1 bg-blue-300">
          <button className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110">
            <IoDocumentAttachOutline className="" />
          </button>

          <Input
            className="flex-1 px-2 py-1 mx-1 rounded-full bg-gray-200 shadow-lg hover:bg-gray-200 "
            placeholder="Message Hii"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          {input && (
            <>
              <button
                className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110"
                onClick={sendMessage}
              >
                <FiSend />
              </button>
              <button className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110">
                <MdOutlineScheduleSend />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
