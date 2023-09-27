import React from "react";
import { contributions } from "../utils/utils";
import StatsCard from "./StatsCard";
import OpenSourceGlimpse from "./OpenSourceGlimpse";

const OpenSource = () => {
  const bgImageStyle = {
    backgroundImage: "url(/witval-section-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "600px 483px",
    minHeight: "100%",
    minWidth: "100%",
    position: "absolute",
    zIndex: 0,
    left: "0px",
  };
  return (
    <div className="home__opensource">
      <div className="w-[80%] mobile:w-full">
        <div className="home__opensource__main">
          <div className="home__opensource__main__content z-10">
            <h1>Open&nbsp;Soruce Portfolio</h1>
            <div className="mb-6">
              <p>
                We are primarily working on the Cosmos community and we have our
                contributions to the Ethereum community as well.
              </p>
            </div>
            <div className="home__opensource__stats">
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
          </div>
          <div style={bgImageStyle} className="valBG"></div>
        </div>
        <OpenSourceGlimpse />
      </div>
    </div>
  );
};

export default OpenSource;
