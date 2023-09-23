import React from "react";
import ValidatorImage from "../assets/validator.png";
import { witvalStats } from "../pages/utils";
import StatsCard from "./StatsCard";

const Witval = () => {
  return (
    <div className="home__witval">
      <div className="w-[55%]">
        <h1>Witval Validator</h1>
        <div>
          <p>
            We are primarily working on the Cosmos community and we have our
            contributions to the Ethereum community as well.
          </p>
        </div>
        <div className="home__witval__stats">
          <Stats />
        </div>
      </div>
      <div className="w-[30%]">
        <img className="w-[100%]" src={ValidatorImage} alt="" />
      </div>
    </div>
  );
};

export default Witval;

const Stats = () => {
  return (
    <>
      {witvalStats.map((stat, index) => (
        <StatsCard
          key={index}
          value={stat.value}
          name={stat.name}
          bgColor={stat.bgColor}
        />
      ))}
    </>
  );
};

const Stat = () => {
  return (
    <div class="bg-[#E4F1FC] inline-block rounded-[16px] pb-2 pr-2 pt-1 pl-1">
      <div class="h-[186px] flex rounded-[16px] flex-col bg-white justify-center items-start px-[40px]">
        <div class="font-custom1 text-[48px] font-extrabold text-[#333] leading-8 mb-[24px]">
          +12
        </div>
        <div class="font-custom1 text-[18px] text-[#333] leading-[20px]">
          Number of networks
        </div>
      </div>
    </div>
  );
};
