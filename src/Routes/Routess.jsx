import React from "react";
import { Route, Routes } from "react-router-dom";
import MainOut from "../Pages/MainOut";
import Login from "../Component/Login";
import Chat from "../Component/Chat";
import Signin from "../Component/Signup";
import Authentication from "../Component/Autherticater";
import Requests from "../Component/Requests";

export default function Routess() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainOut>
                <Signin />
              </MainOut>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <MainOut>
                <Login />
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
          <Route
            path="/requests"
            element={
              <MainOut>
                <Requests />
              </MainOut>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
