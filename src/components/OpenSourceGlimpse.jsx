import React from "react";
import Contribution from "./Contribution";
import { chainsList } from "../utils/utils";

const OpenSourceGlimpse = () => {
  return (
    <div className="glimpse">
      <div className="glimpse__contributions">
        <Contribution pr={1} logo={chainsList[10].logo}/>
        <Contribution pr={2} logo={chainsList[3].logo}/>
        <Contribution pr={3} logo={chainsList[7].logo}/>
        <Contribution pr={4} logo={chainsList[6].logo}/>
      </div>
    </div>
  );
};

export default OpenSourceGlimpse;
