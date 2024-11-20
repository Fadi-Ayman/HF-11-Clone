"use client";

import { useRef, useState } from "react";
import MenuBar from "./MenuBar";
import Sidebar from "./Sidebar";

function NavLinksMini() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);


  return (
    <div className="  flex justify-center items-center  size-fit md:hidden">
      <MenuBar isOpen={isOpen} MenuBarRef={menuRef} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} MenuBarRef={menuRef}  setIsOpen={setIsOpen}/>
    </div>
  );
}

export default NavLinksMini;
