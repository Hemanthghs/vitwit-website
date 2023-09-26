import React from "react";
import Contribution from "./Contribution";

const OpenSourceGlimpse = () => {
  return (
    <div className="glimpse">
      <div className="glimpse__contributions">
        <div>
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
