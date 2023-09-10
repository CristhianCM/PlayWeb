import React from "react";

export default function Movie(props) {
  return (
    <div className="box-border 2xl:w-96 2xl:h-[550px] xl:w-72 xl:h-96 lg:w-60 lg:h-96 md:w-72 md:h-96 sm:w-64 sm:h-96 w-72 h-96 mb-10 pb-8 px-3 py-3 backdrop-blur-sm bg-white/10  mx-auto rounded-2xl ">
      <img
        className=" rounded-2xl h-full  container"
        src={props.url}
        alt="Barbie"
      />
      <h2 className="mx-4 p-1 text-white">{props.name}</h2>
    </div>
  );
}
