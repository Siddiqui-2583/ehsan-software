import React from 'react';
import './BlogGrid.css'
import BlogCard from '../BlogCard/BlogCard'
const BlogGrid = ({ blogs,setTitle}) => {
    
    return (
      <div className="product-grid">
        {blogs.map((blog) => (
          <BlogCard blog={blog} setTitle={setTitle} />
        ))}
      </div>
    );
};

export default BlogGrid;