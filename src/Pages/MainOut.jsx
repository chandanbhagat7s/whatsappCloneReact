import React from "react";
import Nav from "../Component/meueBar";

export default function MainOut({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
