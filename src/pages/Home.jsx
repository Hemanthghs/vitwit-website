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
            <div>
              
            </div>
          </div>
          <div className="tablet:w-[40%] flex-center">
            <img className="w-[75%] tablet:w-[100%]" src={HomeImage2} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
