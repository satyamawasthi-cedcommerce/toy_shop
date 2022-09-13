import React from "react";
import { Link } from "react-router-dom";
import "./Ccd.css";
export default function Ccd() {
  return (
    // returning JSX
    <>
    {/* CCd componenet which converts the users to actively be on the site */}
      <div className="ccdDiv">
        <div className="ccdImg">
          <img src="./Saly-32.png" alt="..." className="imgc" />
        </div>
        <div className="ccdContent">
          <h1 className="head1">Pick the best toy</h1>
          <h1 className="head1">
            For <span className="ccdkid">Your Kid</span>
          </h1>
          <h3 className="ccdpara">
            Bright Ideas to banish boredom all summers,
            <br /> because a busy tot is a happy tot
          </h3>
          <Link to="/shop">
            <button className="btnShop">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
