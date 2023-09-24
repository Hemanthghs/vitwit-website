import React from "react";
import HomeImage from "../assets/HomeImage.png";
import HomeImage2 from "../assets/HomeImage2.png";
import Navbar from "../components/Navbar";
import { stats } from "./utils";
import CountUp from "react-countup";
import Witval from "../components/Witval";
import OpenSource from "../components/OpenSource";
import OpenSourceGlimpse from "../components/OpenSourceGlimpse";
import Partners from "../components/Partners";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="home__first__container">
        <Navbar />
        <div className="home__first__container__1">
          <div className="tablet:w-[57%]">
            <h1 className="home__first__container__1__title">
              <h1 className="home__first__container__1__title inline tablet:block">
                Blockchain&nbsp;|&nbsp;Cloud&nbsp;
              </h1>
              <h1 className="home__first__container__1__title inline tablet:block">
                {" "}
                &&nbsp;DevOps
              </h1>
            </h1>
            <div className="home__first__container__1__text">
              <p>
                <div className="mb-3 lg:mb-[22px]">
                  <span>We&nbsp;are&nbsp;offering</span>
                  <span className="bg-[#F8CFA566] ml-1 lg:ml-4 topic">
                    Staking&nbsp;Infrastructure&nbsp;Service
                  </span>
                </div>
                <div className="mb-3 lg:mb-[22px]">
                  <span className="bg-[#DCB8F566] mr-1 lg:mr-4 topic">
                    Development&nbsp;Service
                  </span>
                  <span>Blockchain&nbsp;Research</span>
                </div>
                <div className="mb-3 lg:mb-[22px]">
                  <span>and</span>
                  <span className="bg-[#BCDCF766] mx-1 lg:mx-4 topic">
                    Service&nbsp;Strategy&nbsp;&&nbsp;execution
                  </span>
                  <span>Along&nbsp;with</span>
                </div>
                <div>
                  <span>our</span>
                  <span className="bg-[#ECF8A566] ml-1 lg:ml-4 topic">
                    Block&nbsp;Explorer
                  </span>
                </div>
              </p>
            </div>
          </div>
          <div className="tablet:w-[40%] mt-4 tablet:mt-0 flex-center">
            <img
              className="w-[75%] tablet:w-[100%]"
              src={HomeImage2}
              alt="Image"
            />
          </div>
        </div>
        <Stats />
      </div>
      <Witval />
      <OpenSource />
      <OpenSourceGlimpse />
      <Partners />
      <section id="bg">
      <Blogs />
      </section>
      <Footer />
    </div>
  );
};

export default Home;

const Stats = () => {
  return (
    <div className="home__first__container__stats">
      {stats.map((stat, index) => (
        <Stat key={index} value={stat.value} name={stat.name} />
      ))}
    </div>
  );
};

const Stat = ({ value, name }) => {
  return (
    <div className="stat">
      <div className="stat__value">
        <CountUp start={0} end={value} duration={2} />+
      </div>
      <div className="stat__name">{name}</div>
    </div>
  );
};
