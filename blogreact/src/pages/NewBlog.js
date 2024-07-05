import React, { useState } from "react";


function NewBlog() {
  const [blogData1, setBlogData1] = useState("");
  const[author,setAuthor]=useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`blog written :${blogData1}
    author name:${author}`);

  };
  const [blogs2, setBlogs2] = useState([]);

  // Function to add a new blog to the list
  const addBlog = (newBlog112) => {
    setBlogs2([...blogs2, newBlog112]);
  };


  return (
    <div>
      <h1> create a new blog here !</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          <b>write your blog</b>
          <br />
          {/* creating a textarea*/}
          <textarea
            value={blogData1}
            rows={20}
            cols={100}
            placeholder="write your blog...."
            onChange={(e) => setBlogData1(e.target.value)}
            requried
          />
        </label>
        <br />
        <label>
          <b>written by</b>
          <input type="text" placeholder="Author name" value={author} onChange={(t)=>setAuthor(t.target.value)} />
        </label>
        <br />
        {blogs2&&blogs2.map((blog2, index) => (
        <NewBlog key={index} {...blogs2} />
      ))}
    <div> {addBlog}</div>
        <button className="submitblog" type="submit" >
          submit
        </button>
      </form>
    </div>
  );
}

export default NewBlog;
