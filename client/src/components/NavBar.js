import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link style={{margin:"10px", padding: "10px", backgroundColor: "yellow"}} to="/">HOME</Link>
      <Link style={{margin:"10px", padding: "10px", backgroundColor: "yellow"}} to="/leagues">LEAGUES</Link>
    </div>
    )
  }

export default NavBar;