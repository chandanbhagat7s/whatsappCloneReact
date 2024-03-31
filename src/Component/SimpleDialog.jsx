import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../Redux/slices/RequestSlice";
import { createGroup, getList } from "../Redux/slices/GroupSlice";
import Groupcard from "./Groupcard";
import { IoMdPersonAdd } from "react-icons/io";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const everyone = useSelector((state) => state.group);

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleSubmit = (e) => {
    // dispatch(createGroup({}));
  };

  React.useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <Dialog onClose={handleClose} open={open} className="">
      <DialogTitle className="py-1 bg-blue-700 font-bold text-white flex justify-between  ">
        <div>
          {" "}
          Add Friends <IoMdPersonAdd />
        </div>
        <div>
          {" "}
          <div
            className="px-5 py-1  bg-blue-200 text-blue-900  rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
            onClick={handleSubmit}
          >
            ADD MEMBERS
          </div>
        </div>
      </DialogTitle>
      <List sx={{ pt: 0 }} className=" bg-blue-200">
        {everyone.everyone &&
          everyone.everyone.map((el) => {
            return <Groupcard data={el} key={el._id} />;
          })}

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          ></ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function OpenDialogBox({
  open,
  setOpen,
  handleClose,
  handleClickOpen,
}) {
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
