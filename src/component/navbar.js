import React from "react";

export default function Navbar() {
 return (
  <nav>
   <img src={require("../images/icon.png")} className="nav-logo" />
   <h3 className="nav-facts">React Facts</h3>
   <h4 className="nav-course">React Course</h4>
  </nav>
 )
}

