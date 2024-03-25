import { Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { defaulta } from "../Redux/slices/ErrorSlice";
import { useEffect } from "react";

export const AlertBox = () => {
  const error = useSelector((state) => state.error);
  console.log(error);
  const dispatch = useDispatch((state) => state.error);

  setTimeout(() => {
    dispatch(defaulta({ message: "" }));
  }, [4000]);

  return (
    <>
      <div
        className="absolute top-5 fixed mx-12 animate-bounce  "
        style={{ zIndex: 1000000 }}
      >
        {error.status == "" && <></>}
        {error.status == "success" && (
          <>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              {error.message}
            </Alert>
          </>
        )}
        {error.status == "info" && (
          <>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              {error.message}
            </Alert>
          </>
        )}
        {error.status == "warning" && (
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            {error.message}
          </Alert>
        )}
        {error.status == "error" && (
          <>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error.message}
            </Alert>
          </>
        )}
      </div>
    </>
  );
};
