/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3PnoXrwgbWC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { img, AvatarFallback, Avatar } from "@mui/material/ui/avatar";
// import { Input } from "@mui/material/ui/input";
// import { div } from "@mui/material/ui/scroll-area";
// import { Button } from "@mui/material/ui/button";
// import { AvatarGroup } from "@mui/material";
import { CgProfile } from "react-icons/cg";

import { Avatar, Button, Input } from "@mui/material";
import Menu from "./meueBar";
import Chat from "./Chat";

export default function Component() {
  return (
    <div className="flex justify-center h-screen">
      <Menu />
      <Chat />
    </div>
  );
}
