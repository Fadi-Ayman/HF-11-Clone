function Footer() {
  return (
    <section
      style={{ clipPath: `polygon(0% 0, 100% 0, 100% 100%, 0 100%)` }}
      className="relative h-[80.5dvh]"
    >
      <div className="w-screen h-[80.5dvh] bg-yellow-500  fixed bottom-0   ">
        <p className="text-5xl">Footer</p>
      </div>
    </section>
  );
}

export default Footer;
