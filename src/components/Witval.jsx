import React from "react";
import { witvalStats } from "../utils/utils";
import StatsCard from "./StatsCard";
import { Link } from "react-router-dom";
import { KnowMoreIcon } from "../assets/Icons";

const Witval = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="home__witval">
        <div className="home__witval__main m-auto mobile:w-full w-[80%]">
          <div className="lg:w-[50%]">
            <h1>Witval Validator</h1>
            <div className="">
              <p>
                We are primarily working on the Cosmos community and we have our
                contributions to the Ethereum community as well. We are
                primarily working on the Cosmos community and we have our
                contributions to the Ethereum community as well. We are
                primarily working on the Cosmos community and we have our
                contributions to the Ethereum community as well.
              </p>
            </div>
            <div className="home__witval__knowMore">
              <Link to="/validator">
                <span className="mr-[10px]">Know More</span>
                <KnowMoreIcon />
              </Link>
            </div>
          </div>
          <div className="home__witval__stats__main">
            <div className="home__witval__stats">
              <div className="home__witval__stats__row__1">
                <div
                  style={{ backgroundColor: witvalStats[0].bgColor }}
                  className={"witval__stats__card"}
                >
                  <StatsCard
                    value={witvalStats[0].value}
                    name={witvalStats[0].name}
                    bgColor={witvalStats[0].bgColor}
                  />
                </div>
                <div
                  style={{ backgroundColor: witvalStats[1].bgColor }}
                  className={"witval__stats__card"}
                >
                  <StatsCard
                    value={witvalStats[1].value}
                    name={witvalStats[1].name}
                    bgColor={witvalStats[1].bgColor}
                  />
                </div>
              </div>
              <div
                style={{ backgroundColor: witvalStats[2].bgColor }}
                className={"witval__stats__card"}
              >
                <StatsCard
                  value={witvalStats[2].value}
                  name={witvalStats[2].name}
                  bgColor={witvalStats[2].bgColor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Witval;
