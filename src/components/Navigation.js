import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/comments">Comments</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};
export default Navigation;
