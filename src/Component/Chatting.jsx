import { Avatar, Input, List } from "@mui/material";
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
import { success } from "../Redux/slices/ErrorSlice";
import { toggleLoading, uploadFile } from "../Redux/slices/Default";
import axios from "axios";
import Photos from "./Photos";

import { CiMenuBurger } from "react-icons/ci";
import ChatDialog from "./ChatDialog";

export default function Chatting({ chandleClickOpen }) {
  let auth = useSelector((state) => state.auth.data);
  const newMessage = useSelector((state) => state.friends.newMessage);

  let opnedBy = useSelector((state) => state.friends.openedUser);
  let friends = useSelector((state) => state.friends.chatListUsers);
  let load = useSelector((state) => state.friends.load);
  let list = useSelector((state) => state.random);
  let dataLoad = useSelector((state) => state.random.loadRandom);
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

  const [selectedFiles, setSelectedFiles] = useState([]);

  const sendMessage = (e) => {
    // console.log(e.target);
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
  function handleChange(e) {
    // console.log("FILE ISS IN THE CHANGE", e);
    setSelectedFiles(e.target.files);

    // dispatch(toggleLoading());
    dispatch(loading());
  }

  async function submitFormMessaging(e) {
    e.preventDefault();

    console.log("INPUT FILE IS ", selectedFiles);

    if (!(selectedFiles.length > 0)) {
      console.log("file not selected");
      socket.emit("send_message", {
        resever: sender._id,
        message: input,
        sender: JSON.parse(auth)._id,
        communication: display[0].chats._id,
      });

      setInput("");
      setSelectedFiles([]);
      dispatch(loading());
    } else {
      // console.log("INPUT FILE IS ", selectedFiles);
      // first upload the file
      //  first creating formData object
      console.log("SELECTED FILE IS", selectedFiles);
      const fd = new FormData();

      fd.append("message", input);
      [...selectedFiles].map((el) => {
        fd.append("data", el);
      });

      // const recs = await axios.post("/api/v1/users/submitFile", fd, {
      //   withCredentials: true,
      // });
      // console.log(res);
      const res = await dispatch(uploadFile(fd));

      console.log("RESPONSE COMING", res);
      //
      if (res.payload.status) {
        // dispatch(loading());
        console.log("UPLODAING FILE IS", list);
        socket.emit("send_message", {
          resever: sender._id,
          message: input,
          type: "document",
          uploads: res.payload.sendingData,
          sender: JSON.parse(auth)._id,
          communication: display[0].chats._id,
        });
        console.log("MESSAGE SENT");
        setInput("");
        setSelectedFiles([]);
        dispatch(loading());
        dispatch(toggleLoading());
      }
    }
  }

  // console.log("***** came into useEFFE");
  // dispatch(loading());

  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState("");

  const handleClickOpen = (image) => {
    setImg(image);
    setOpen(true);
  };

  const handleClose = () => {
    setImg("");
    setOpen(false);
  };

  useEffect(() => {
    socket.emit("mark_all_seen", {
      resever: opnedBy,
      sender: JSON.parse(auth)._id,
    });
    // console.log("LIST IS ", list);
  }, [load, dataLoad]);
  return (
    <>
      <Photos
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        image={img}
      />
      <div className="w-full lg:w-8/12 flex flex-col bg-blue-200 text-white">
        <div className="flex items-center justify-between mb-4 bg-blue-800 p-2 text-white  ">
          <div className="flex items-center">
            <div
              className="cursor-pointer block lg:hidden bg-blue-300 p-2 rounded-full mx-3"
              onClick={chandleClickOpen}
            >
              <CiMenuBurger className="text-black text-2xl rounded-full" />
            </div>
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
              {display[0]?.chats?.msg?.length > 0 &&
                display[0].chats.msg.map((el, i) => {
                  if (el.by !== JSON.parse(auth)._id) {
                    return (
                      <Message
                        key={i}
                        data={el}
                        background="bg-blue-400 text-black"
                      >
                        <div className="flex flex-col">
                          {el.type == "document" ? (
                            el?.uplodefiles?.length > 0 && (
                              <div
                                className={`${
                                  el?.uplodefiles?.length <= 3
                                    ? ""
                                    : "grid grid-cols-2 gap-2"
                                }`}
                              >
                                {el.uplodefiles.map((el) => {
                                  return (
                                    <>
                                      <img
                                        src={`${el.data}`}
                                        alt="Photo"
                                        onClick={() => handleClickOpen(el.data)}
                                      />
                                    </>
                                  );
                                })}
                              </div>
                            )
                          ) : (
                            <div></div>
                          )}
                          <div className="flex mt-2 space-x-2">
                            {el.message}

                            <span className="text-black ml-3">
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
                        background="bg-blue-100  text-black"
                      >
                        <div className="flex flex-col">
                          {el.type == "document" ? (
                            el?.uplodefiles?.length > 0 && (
                              <div
                                className={`${
                                  el?.uplodefiles?.length <= 3
                                    ? ""
                                    : "grid grid-cols-2 gap-2"
                                }`}
                              >
                                {el.uplodefiles.map((el) => {
                                  return (
                                    <>
                                      <img
                                        src={`${el.data}`}
                                        alt="Photo"
                                        onClick={() => handleClickOpen(el.data)}
                                      />
                                    </>
                                  );
                                })}
                              </div>
                            )
                          ) : (
                            <div></div>
                          )}
                          <div className="flex mt-2 space-x-2">
                            {el.message}
                            {el.seen ? (
                              <MdVerified className="text-sm text-blue-700 mt-1 ml-2" />
                            ) : (
                              <FaCheck className="text-xs text-blue-700 mt-1 ml-2" />
                            )}
                            <span className="text-blue-400 ml-2">
                              {el.time[3]}
                            </span>
                          </div>
                        </div>
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
        <form action="" onSubmit={submitFormMessaging}>
          <div className="flex items-center px-4 rounded mt-2 py-1 bg-blue-300">
            <label
              className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110"
              htmlFor="data"
            >
              <IoDocumentAttachOutline className="" />
            </label>
            <input
              name="data"
              id="data"
              type="file"
              className="hidden"
              onChange={(e) => {
                // console.log("CAME INTO CHANGE");
                setSelectedFiles(e.target.files);

                dispatch(toggleLoading());
              }}
              multiple="multiple"
            ></input>
            <Input
              className="flex-1 px-2 py-1 mx-1 rounded-full bg-gray-200 shadow-lg hover:bg-gray-200 "
              placeholder="Message Hlo"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              id="message"
            />
            {input && (
              <>
                <button
                  className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110"
                  // onClick={sendMessage}
                  type="submit"
                >
                  <FiSend />
                </button>
                <button
                  className=" mr-2 bg-black hover:bg-gray-700 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded hover:scale-110"
                  type="submit"
                >
                  <MdOutlineScheduleSend />
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
