import { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addMember, removeMember } from "../Redux/slices/GroupSlice";

export default function Groupcard({ data }) {
  const [add, setAdd] = useState(false);
  //   let ownUser = useSelector((state) => state.auth.data);
  let ownUser = useSelector((state) => state.group.addedMember);

  const dispatch = useDispatch();

  function addMemberr() {
    if (!add) {
      setAdd(true);
      dispatch(addMember({ _id: data._id }));
    } else {
      setAdd(false);
      dispatch(removeMember({ _id: data._id }));
    }
  }
  useEffect(() => {
    if (ownUser.includes(data._id)) {
      setAdd(true);
    }
  });

  //   const sendHiiMessage = () => {
  //     socket.emit("create_new_convertion", {
  //       reciver: data._id,
  //       sender: JSON.parse(ownUser)._id,
  //     });
  //     dispatch(closeRequestDialog());
  //     dispatch(setOpenUser({ _id: data._id }));

  //     dispatch(loading());
  //   };
  return (
    <>
      <div className="flex flex-col space-y-2 w-[40vw] px-5 py-3 my-2 border rounded border-gray-200 shadow-black bg-blue-300 mx-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate font-bold">
              {data.userName || "Name"}
            </p>
            <p className="text-sm text-gray-900 truncate   ">
              {data.bio || "bio"}
            </p>
          </div>
          <div className="flex space-x-2 text-base font-semibold text-gray-900 ">
            <button onClick={addMemberr}>
              {add ? (
                <>
                  <div className="bg-blue-700 text-white py-2 px-4 rounded-lg flex">
                    Added <GrStatusGood className="text-sm mx-2 text-blue" />
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-blue-500 text-white py-2 px-4 rounded-lg flex">
                    <IoMdPersonAdd />
                    Add
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
