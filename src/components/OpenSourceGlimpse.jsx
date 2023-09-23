import React from "react";
import Contribution from "./Contribution";
import GlimpseImage from "../assets/glimpse.png";

const OpenSourceGlimpse = () => {
  return (
    <div className="glimpse items-center justify-between flex-wrap">
      <div className="glimpse__head w-[50%]">
        <img src={GlimpseImage} alt="" />
        <h1>Glimpse of our open source work</h1>
      </div>
      <div className="flex justify-end w-full flex-wrap">
        <div>
          <div className="mr-6 mb-6">
            <Contribution />
          </div>
          <div>
            <Contribution />
          </div>
        </div>
        <div>
          <div className="mr-6 mb-6">
            <Contribution />
          </div>
          <div>
            <Contribution />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceGlimpse;
