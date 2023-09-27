import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../utils/utils";

const Products = () => {
  const bgImageStyle = {
    backgroundImage: "url(/products-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    minHeight: "100%",
    minWidth: "100%",
  };
  return (
    <div style={bgImageStyle} className="products__section">
      <div className="products">
        <h1>Our Products</h1>
        <div className="flex mobile:justify-end w-full py-[32px] tablet:py-[134px]">
          <div className="flex flex-col gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                link={product.link}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
