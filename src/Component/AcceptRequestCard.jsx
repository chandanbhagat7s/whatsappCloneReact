import React from "react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { socket } from "../socket";
import { useSelector } from "react-redux";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoPersonRemoveOutline } from "react-icons/io5";

export default function AcceptRequestCard({ data }) {
  console.log(data);

  let ownUser = useSelector((state) => state.auth.data);
  console.log(ownUser);

  console.log(ownUser);
  const sendFriendRequest = () => {
    // console.log("clicked");
    socket.emit("accept_request", {
      request_id: data._id,
    });
  };
  return (
    <>
      <div className="flex flex-col space-y-2 w-[40vw] px-5 py-3 my-2 border rounded border-gray-200 shadow-black ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate ">
              {data.userName || "Name"}
            </p>
            <p className="text-sm text-gray-500 truncate   ">
              {data.bio || "bio"}
            </p>
          </div>
          <div className="flex space-x-2 text-base font-semibold text-gray-900 ">
            <button
              className="bg-green-700 text-white py-2 px-4 rounded-lg"
              onClick={sendFriendRequest}
            >
              <IoCheckmarkDoneSharp /> Accept
            </button>
            <button
              className="bg-red-700 text-white py-2 px-4 rounded-lg"
              //   onClick={sendFriendRequest}
            >
              <IoPersonRemoveOutline /> reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
