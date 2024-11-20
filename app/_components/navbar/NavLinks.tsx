import CustomLink from "../CustomLink"


function NavLinks() {
  return (
    <div className=" gap-6 hidden md:flex">
    <CustomLink
      className="p-2"
      hasIcon={false}
      href="/gallery"
      withTransition={true}
      >
      Gallery
    </CustomLink>

    <CustomLink
      className="p-2"
      hasIcon={false}
      href="#car-tour"
      withTransition={false}
      >
      Car Tour
    </CustomLink>

    <CustomLink
      className="p-2"
      hasIcon={false}
      href="#about"
      withTransition={false}
      >
      About
    </CustomLink>

    <CustomLink
      className="bg-black   px-6 py-2 text-white h-12  [border-bottom-right-radius:14px] w-fit gap-2"
      hasIcon={true}
      href="#ownership"
      withTransition={false}
      hoverColor="rgb(0 0 0 / 0.8)"
      >
      Ownership
    </CustomLink>
  </div>
  )
}

export default NavLinks
