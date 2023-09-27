import React from "react";
import AkashImage from "../assets/chain-logos/akash.png";

const PartnerCard = ({logo}) => {
  return (
    <div className="partner__card">
      <div className="partner__card__content">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <span className="partner__card__content__name">Akash</span>
        </div>
        <div className="partner__card__content__text">
          <p>
            Akash Network, the world’s first decentralized and open-source
            cloud, accelerates deployment.
          </p>
        </div>
        <div className="partner__card__content__year">2021</div>
      </div>
    </div>
  );
};

export default PartnerCard;
