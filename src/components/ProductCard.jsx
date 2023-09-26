import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ name, description, link }) => {
  return (
    <NavLink to={link} target="_blank" className="product__card">
      <h2>{name}</h2>
      <div>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
