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
        <div className="mobile:mr-6">
          <div className="mobile:mb-6">
            <Contribution pr={1} />
          </div>
          <div>
            <Contribution pr={2} />
          </div>
        </div>
        <div>
          <div className="mobile:mb-6">
            <Contribution pr={3} />
          </div>
          <div>
            <Contribution pr={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceGlimpse;
