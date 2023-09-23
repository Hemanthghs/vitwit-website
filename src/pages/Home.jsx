import React from "react";
import HomeImage from "../assets/HomeImage.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <div className="pl-[120px] flex w-full flex-col tablet:flex-row">
          <div className="w-[55%]">
            <h1 className="text-[88px] font-bold text-[#333] leading-[80px]">
              Blockchain&nbsp;|&nbsp;Cloud &&nbsp;DevOps
            </h1>
            <div></div>
          </div>
          <div className="w-[40%]">
            <img className="w-[100%]" src={HomeImage} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
