import React from "react";
import Contribution from "./Contribution";

const OpenSourceGlimpse = () => {
  return (
    <div className="glimpse">
      <div className="glimpse__contributions">
        <Contribution pr={1} />
        <Contribution pr={2} />
        <Contribution pr={3} />
        <Contribution pr={4} />
      </div>
    </div>
  );
};

export default OpenSourceGlimpse;
