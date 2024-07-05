import React, { useState } from "react";
import Bloglist from "./bloglist";
import useFetch1 from "./useFetch1";


function Home() {
  const { data, isPending, error } = useFetch1("http://localhost:8000/blog");

  const [value, setValue] = useState(false);
  const handleClick = () => {
    setValue(!value);
  };


  return (
    <div className="Home">
      {error && <div>{error}</div>}
      <h2>homepage</h2>
      <p>{value ? "aaa" : ""}</p>
      <button onClick={handleClick}>click me</button>
      {isPending && <div>loading...</div>}
      {data && <Bloglist blogsProperty={data} titleProperty="All Blogs!" />}
      {/* function (handleDelete) ko props  ki tra use kiya  */}
      {data && (
        <Bloglist
          blogsProperty={data.filter((data) => data.author === "mario")}
          titleProperty="Mario's blogs"
        />
      )}

    
    </div>
  );
}

export default Home;
