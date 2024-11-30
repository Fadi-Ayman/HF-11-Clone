"use client";

import { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import Sidebar from "./Sidebar";

function NavLinksMini() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("screen");
    } else {
      document.body.classList.remove("screen");
    }
  }, [isOpen]);

  return (
    <div className="  flex justify-center items-center  size-fit  md:hidden">
      <MenuBar isOpen={isOpen} MenuBarRef={menuRef} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} MenuBarRef={menuRef} setIsOpen={setIsOpen} />
    </div>
  );
}

export default NavLinksMini;
