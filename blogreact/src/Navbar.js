import React from "react";
import { NavLink,Outlet } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>The FutureTruth Blogs</h1>
      <div className="link">
        <NavLink to="/">home</NavLink>
        <NavLink to="/create"> New blog</NavLink>
        <NavLink to="/about">about us</NavLink>
      </div>
      <main><Outlet/></main>
    </nav>
  );
}

export default Navbar;
