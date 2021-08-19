import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, setTitle }) => {
  console.log(blog);

  return (
    <div className="card">
      <div className="container">
        <h2>{blog.title}</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="single-blog">
          <button onClick={setTitle(blog.title)} className="btn">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
