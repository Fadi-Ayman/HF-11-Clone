import CustomLink from "../CustomLink";

function NavLinks() {
  return (
    <ul className=" gap-2 hidden md:flex items-center justify-center">
      <li className="size-fit">
        <CustomLink hasIcon={false} href="/gallery/car" withTransition={true}>
          Gallery
        </CustomLink>
      </li>

      <li className="size-fit">
        <CustomLink hasIcon={false} href="#car-tour" withTransition={false}>
          Car Tour
        </CustomLink>
      </li>

      <li className="size-fit">
        <CustomLink hasIcon={false} href="#about" withTransition={false}>
          About
        </CustomLink>
      </li>
      <li className="size-fit">
        <CustomLink
          className="bg-black  text-white h-12  [border-bottom-right-radius:14px] w-fit "
          hasIcon={true}
          href="#ownership"
          withTransition={false}
          hoverColor="rgb(0 0 0 / 0.8)"
        >
          Ownership
        </CustomLink>
      </li>
    </ul>
  );
}

export default NavLinks;
