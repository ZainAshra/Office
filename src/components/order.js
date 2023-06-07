import React from "react";
import HeaderBootstap from "./mainheader";

export const Order = () => {
  return (
    <>
      <div>
        {" "}
        <HeaderBootstap />
      </div>
      <div className="grid grid-cols-3 border justify-around text-cyan-950 ">

      {/* leftside */}
        <div className="col-span-1 border ">1</div>




        {/* right side */}
        <div className="col-span-2 border" ></div>
      </div>
    </>
  );
};
