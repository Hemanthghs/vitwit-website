import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import BlogImage1 from "../assets/blog1.jpeg";
import BlogImage2 from "../assets/blog2.png";
import BlogImage3 from "../assets/blog3.png";

const Blogs = () => {
  return (
    <div className="home__blogs">
      <div className="home__blogs__head">
        <div className="home__blogs__head__title">
          <h1>Blogs</h1>
        </div>
        <div className="home__blogs__head__link">
          <Link target="_blank" to="https://medium.com/vitwit">
            Read More Blogs
          </Link>
        </div>
      </div>
      <div className="home__blogs__list">
        <div className="lg:col-span-2">
          <BlogCard blogImage={BlogImage1} />
        </div>
        <div className="home__blogs__list__2">
          <BlogCard blogImage={BlogImage2} />
          <BlogCard blogImage={BlogImage3} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
