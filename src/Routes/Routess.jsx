import React from "react";
import { Route, Routes } from "react-router-dom";
import MainOut from "../Pages/MainOut";
import Login from "../Component/Login";
import Chat from "../Component/Chat";
import Profile from "../Component/Profile";
import Signin from "../Component/Signup";
import Authentication from "../Component/Autherticater";

export default function Routess() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainOut>
                {/* <Login /> */}
                <Login />
                {/* <Chat /> */}
                {/* <Profile /> */}
              </MainOut>
            </>
          }
        />
        <Route element={<Authentication />}>
          <Route
            path="/chat"
            element={
              <MainOut>
                <Chat />
              </MainOut>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
