import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { closeRequestDialog, openRequestDialog } from "../Redux/slices/Default";
import Requests from "./Requests";
import {
  AppBar,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
} from "@mui/material";
import FriendRequest from "./FriendRequest";
import AllRequests from "./AllRequests";
import FriendsCard from "./FriendsCard";
import AllFriends from "./AllFriends";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BoxPopOut() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.random);
  const [tab, setTab] = React.useState(1);

  const handleTab = (data) => {
    setTab(data);
  };

  const handleClickOpen = () => {
    // setOpen(true);
    dispatch(openRequestDialog());
  };
  const handleClose = () => {
    // setOpen(false);
    dispatch(closeRequestDialog());
  };
  React.useEffect(() => {}, [tab]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div className=" m-auto flex p-2 space-x-12">
              <div
                className={`px-5 cursor-pointer py-2 text-white  rounded-lg ${
                  tab == 1
                    ? "bg-gray-300 text-black"
                    : "bg-black hover:bg-gray-700"
                }`}
                onClick={() => handleTab(1)}
              >
                Friend reqests
              </div>
              <div
                className={`px-5 cursor-pointer py-2 text-white rounded-lg ${
                  tab == 2
                    ? "bg-gray-300 text-black"
                    : "bg-black hover:bg-gray-700"
                }`}
                onClick={() => handleTab(2)}
              >
                Explore Friends
              </div>
              <div
                className={`px-5 cursor-pointer  py-2 text-white rounded-lg ${
                  tab == 3
                    ? "bg-gray-300 text-black"
                    : "bg-black hover:bg-gray-700"
                }`}
                onClick={() => handleTab(3)}
              >
                Friends
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <div className="px-3 py-2">
          {tab == 1 && (
            <>
              <AllRequests />
            </>
          )}

          {tab == 2 && (
            <div className="m-auto">
              <FriendRequest />{" "}
            </div>
          )}

          {tab == 3 && (
            <>
              <AllFriends />
            </>
          )}
        </div>
      </Dialog>
    </React.Fragment>
  );
}
