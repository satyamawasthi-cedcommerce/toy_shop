import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header(props) {
  return (
    <>
      <header className="headercomponent">
        <div className="logoDiv">
          {/* navigation through router dom */}
          <Link to="/">
            <img src="./logo1.png" alt="..." className="logo" />
          </Link>
        </div>
        <div className="headerContent">
          <Link to="/about" className="link">About</Link>
          <Link to="/shop" className="link">Shop</Link>
          <Link to="/cart" className="link"><i className="fa-solid fa-cart-shopping"></i> <sup>{props.cartArr.length}</sup></Link>
        </div>
      </header>
    </>
  );
}
