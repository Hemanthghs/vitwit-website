import React from "react";
import HomeImage from "../assets/HomeImage.png";
import HomeImage2 from "../assets/HomeImage2.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="home__first__container">
        <Navbar />
        <div className="home__first__container__1">
          <div className="tablet:w-[55%]">
            <h1 className="home__first__container__1__title">
              Blockchain&nbsp;|&nbsp;Cloud &&nbsp;DevOps
            </h1>
            <div className="home__first__container__1__text">
              <p>
                <div className="mb-3 lg:mb-[22px]">
                  <span>We&nbsp;are&nbsp;offering</span>
                  <span className="bg-[#F8CFA566] ml-1 lg:ml-4 topic">Staking&nbsp;Infrastructure&nbsp;Service</span>
                </div>
                <div className="mb-3 lg:mb-[22px]">
                  <span className="bg-[#DCB8F566] mr-1 lg:mr-4 topic">Development&nbsp;Service</span>
                  <span>Blockchain&nbsp;Research</span>
                </div>
                <div className="mb-3 lg:mb-[22px]">
                  <span>and</span>
                  <span className="bg-[#BCDCF766] mx-1 lg:mx-4 topic">Service&nbsp;Strategy&nbsp;&&nbsp;execution</span>
                  <span>Along&nbsp;with</span>
                </div>
                <div>
                  <span>our</span>
                  <span className="bg-[#ECF8A566] ml-1 lg:ml-4 topic">Block&nbsp;Explorer</span>
                </div>
              </p>
            </div>
          </div>
          <div className="tablet:w-[40%] flex-center">
            <img
              className="w-[75%] tablet:w-[100%]"
              src={HomeImage2}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
