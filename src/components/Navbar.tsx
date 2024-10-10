import React from "react";
import { ModeToggle } from "./ModeToggle";

// icons
import { FaHome,FaBloggerB } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4  items-center border-b border-zinc-800">
      {/* Logo */}
      {/* <div className="satisfy-regular text-4xl cursor-pointer text-green-500 hover:text-green-600">Jatin</div> */}
      {/*Navbar items */}
      <ul className="flex gap-10 items-center">
        <li>
          <FaHome/>
        </li>
        <li>
        </li>
        <li>
        <FaBloggerB/>
        </li>
        <li>
        <ModeToggle/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
