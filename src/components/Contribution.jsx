import React from "react";
import AkashLogo from "../assets/chain-logos/akash.png"

const Contribution = () => {
  return (
    <div className="contribution">
      <div>
        <img src={AkashLogo} alt="" />
      </div>
      <div className="contribution__title">Title should not be more than this place holder</div>
      <div className="contribution__pr">PR #1234</div>
      <div className="contribution__desc">
        Loris ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
        semper massa, non ultrices ipsum placerat non. Vestibulum id odio ut
        eros convallis congue.
      </div>
    </div>
  );
};

export default Contribution;
