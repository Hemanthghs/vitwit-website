import React from "react";
import AkashLogo from "../assets/chain-logos/akash.png"

const Contribution = ({pr, gradient, logo}) => {
  return (
    <div className={`contribution ${gradient}`}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="contribution__title">Title should not be more than this place holder</div>
      <div className="contribution__pr">PR #{pr}</div>
      <div className="contribution__desc">
        Loris ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
        semper massa, non ultrices ipsum placerat non. Vestibulum id odio ut
        eros convallis congue.
      </div>
    </div>
  );
};

export default Contribution;
