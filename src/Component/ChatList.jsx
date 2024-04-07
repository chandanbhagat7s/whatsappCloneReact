import { Avatar, Input } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunication,
  loading,
  openChatBox,
  removePage,
  setOpenUser,
} from "../Redux/slices/RequestSlice";
import { socket } from "../socket";
import GroupComponent from "./GroupComponent";
import { success } from "../Redux/slices/ErrorSlice";
import Profile from "./ProfileDialog";

export default function ChatList({ tab, setTab, dialog, chandleClose }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const [friends, setFriends] = useState([]);
  let auth = useSelector((state) => state.auth.data);
  let opnedfor = useSelector((state) => state.friends.openedUser);
  let load = useSelector((state) => state.friends.load);
  let friends = useSelector((state) => state.friends.chatListUsers);

  let unread = 0;

  const dispatch = useDispatch();

  const displayChats = (id) => {
    dispatch(setOpenUser({ _id: id }));
    dispatch(openChatBox());
    dispatch(loading());
    socket.emit("mark_all_seen", {
      resever: id,
      sender: JSON.parse(auth)._id,
    });
  };
  if (socket) {
    socket.on("seen_message", () => {
      dispatch(loading());
    });
    socket.on("reseved_message", (d) => {
      dispatch(success({ message: d.message }));
      dispatch(loading());
      // dispatch(setNewMessage());

      // if (d.by == opneduser) {
      //   socket.emit("mark_all_seen", {
      //     resever: d.by,
      //     sender: JSON.parse(data)._id,
      //   });
      //   dispatch(loading());
      // }
    });
  }

  const data = async () => {
    await dispatch(getAllCommunication());
  };

  function handleProfileDialog() {
    handleClickOpen();
  }

  useEffect(() => {
    data();
    // console.log("friends arr is ", friends);
  }, [load]);

  return (
    <>
      <Profile
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      {/* hidden w-4/12 */}
      <div
        className={`lg:block  bg-blue-400 p-4 overflow-y-auto ${
          dialog ? "" : "hidden w-4/12 "
        }`}
      >
        <div className="flex items-center px-4 mb-5 justify-around">
          <div>
            <CgProfile
              className="text-4xl mr-3 text-white"
              onClick={handleProfileDialog}
            />
          </div>
          <Input
            className="flex-1 px-4 py-2 rounded bg-blue-200 text-blue-700  bg-blue-100"
            placeholder="Search for friends"
          />
          <CiSearch className="text-2xl text-white font-extrabold ml-2" />
        </div>
        <div className="px-2 bg-blue-400 flex justify-around mb-2">
          <div
            onClick={() => {
              setTab(1);
              dispatch(removePage());
              dispatch(loading());
            }}
            className={`rounded-full px-3 py-2  text-white font-bold cursor-pointer mr-3   text-center ${
              tab == 1
                ? "bg-black text w-[75%] border border-2 border-blue-100"
                : "bg-blue-600 hover:bg-blue-500 "
            }`}
          >
            Chats
          </div>
          <div
            onClick={() => setTab(2)}
            className={`rounded-full px-3 py-2   cursor-pointer text-white font-bold   text-center ${
              tab == 2
                ? "bg-black text w-[75%] border border-2 border-blue-100"
                : "bg-blue-600 hover:bg-blue-500 "
            }`}
          >
            Groups
          </div>
        </div>
        {tab == 1 &&
          friends.length > 0 &&
          friends.map((el, i) => {
            return (
              <>
                <div
                  className="space-y-2"
                  onClick={() => {
                    dialog && chandleClose();
                    displayChats(
                      el.user1._id == JSON.parse(auth)._id
                        ? el.user2._id
                        : el.user1._id
                    );
                  }}
                  key={i}
                >
                  <div
                    className={`flex items-center px-4 py-2  hover:text-blue-800 rounded cursor-pointer ${
                      el.user1._id == opnedfor && " bg-blue-200 text-blue-800"
                    } ${
                      el.user2._id == opnedfor && " bg-blue-200  text-blue-800"
                    } hover:bg-blue-300 hover:text-blue-800`}
                  >
                    <Avatar>
                      <CgProfile />
                    </Avatar>
                    <div className="ml-4">
                      <div className="font-semibold">
                        {el.user1._id == JSON.parse(auth)._id
                          ? el.user2.userName
                          : el.user1.userName}
                      </div>
                      <div className="text-sm text-gray-600 flex justify-between">
                        {el.chats?.msg.length > 0 &&
                          el.chats.msg[el.chats.msg.length - 1].message}{" "}
                        {unread ? (
                          <>
                            {" "}
                            <div className="bg-blue-800 text-white font-bold rounded-full p-1">
                              {unread}
                            </div>{" "}
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="ml-auto text-sm text-gray-600"></div>
                    {el.chats?.msg.length > 0 &&
                      el.chats.msg[el.chats.msg.length - 1].time[3]}
                  </div>
                </div>
              </>
            );
          })}
        {tab == 2 && (
          <>
            <GroupComponent />
          </>
        )}
      </div>
    </>
  );
}
