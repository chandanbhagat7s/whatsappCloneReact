import React from "react";

export default function Message({ children, data, background }) {
  return (
    <div>
      <span
        className={`px-4 py-2 rounded-lg flex  rounded-br-none ${background}  `}
      >
        {children}
      </span>
    </div>
  );
}
