import React from "react";
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

export default function App() {
  return (
    <>
      <div className="bg-gray-300 ">
        <Nav />
        <Pages />
        {/* <Chat /> */}
        {/* <Login /> */}
        {/* <Updates />

<Signin />
       
        <Profile />
        <AddContacts /> */}
      </div>
    </>
  );
}
