

import React from 'react';
import './blogCard.css';
import img1 from '../images/blog-author-1.jpg';
import img2 from '../images/blog-author-2.jpg';
import img3 from '../images/blog-author-3.jpg';
import img4 from '../images/blog-author-4.jpg';
import blog1 from '../images/blog-1.jpeg';
import blog2 from '../images/blog-2.jpeg';
import blog3 from '../images/blog-3.jpeg';
import blog4 from '../images/blog-4.jpeg';

const BlogCard = ({ blog }) => {
  // Map author and blog images dynamically
  const authorImages = {
    "blog-author-1.jpg": img1,
    "blog-author-2.jpg": img2,
    "blog-author-3.jpg": img3,
    "blog-author-4.jpg": img4,
  };

  const blogImages = {
    "../images/blog-1.jpeg": blog1,
    "../images/blog-2.jpeg": blog2,
    "../images/blog-3.jpeg": blog3,
    "../images/blog-4.jpeg": blog4,
  };

  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
      <article>
        <div className="post-img">
          <img
            src={blogImages[blog.thumbnail]} // Dynamically map the thumbnail
            alt={blog.title}
            className="img-fluid"
          />
        </div>
        <p className="post-category">{blog.category}</p>
        <h2 className="title">
          <a href="#">{blog.title}</a>
        </h2>
        <div className="d-flex align-items-center">
          <img
            src={authorImages[blog.author.image]} // Dynamically map the author image
            alt={blog.author.name}
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author-list">{blog.author.name}</p>
            <p className="post-date">
              <time dateTime={blog.date}>{blog.date}</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
