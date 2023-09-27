import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, description, link }) => {
  return (
    <Link to={link} target="_blank" className="product__card">
      <h2>{name}</h2>
      <div>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
