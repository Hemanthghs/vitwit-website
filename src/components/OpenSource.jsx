import React from "react";
import { contributions } from "../utils/utils";
import StatsCard from "./StatsCard";
import OpenSourceGlimpse from "./OpenSourceGlimpse";

const OpenSource = () => {
  return (
    <div className="home__opensource">
      <div className="w-[80%] mobile:w-full">
        <h1>Open&nbsp;Soruce Portfolio</h1>
        <div className="text-justify mobile:w-[64%]">
          <p>
            We are primarily working on the Cosmos community and we have our
            contributions to the Ethereum community as well.
          </p>
        </div>
        <div className="home__opensource__stats">
          <Stats />
        </div>
        <OpenSourceGlimpse />
      </div>
    </div>
  );
};

export default OpenSource;

const Stats = () => {
  return (
    <>
      {contributions.map((stat, index) => (
        <div
          style={{
            backgroundColor: stat.bgColor,
            marginRight: index !== 3 ? "" : "",
          }}
          className="stats__card mb-3 w-full custom-1:w-fit"
        >
          <StatsCard
            key={index}
            value={stat.value}
            name={stat.name}
            bgColor={stat.bgColor}
          />
        </div>
      ))}
    </>
  );
};
