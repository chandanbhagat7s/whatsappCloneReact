import React, { useEffect, useState } from "react";
import Requests from "./Requests";
import axios from "axios";
import AcceptRequestCard from "./AcceptRequestCard";

export default function AllRequests() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("/api/v1/users/getAllFriendRequest", {
        withCredentials: true,
      });
      if (res) {
        if (res.data.status) {
          setData([...res.data.data]);
        }
      }
    } catch (error) {
      return error.response;
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {console.log(data.length)}
      {data.length > 0 ? (
        data.map((el, i) => {
          return <AcceptRequestCard data={el} key={i} />;
        })
      ) : (
        <>
          <div className="px-auto py-3">No friend requests</div>
        </>
      )}
    </>
  );
}
