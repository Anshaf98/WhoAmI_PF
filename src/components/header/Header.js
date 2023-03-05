import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    setShow((show) => !show);
  };

  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dpakxje91/image/upload/v1666016162/a_bk5msv.png"
          alt=""
        />
        <span>Mohamed</span>
      </div>

      <div className="right">
        <div className="bar" onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className="menu">
          <ul
            className="menu menu01"
            style={{ display: show ? "flex" : "none" }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
            <li>eng</li>
          </ul>
        </div>
        <input type="text" className="search" />
        <AiOutlineHeart className="heart" />
      </div>
    </div>
  );
};

export default Header;
