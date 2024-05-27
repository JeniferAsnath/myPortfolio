import React from "react";

const Section = ({ children, title, Name }) => {
  return (
    <div className=" text-dark dark:text-white  box-border justify-center items-center mb-12">
      <h2 className={"text-3xl font-bold text-center  md:py-2"}>
        {title}
      </h2>
      <h2 className={"text-2xl font-bold  md:py-2"}>{Name} </h2>

      <div className=" py-8 justify-around font-opensans text-base">{children}</div>
    </div>
  );
};

export default Section;
