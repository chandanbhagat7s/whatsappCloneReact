import React, { useEffect, useState } from "react";
import Requests from "./Requests";
import axios from "axios";
import AcceptRequestCard from "./AcceptRequestCard";
import FriendsCard from "./FriendsCard";

export default function AllFriends() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("/api/v1/users/getFriendList", {
        withCredentials: true,
      });
      if (res) {
        console.log(res);
        if (res.data.status) {
          setData([...res.data.data]);
        }
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {setData.length > 0 &&
        data.map((el, i) => {
          return <FriendsCard data={el} key={i} />;
        })}
    </>
  );
}
