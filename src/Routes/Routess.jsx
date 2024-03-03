import React from "react";
import { Route, Routes } from "react-router-dom";
import MainOut from "../Pages/MainOut";
import Login from "../Component/Login";
import Chat from "../Component/Chat";
import Profile from "../Component/Profile";

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
                <Chat />
                {/* <Profile /> */}
              </MainOut>
            </>
          }
        />
      </Routes>
    </>
  );
}
