import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import BlogImage1 from "../assets/blog1.jpeg";
import BlogImage2 from "../assets/blog2.png";
import BlogImage3 from "../assets/blog3.png";
import { CopyIcon } from "../assets/Icons";
import { mediumArticles } from "../utils/utils";

const Blogs = () => {
  return (
    <div className="flex-center mobile:mb-10">
      <div className="home__blogs w-[80%] lg:w-full">
        <div className="home__blogs__head">
          <div className="home__blogs__head__title">
            <h1>Blogs</h1>
          </div>
          <div className="home__blogs__head__link">
            <Link target="_blank" to="https://medium.com/vitwit">
              <span className="mr-[10px]">Read More Blogs</span>
              <CopyIcon />
            </Link>
          </div>
        </div>
        <div className="home__blogs__list">
          <div className="lg:col-span-2">
            <BlogCard
              blogImage={BlogImage1}
              link={mediumArticles[0].link}
              title={mediumArticles[0].title}
              date={mediumArticles[0].date}
              author={mediumArticles[0].author}
            />
          </div>
          <div className="home__blogs__list__2">
            <BlogCard
              blogImage={BlogImage2}
              link={mediumArticles[1].link}
              title={mediumArticles[1].title}
              date={mediumArticles[1].date}
              author={mediumArticles[1].author}
            />
            <BlogCard
              blogImage={BlogImage3}
              link={mediumArticles[2].link}
              title={mediumArticles[2].title}
              date={mediumArticles[2].date}
              author={mediumArticles[2].author}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
