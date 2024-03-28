import React, { useEffect, useState } from "react";
import Requests from "./Requests";
import axios from "axios";
import AcceptRequestCard from "./AcceptRequestCard";
import FriendsCard from "./FriendsCard";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../Redux/slices/RequestSlice";

export default function AllFriends() {
  const [data, setData] = useState([]);
  let friends = useSelector((state) => state.friends);
  const dispatch = useDispatch();

  async function getData() {
    dispatch(sendMessage());
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {friends.friends.length > 0 &&
        friends.friends.map((el, i) => {
          return <FriendsCard data={el} key={i} />;
        })}
    </>
  );
}
