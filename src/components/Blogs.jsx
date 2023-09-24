import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="home__blogs">
      <div className="home__blogs__head">
        <div className="home__blogs__head__title">
          <h1>Blogs</h1>
        </div>
        <div className="home__blogs__head__link">
            <Link target="_blank" to="https://www.google.com">Read More Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
