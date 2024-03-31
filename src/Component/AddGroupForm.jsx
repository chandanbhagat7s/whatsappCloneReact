import { Button, Checkbox, Input } from "@mui/material";
import { useState } from "react";
import { MdGroups } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { success, warning } from "../Redux/slices/ErrorSlice";
import OpenDialogBox from "./SimpleDialog";
import { createGroup, setLoad } from "../Redux/slices/GroupSlice";
import { removePage } from "../Redux/slices/RequestSlice";

export default function AddGroupForm() {
  const user = useSelector((state) => state.auth.data);
  const selectedGroupAddMembers = useSelector(
    (state) => state.group.addedMember
  );
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({ groupBio: "", groupName: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  async function handleSubmit() {
    if (!inputData.groupBio || !inputData.groupName) {
      dispatch(warning({ message: "please enter all the details" }));
      return;
    }
    if (selectedGroupAddMembers.length < 3) {
      dispatch(warning({ message: "please select atleast 2 members" }));
      return;
    }

    const res = await dispatch(
      createGroup({
        groupName: inputData.groupName,
        groupBio: inputData.groupBio,
        admins: [JSON.parse(user)._id],
        members: [...selectedGroupAddMembers, JSON.parse(user)._id],
      })
    );

    if (res) {
      dispatch(removePage());
      dispatch(setLoad());
    }
  }
  return (
    <div
      className="min-h-screen w-[75%] m-auto bg-sky-100  md:p-4 flex justify-center items-center "
      style={{ marginTop: "-8vh" }}
    >
      <OpenDialogBox
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
      <div className="w-full max-w-md rounded-lg bg-sky-200 p-12">
        <div className="flex items-center mb-8">
          <h1 className="m-auto text-2xl font-bold text-black">
            Create New Group
          </h1>
        </div>

        <form>
          <div className="mb-4 w-full">
            <label
              className="block text-xl font-medium text-blue-900 font-bold mb-2"
              htmlFor="username"
            >
              Group Name
            </label>
            <Input
              id="username"
              placeholder="Star , Glow ..."
              name="groupName"
              className="w-full"
              onChange={handleChange}
              value={inputData.groupName}
            />
          </div>

          <div className="mb-4 w-full">
            <label
              className="block text-xl font-medium text-blue-900 font-bold mb-2"
              htmlFor="username"
            >
              Group Bio
            </label>
            <Input
              id="username"
              value={inputData.groupBio}
              placeholder="Happy Circle when we are together"
              name="groupBio"
              className="w-full"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 w-full">
            <Button
              variant="contained"
              className="bg-gray-700 text-white border-1 border-black hover:bg-blue-900 px-2 py-3 text-sm rounded "
              onClick={handleClickOpen}
            >
              {" "}
              Add Members
              <MdGroups />
            </Button>
            <div className="text-sm text-gray-400">Atleast two</div>
          </div>

          <input
            type="button"
            value="Create Group"
            className="bg-black text-white border-1 border-black hover:bg-blue-900 px-2 py-3 text-sm rounded w-full"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
