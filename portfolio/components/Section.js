import React from "react";

const Section = ({ children, title }) => {
  return (
    <div className=" text-dark dark:text-white h-screen box-border justify-center items-center ">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className=" py-8 justify-around">{children}</div>
    </div>
  );
};

export default Section;
