import React from "react";
import { Outlet, Link } from "react-router-dom"; // telling the nav bar to render child components nested in it, outlet component does this
import "./styles.css";

const Navbar = ({ isLogged }) => {
  return (
    <> 
      <nav> 
        <Link to={"/"} className="logo-nav"> Git Explorer </Link> 
        <div className="link-cont">
          <Link to={"/"}>Repos</Link> 
          <Link to={"/users"}>Users</Link>
          <Link to={"/search"}>Search</Link>
          <Link to={"/authProfile"}>Profile</Link>
          {!isLogged && <Link to={"/login"}>Login</Link>}
        </div>
      </nav>
      <Outlet /> 
    </> // the outlet tag above for the nested routes
  );
};

export default Navbar;
