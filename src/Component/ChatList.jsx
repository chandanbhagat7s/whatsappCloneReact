import { Avatar, Input } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunication,
  loading,
  openChatBox,
  setOpenUser,
} from "../Redux/slices/RequestSlice";
import { socket } from "../socket";

export default function ChatList() {
  //   const [friends, setFriends] = useState([]);
  let auth = useSelector((state) => state.auth.data);
  let opnedfor = useSelector((state) => state.friends.openedUser);
  let load = useSelector((state) => state.friends.load);
  let friends = useSelector((state) => state.friends.chatListUsers);

  const dispatch = useDispatch();

  const displayChats = (id) => {
    console.log("id is ", id);
    dispatch(setOpenUser({ _id: id }));
    dispatch(openChatBox());
    dispatch(loading());
    socket.emit("mark_all_seen", {
      resever: id,
      sender: JSON.parse(auth)._id,
    });
  };

  const data = async () => {
    await dispatch(getAllCommunication());
  };
  useEffect(() => {
    data();
  }, [load]);

  return (
    <>
      <div className="hidden lg:block w-4/12 bg-blue-400 p-4 overflow-y-auto">
        <div className="flex items-center px-4 mb-5">
          <Input
            className="flex-1 px-4 py-2 rounded-full bg-blue-200 text-blue-700 border-0"
            placeholder="Search"
          />
          <CiSearch className="text-2xl text-white font-extrabold ml-2" />
        </div>
        {friends.length > 0 &&
          friends.map((el, i) => {
            return (
              <>
                <div
                  className="space-y-2"
                  onClick={() =>
                    displayChats(
                      el.user1._id == JSON.parse(auth)._id
                        ? el.user2._id
                        : el.user1._id
                    )
                  }
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
                      <div className="text-sm text-gray-600">
                        {el.chats.msg[el.chats.msg.length - 1].message}
                      </div>
                    </div>
                    <div className="ml-auto text-sm text-gray-600"></div>
                    {el.chats.msg[el.chats.msg.length - 1].time[3]}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
