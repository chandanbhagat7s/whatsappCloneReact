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

export default function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, data } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  console.log(data);

  // socket functionality once the user is loggedin
  useEffect(() => {
    // console.log(
    //   "came in useEffect for",
    //   JSON.parse(data),
    //   !window.location.hash,
    //   JSON.parse(isLoggedIn)
    // );
    if (JSON.parse(isLoggedIn)) {
      console.log("called for ", data);
      // window.onload = function () {

      // };

      console.log("called for ", data);
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
      // window.reload();
      if (!socket) {
        console.log("calling");
        connectSocket(JSON.parse(data)._id);
      }
      console.log(socket);

      if (socket) {
        console.log(socket);
        socket.on("new_friend_request", (data) => {
          dispatch(success({ message: data.message }));
        });

        socket.on("request_sent", (data) => {
          dispatch(success({ message: data.message }));
        });

        socket.on("request_accepted", (data) => {
          dispatch(success({ message: data.message }));
        });
      }
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
