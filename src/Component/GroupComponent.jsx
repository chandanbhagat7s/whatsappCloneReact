import { Avatar } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { MdOutlineGroupAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addGroupPageDisplay } from "../Redux/slices/RequestSlice";
import { Fragment, useEffect, useState } from "react";
import {
  getInfoGroup,
  setLoad,
  setOpenGroupId,
} from "../Redux/slices/GroupSlice";

export default function GroupComponent() {
  const allGroups = useSelector((state) => state.group.allGroups);
  const groupLoad = useSelector((state) => state.group.loadGroup);
  const id = useSelector((state) => state.group.opnedGroup);
  const dispatch = useDispatch();

  function openForm() {
    dispatch(addGroupPageDisplay());
    dispatch(setOpenGroupId({ _id: "" }));
    dispatch(setLoad());
  }
  function displayGroup(id) {
    console.log("SETTING THE ID");
    dispatch(setOpenGroupId({ _id: id }));
    dispatch(setLoad());
  }

  function getData() {
    dispatch(getInfoGroup());
  }
  useEffect(() => {
    console.log("RUNNING");
    getData();
  }, [groupLoad]);

  return (
    <>
      <div
        className="px-3 py-3 flex justify-around bg-blue-300 rounded-full hover:bg-black hover:text-white mb-2"
        onClick={openForm}
      >
        Create Group <MdOutlineGroupAdd className="text-2xl" />
      </div>

      <div
        className="space-y-2"
        //   onClick={() =>
        //     displayChats(
        //       el.user1._id == JSON.parse(auth)._id
        //         ? el.user2._id
        //         : el.user1._id
        //     )
        //   }
        //   key={i}
      >
        {allGroups &&
          allGroups.length > 0 &&
          allGroups.map((el, i) => { 
            return (
              <Fragment key={i}>
                <div
                  className={`flex items-center px-4 py-2  hover:text-blue-800 rounded cursor-pointer 
                    hover:bg-blue-300 hover:text-blue-800 ${
                      id == el._id && "bg-blue-300"
                    }`}
                  onClick={() => {
                    console.log("DISPLAYING GROUP", el._id);
                    displayGroup(el._id);
                  }}
                >
                  <Avatar>
                    <CgProfile />
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">{el.groupName}</div>
                    <div className="text-sm text-gray-600">last</div>
                  </div>
                  <div className="ml-auto text-sm text-gray-600"></div>
                  time
                </div>
              </Fragment>
            );
          })}
      </div>
    </>
  );
}
