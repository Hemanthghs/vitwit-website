import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ link = "https://www.google.com", blogImage }) => {
  return (
    <div className="blog__card">
      <Link to={link} target="_blank">
        <div>
          <div>
            <img src={blogImage} alt="" />
          </div>
          <div className="px-4 mt-2">
            <div className="blog__card__date">
              August 9th 2022 | 5 Minutes read
            </div>
            <h2 className="blog__card__title">
              Recap of the Vitwit AMA with Matic Network
            </h2>
            <div className="blog__card__author">Murthy Vitwit</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
