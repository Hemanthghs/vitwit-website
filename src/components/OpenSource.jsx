import React from "react";
import { contributions } from "../utils/utils";
import StatsCard from "./StatsCard";
import OpenSourceGlimpse from "./OpenSourceGlimpse";

const OpenSource = () => {
  return (
    <div className="home__opensource">
      <div className="w-[80%] mobile:w-full">
        <h1>Open&nbsp;Soruce Portfolio</h1>
        <div className="text-justify mobile:w-[64%] mb-6">
          <p>
            We are primarily working on the Cosmos community and we have our
            contributions to the Ethereum community as well.
          </p>
        </div>
        <div className="home__opensource__stats">
          <div className="home__opensource__stats__row__1">
            <div
              style={{
                backgroundColor: contributions[0].bgColor,
              }}
              className="stats__card"
            >
              <StatsCard
                value={contributions[0].value}
                name={contributions[0].name}
                bgColor={contributions[0].bgColor}
              />
            </div>
            <div
              style={{
                backgroundColor: contributions[1].bgColor,
              }}
              className="stats__card"
            >
              <StatsCard
                value={contributions[1].value}
                name={contributions[1].name}
                bgColor={contributions[1].bgColor}
              />
            </div>
            <div
              style={{
                backgroundColor: contributions[2].bgColor,
              }}
              className="stats__card"
            >
              <StatsCard
                value={contributions[2].value}
                name={contributions[2].name}
                bgColor={contributions[2].bgColor}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: contributions[3].bgColor,
              }}
              className="stats__card"
            >
              <StatsCard
                value={contributions[3].value}
                name={contributions[3].name}
                bgColor={contributions[3].bgColor}
              />
            </div>
          </div>
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
          }}
          className="stats__card"
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
