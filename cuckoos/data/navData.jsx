import { FaEarlybirds } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { BsBookmarkHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const navData = [
  {
    icon: <FaEarlybirds />,
    label: "",
    link: "/",
    phn:false
  },
  {
    icon: <BiHomeAlt2 />,
    label: "Home",
    link: "/",
    phn:true
  },
  {
    icon: <MdNotificationsActive />,
    label: "Notifications",
    link: "/",
    phn:true
  },
  {
    icon: <BsBookmarkHeart />,
    label: "Book marks",
    link: "/",
    phn:true
  },
  {
    icon: <CgProfile />,
    label: "Profile",
    link: "/profile",
    phn:true
  },
];
