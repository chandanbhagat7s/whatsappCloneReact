import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import FriendsCard from "./FriendsCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Profile({ open, handleClickOpen, handleClose }) {
  const [friendList, setFriendList] = useState([]);
  let user = useSelector((state) => state.auth.data);

  async function getFriendList() {
    try {
      const res = await axios.get("/api/v1/users/getFriendList", {
        withCredentials: true,
      });
      if (res?.data?.status || false) {
        setFriendList([...res?.data?.data]);
      }
    } catch (error) {
      return error.response;
    }
  }

  let friends = useSelector((state) => state.friends.friends);
  user = JSON.parse(user);
  console.log(user);
  console.log("FRIENDS ARE", friends);

  useEffect(() => {
    getFriendList();
    console.log(friendList);
  }, []);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="bg-blue-300">
          {" "}
          <div className="font-bold px-2 py-1">PROFILE 😊 </div>{" "}
        </DialogTitle>
        <DialogContent className="bg-blue-200">
          <DialogContentText id="alert-dialog-slide-description ">
            <div className="flex space-x-3 mt-2">
              <div className="my-2 w-1/2 ">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className=" mt-2 mb-5 text-3xl text-black font-extrabold  ">
                  {user.userName || "USERNAME"}
                </div>
                <div className="px-2 py-1 text-2xl bg-blue-100 rounded-full">
                  {user.phone || "MOBILE"}
                </div>
                <div className="px-2 py-1 text-2xl bg-blue-100 rounded-full">
                  {user.email || "MOBILE"}
                </div>
                <div className="px-2 py-1 text-xl text-black font-bold">
                  FRIENDS
                </div>
                <div className="px-2 py-1 text-sm bg-blue-100 rounded">
                  {friendList.length > 0 &&
                    friendList.map((el, i) => {
                      return (
                        <>
                          <FriendsCard data={el} key={i} />
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
