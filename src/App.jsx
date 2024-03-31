import React, { useEffect } from "react";
import Component from "./Component/Nav";
import Nav from "./Component/meueBar";
import Chat from "./Component/Chat";
import Login from "./Component/Login";
import Signin from "./Component/Signup";
import Profile from "./Component/Profile";
import AddContacts from "./Component/AddContacts";
import Updates from "./Component/Updates";
import AddUpdates from "./Component/AddUpdates";
import "./App.css";
import Pages from "./Component/Pages";
import InPage from "./Component/InPage";
import Routess from "./Routes/Routess";
import { AlertBox } from "./Component/AlertBox";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "./socket";
import { success } from "./Redux/slices/ErrorSlice";
import { loading, setNewMessage } from "./Redux/slices/RequestSlice";
import { useNavigate } from "react-router-dom";
import { getInfoGroup, setLoad } from "./Redux/slices/GroupSlice";

export default function App() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, data } = useSelector((state) => state.auth);

  let allGroups = useSelector((state) => state.group.allGroups);
  // console.log(JSON.parse(data), JSON.parse(isLoggedIn));

  const opneduser = useSelector((state) => state.friends.openedUser);

  function getData() {
    dispatch(getInfoGroup());
  }

  // socket functionality once the user is loggedin
  useEffect(() => {
    // console.log(
    //   "came in useEffect for",
    //   JSON.parse(data),
    //   !window.location.hash,
    //   JSON.parse(isLoggedIn)
    // );
    if (JSON.parse(isLoggedIn)) {
      // window.onload = function () {

      // };

      if (!window.location.hash) {
        nevigate("/chat");
        window.location = window.location + "#loaded";
        window.location.reload();
      }
      // window.reload();
      if (!socket) {
        connectSocket(JSON.parse(data)._id);
      }

      getData();

      if (allGroups.length > 0) {
        const arr = allGroups.map((el) => {
          return el._id;
        });
        // console.log(arr);
        socket.emit("join-group", {
          arr,
        });

        socket.on("new_friend_request", (data) => {
          dispatch(success({ message: data.message }));
        });
        socket.on("new-message", (data) => {
          // need to save in database which user has sent the message

          // console.log("data is ", data);
          dispatch(success({ message: data.newMsg.msg }));
          dispatch(setLoad());
        });

        socket.on("request_sent", (data) => {
          dispatch(success({ message: data.message }));
        });

        socket.on("request_accepted", (data) => {
          dispatch(success({ message: data.message }));
        });

        // socket.on("seen_message", () => {
        //   console.log("CAME INTO SEEDN");
        //   dispatch(loading());
        // });
      }
      // console.log("ENDED");
      // dispatch(loading());
    }

    // things that we need to do when this componetn will unmount
    return () => {
      if (socket) {
        socket.off("request_accepted");
        socket.off("new_friend_request");
        socket.off("request_sent");
      }
    };
  }, [isLoggedIn, socket]);

  return (
    <>
      <AlertBox />
      <Routess />
    </>
  );
}
