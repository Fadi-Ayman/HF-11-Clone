import CustomLink from "./CustomLink";

function Logo() {
  return (
    <CustomLink
      withAnimation={false}
      className="flex items-center justify-center"
      linkClassName="flex items-center justify-center"
      hasIcon={false}
      withTransition={true}
      href="/"
    >
      <span className="w-36 h-full  flex items-center justify-center">
        <img
          style={{ width: "100%", height: "100%" }}
          src="/logo.svg"
          alt="logo"
        />
      </span>
    </CustomLink>
  );
}

export default Logo;
