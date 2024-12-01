import { Fragment } from "react";

type AboutContentReusableSectionProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  bottomLeftText?: string;
  bottomRightText?: string;
  bottomRightSize?: "large" | "normal";
  withSeparator: boolean;
  className?: string;
};

function AboutContentReusableSection({
  title,
  description,
  children,
  bottomLeftText,
  bottomRightText,
  bottomRightSize = "normal",
  withSeparator,
  className,
}: AboutContentReusableSectionProps) {
  return (
    <section className={`flex flex-col w-full gap-6 lg:gap-14 ${className}`}>
      {/* Title */}
      {title && (
        <h2 className="uppercase text-responsive-5xl font-bold leading-none tracking-tighter">
          {title}
        </h2>
      )}

      {/* description */}
      {description && (
        <p className="uppercase text-responsive-3xl leading-none tracking-tighter font-bold">
          {description}
        </p>
      )}

      {/* Children*/}
      {children}

      {/* bottom Left */}
      {bottomLeftText && bottomRightText && (
        <div className="flex lg:gap-[20%] lg:justify-start lg:flex-row flex-col gap-3  ">
          <p className="text-sm font-bold leading-none uppercase">
            {bottomLeftText?.split(" ").map((word, index) => (
              <Fragment key={index}>
                {word}
                {index < bottomLeftText.split(" ").length - 1 && <br />}
              </Fragment>
            ))}
          </p>

          {/* bottom right */}
          {bottomRightSize === "large" ? (
            <p className="uppercase text-responsive-3xl leading-none tracking-tighter font-bold text-black">
              {bottomRightText}
            </p>
          ) : (
            <p className="text-[17px] font-normal text-gray-500 leading-5">
              {bottomRightText}
            </p>
          )}
        </div>
      )}

      {/* Section Separator */}
      {withSeparator && (
        <span className=" lg:block w-full h-[1px] bg-[#d1d0d0b7] my-8 lg:my-16 "></span>
      )}
    </section>
  );
}

export default AboutContentReusableSection;
