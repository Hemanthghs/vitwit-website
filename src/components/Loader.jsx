import React from "react";
import LoaderGIF from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="h-screen w-full flex-center">
      <img src={LoaderGIF} alt="" />
    </div>
  );
};

export default Loader;
