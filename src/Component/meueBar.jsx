/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Upi70zBhdrN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Avatar, Button, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openRequestDialog } from "../Redux/slices/Default";

export default function Nav() {
  let { isLoggedIn } = useSelector((state) => state.auth);
  isLoggedIn = JSON.parse(isLoggedIn);
  const [back, setBack] = useState(1);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    // setOpen(true);
    dispatch(openRequestDialog());
  };
  return (
    <>
      <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-gradient-to-t from-blue-300 to-white  left-1/2">
        {isLoggedIn ? (
          <>
            <div className="w-full">
              <div
                className="grid max-w-md grid-cols-3 gap-3 space-x-5 p-1 mx-auto my-2  rounded-lg "
                role="group"
              >
                <button
                  onClick={handleClickOpen}
                  type="button"
                  className="px-5 py-3 text-xs font-medium text-white bg-black text-center capitalize   rounded-lg"
                >
                  Requests
                </button>
                <Link
                  to={"/chat"}
                  type="button"
                  className="px-5 py-3 text-xs font-medium text-white bg-black text-center capitalize  rounded-lg"
                >
                  Chats
                </Link>
                <Link
                  to={"/stories"}
                  type="button"
                  className="px-5 py-3 text-xs font-medium text-white bg-black text-center capitalize  rounded-lg"
                >
                  Stories
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full ">
              <div
                className="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600 "
                role="group"
              >
                <Link
                  type="button"
                  className={`px-5 py-1.5 text-xs font-medium text-gray-900 rounded-lg text-center ${
                    back ? "bg-gray-400" : ""
                  }`}
                  to={"/"}
                  onClick={() => setBack(1)}
                >
                  Signup
                </Link>
                <Link
                  onClick={() => setBack(0)}
                  to={"/login"}
                  type="button"
                  className={`px-5 py-1.5 text-xs font-medium text-gray-900 rounded-lg text-center ${
                    !back ? "bg-gray-400" : ""
                  }`}
                >
                  Login
                </Link>
              </div>
            </div>
          </>
        )}
        {isLoggedIn && (
          <>
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
