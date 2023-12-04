import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo-img" className="logo" src={LOGO_URL} />
        <h4 className="food-hub">Food Hub</h4>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/body" className="link-list">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-list">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link-list">
              Contact us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
        {/* <RouterProvider>
                <Outlet/>
                </RouterProvider> */}

        <button
          type="button"
          className="login"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
