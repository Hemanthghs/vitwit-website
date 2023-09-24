import React from "react";
import Navbar from "../components/Navbar";
import { AssetsIcon, NetworkIcon, StakedIcon } from "../assets/Icons";
import CountUp from "react-countup";

const Validator = () => {
  return (
    <div>
      <div className="tablet:h-screen flex flex-col justify-between">
        <Navbar />
        <div
          style={{
            backgroundImage: "url(/validator-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "850px 683px",
          }}
          className="validator"
        >
          <div className="validator__head">
            <div>
              <h1 className="validator__head_title">
                We provide public goods services for the chains we validate.
              </h1>
              <div className="validator__head_text">
                <p>
                  Loris ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam semper massa, non ultrices ipsum placerat non.
                  Vestibulum id odio ut eros convallis congue.
                </p>
              </div>
            </div>
            <div className="validator__head__stats">
              <div className="validator__head__stat">
                <div>
                  <NetworkIcon />
                </div>
                <div className="validator__head__stat__value">
                  +<CountUp start={0} end={12} duration={2} />
                </div>
                <div className="validator__head__stat__name">
                  Total Networks
                </div>
              </div>
              <div className="validator__head__stat">
                <div>
                  <AssetsIcon />
                </div>
                <div className="validator__head__stat__value">
                  $<CountUp start={0} end={123123123} duration={2} />
                </div>
                <div className="validator__head__stat__name">
                  Total staked amount
                </div>
              </div>
              <div className="validator__head__stat">
                <div>
                  <StakedIcon />
                </div>
                <div className="validator__head__stat__value">
                  +<CountUp start={0} end={23452} duration={2} />
                </div>
                <div className="validator__head__stat__name">
                  Number of delegators
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="validator__highlights">
        <h1>Long-term supporter with ecosystem contribution</h1>
        <div className="validator__highlights__list">
          <div className="highlight__card bg-[#E4F1FC] w-[50%] mb-20">
            <HighlightCard
              value={"High-security Validator Node"}
              name={
                "Witval is securing the partnered networks with its robust, globally-distributed node operation."
              }
            />
          </div>
          <div className="highlight__card bg-[#F1E3FB] w-[40%] mb-20">
            <HighlightCard
              value={"User-friendly Blockchain Infrastructures"}
              name={
                "Witval develops & maintains convenient end-user tools such as mintscan block explorer, Cosmostation mobile and web wallet."
              }
            />
          </div>
          <div className="highlight__card bg-[#EDD4D6] w-[50%] mb-20">
            <HighlightCard
              value={"Governance Participation"}
              name={
                "Witval actively monitors & votes for on-chain governance proposals to contribute to networks’ decentralization."
              }
            />
          </div>
          <div
            style={{
              backgroundImage: "url(/validator-highlights.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              backgroundSize: "800px 800px",
              minHeight: "100%",
              minWidth: "100%",
              position: "absolute",
              zIndex: -10,
              left: "0px"
            }}
            className="valBG"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Validator;

const HighlightCard = ({ value, name }) => {
  return (
    <div className="highlight__card__content">
      <div class="highlight__card__content__value">{value}</div>
      <div className="highlight__card__content__name">{name}</div>
    </div>
  );
};
