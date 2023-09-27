import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ link, blogImage, title, date, author }) => {
  return (
    <div className="blog__card">
      <Link to={link} target="_blank">
        <div>
          <div>
            <img src={blogImage} alt="" />
          </div>
          <div className="px-4 mt-2">
            <div className="blog__card__date">{date}</div>
            <h2 className="blog__card__title">{title}</h2>
            <div className="blog__card__author">{author}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
