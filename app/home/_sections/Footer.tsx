function Footer() {
  return (
    <section
      style={{ clipPath: `polygon(0% 0, 100% 0, 100% 100%, 0 100%)` }}
      className="relative h-[45dvh] md:h-[80.5dvh]"
    >
      <div className="w-screen h-[45dvh] flex flex-col justify-between uppercase text-[#525252] md:h-[80.5dvh] bg-[#242424]   fixed bottom-0  py-6 px-10 ">
        {/* top */}
        <div className="flex flex-col gap-2 md:gap-0  md:flex-row md:justify-between justify-center font-bold text-[13px] tracking-tighter leading-4 md:leading-none items-center text-center pt-[1rem] md:pt-0">
          <p>HF-11 is a registered trademark of OILSTAINLAB LLC.</p>
          <p>All rights reserved. ©{new Date().getFullYear()}</p>
        </div>

        <div className="flex fflex-row justify-between font-bold tracking-tighter items-center text-responsive-12xl leading-none text-center">
          <h3>HF</h3>
          <h3>11</h3>
        </div>
      </div>
    </section>
  );
}

export default Footer;
