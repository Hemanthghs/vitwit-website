import React from "react";
import { witvalStats } from "../utils/utils";
import StatsCard from "./StatsCard";
import { Link } from "react-router-dom";
import { KnowMoreIcon } from "../assets/Icons";

const Witval = () => {
  const bgImageStyle = {
    backgroundImage: "url(/validator.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    minHeight: "100%",
    minWidth: "100%",
    position: "absolute",
    zIndex: -10,
    top: "0px",
    zIndex: 1,
  };
  return (
    <div className="relative overflow-hidden">
      <div className="home__witval">
        <div className="w-[80%] mobile:w-full z-10">
          <h1>Witval Validator</h1>
          <div className="text-justify mobile:w-[64%]">
            <p>
              We are primarily working on the Cosmos community and we have our
              contributions to the Ethereum community as well.
            </p>
          </div>
          <div className="home__witval__knowMore">
            <Link target="_blank" to="https://medium.com/vitwit">
              <span className="mr-[10px]">Know More</span><KnowMoreIcon />
            </Link>
          </div>
          <div className="home__witval__stats">
            <Stats />
          </div>
        </div>
      </div>
      <div style={bgImageStyle} className="witvalSectionBG"></div>
    </div>
  );
};

export default Witval;

const Stats = () => {
  return (
    <>
      {witvalStats.map((stat, index) => (
        <div
          style={{ backgroundColor: stat.bgColor }}
          className={
            index != 2
              ? `stats__card mr-0 mb-3 w-full custom-3:w-fit tablet:mr-[30px]`
              : `stats__card mb-3 w-full custom-3:w-fit tablet:mr-0`
          }
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
