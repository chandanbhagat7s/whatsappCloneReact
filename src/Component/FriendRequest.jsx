import axios from "axios";
import React, { useEffect, useState } from "react";
import Requests from "./Requests";

export default function FriendRequest() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("/api/v1/users/getAllUsers", {
        withCredentials: true,
      });
      if (res) {
        console.log(res);
        if (res.data.status) {
          setData([...res.data.remaining_users]);
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
          return <Requests key={i} data={el} />;
        })}
    </>
  );
}
