import React from "react";
import logo from "../../images/tmdb.JPG";
import "./Header.css";
const Header = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <nav>
        <a href="/Menu">Menu</a>
        <a href="/Order">Order</a>
        <a href="/Review">Review</a>
        <a href="/Today's Offer">Today's Offer</a>
      </nav>
    </div>
  );
};

export default Header;
