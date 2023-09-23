import React from "react";
import CountUp from "react-countup";

const StatsCard = ({ value, name, bgColor }) => {
  return (
    <div className={`bg-[${bgColor}] stats__card`}>
      <div className="stats__card__content">
        <div className="stats__card__content__value">
          <CountUp start={0} end={value} duration={2} />+
        </div>
        <div className="stats__card__content__name">{name}</div>
      </div>
    </div>
  );
};

export default StatsCard;
