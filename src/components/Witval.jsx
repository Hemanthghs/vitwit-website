import React from "react";
import ValidatorImage from "../assets/validator.png";
import { witvalStats } from "../pages/utils";
import StatsCard from "./StatsCard";

const Witval = () => {
  return (
    <div className="home__witval">
      <div className="w-[80%] mobile:w-full">
        <h1>Witval Validator</h1>
        <div className="text-justify mobile:w-[80%]">
          <p>
            We are primarily working on the Cosmos community and we have our
            contributions to the Ethereum community as well.
          </p>
        </div>
        <div className="home__witval__stats">
          <Stats />
        </div>
      </div>
      <div className="hidden custom-1:flex justify-end">
        <img src={ValidatorImage} alt="" />
      </div>
    </div>
  );
};

export default Witval;

const Stats = () => {
  return (
    <>
      {witvalStats.map((stat, index) => (
        <div style={{backgroundColor: stat.bgColor, marginRight: index !== 2 ? "30px":""}} className="stats__card mb-3 w-full custom-1:w-fit">
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
