import React from "react";
import Nav from "../Component/meueBar";
import BoxPopOut from "../Component/BoxPopOut";

export default function MainOut({ children }) {
  return (
    <>
      <Nav />
      <BoxPopOut />
      {children}
    </>
  );
}
