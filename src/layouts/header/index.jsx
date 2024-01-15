import React from "react";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./index.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <p>
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" />
        </p>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Features</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <FaSearch />
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaRegHeart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
