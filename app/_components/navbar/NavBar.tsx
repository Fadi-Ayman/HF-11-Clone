"use client";
import useScreenSize from "@/app/_hooks/useScreenSize";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import NavLinksMini from "./NavLinksMini";

function NavBar() {
  const { width } = useScreenSize();
  return (
    <div className="fixed top-0 left-0 w-full h-20 z-10 border-b flex justify-between items-center px-6">
      <Logo />

      {width < 768 ? <NavLinksMini /> : <NavLinks />}
    </div>
  );
}

export default NavBar;
