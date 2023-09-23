import React from "react";
import CountUp from "react-countup";

const StatsCard = ({ value, name }) => {
  return (
    <div className="stats__card__content">
      <div class="stats__card__content__value">
        +<CountUp start={0} end={value} duration={2} />
      </div>
      <div className="stats__card__content__name">{name}</div>
    </div>
  );
};

export default StatsCard;
