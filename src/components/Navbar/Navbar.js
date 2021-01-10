import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
      <nav id = "navbar">
        <ul>
          <li>
            <Link to="/">КАЛЕНДАРЬ</Link>
          </li>
          <li>
            <Link to="/students">СТУДЕНТЫ</Link>
          </li>
          <li>
            <Link to="/programs">ПРОГРАММЫ</Link>
          </li>
        </ul>
      </nav>
  );
};
