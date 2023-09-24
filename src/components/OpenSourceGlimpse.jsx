import React from "react";
import Contribution from "./Contribution";
import GlimpseImage from "../assets/glimpse.png";

const OpenSourceGlimpse = () => {
  return (
    <div className="glimpse">
      <div className="glimpse__head">
        <img src={GlimpseImage} alt="" />
        <h1>Glimpse of our open source work</h1>
      </div>
      <div className="glimpse__contributions">
        <div className="mb-4 tablet:mb-0 custom-2:mr-6">
          <div className="mobile:mb-6">
            <Contribution pr={1} gradient={"contribution__gradient__top"}/>
          </div>
          <div>
            <Contribution pr={2} gradient={"contribution__gradient__bottom"}/>
          </div>
        </div>
        <div>
          <div className="mobile:mb-6">
            <Contribution pr={3} gradient={"contribution__gradient__top"}/>
          </div>
          <div>
            <Contribution pr={4} gradient={"contribution__gradient__bottom"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceGlimpse;
