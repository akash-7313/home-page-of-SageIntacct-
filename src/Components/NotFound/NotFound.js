import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const notfoundStyle = {
    color: "lightblue",
    display: "inline-block",
    padding: "30px",
    border: "7px solid lightblue",
    borderRadius: "50%",
  };

  return (
    <div className="text-center py-5 my-5">
      <h2 style={notfoundStyle}>404</h2>
      <h4 className="text-secondary">Page not found</h4>
      <p className="text-secondary">You are in a wrong direction.</p>
      <NavLink to="/" className="text-decoration-none fw-bold">
        Go home?
      </NavLink>
    </div>
  );
};

export default NotFound;
