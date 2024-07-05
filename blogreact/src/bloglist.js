import React from "react";
import { NavLink } from "react-router-dom";

const Bloglist = ({ blogsProperty, titleProperty }) => {
  //NOTE  const  blogsProperty=props.blogsProperty;
  // NOTE   const titleProperty=props.titleProperty;

  return (
    <div className="bloglist">
      <h2>{titleProperty}</h2>
      {blogsProperty.map((blog) => (
        <div className="blog-preview" key={blog.id}>

          <NavLink to ={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author} </p>
          </NavLink>

          <div className="votes">
            <div>
              <button >upVotes</button>
              <p>downVotes</p>
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
