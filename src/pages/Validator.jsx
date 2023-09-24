import React from "react";
import Navbar from "../components/Navbar";
import { AssetsIcon, NetworkIcon, StakedIcon } from "../assets/Icons";
import CountUp from "react-countup";

const Validator = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <div
          style={{
            backgroundImage: "url(/validator-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
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
            <div className="flex justify-around mt-20">
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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Validator;
