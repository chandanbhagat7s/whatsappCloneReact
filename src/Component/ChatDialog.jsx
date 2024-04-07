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
import ChatList from "./ChatList";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ChatDialog({
  handleClickOpen,
  handleClose,
  open,
  tab,
  setTab,
}) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="bg-blue-200">
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Your Chats...😊
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <div className="w-[100%]">
              <ChatList
                tab={tab}
                setTab={setTab}
                dialog={true}
                chandleClose={handleClose}
              />
            </div>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}
