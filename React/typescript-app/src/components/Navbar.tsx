import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className='item'>Profile</li>
        <li className='item'>Messages</li>
        <li className='item'>News</li>
        <li className='item'>Music</li>
        <li className='item'>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
