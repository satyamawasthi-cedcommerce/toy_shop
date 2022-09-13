import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";
export default function Offers() {
  return (
    <>
    {/* these are  the offers that enchane ccd feature */}
      <div className="offerContainer">
        <div className="headContent">
          <h1 className="offersHeading">
            Be with us for the most amazing offers
          </h1>
          <img src="./123.png" alt="..." style={{ width: "22%" }} />
        </div>

        <div className="offersDiv">
          <div className="offers">
            <h3>
              Upto 30% <br />
              off on first purchase
            </h3>
          </div>
          <div className="offers1">
            <h3>
              Shop fot 5000
              <br />
              Get assured Vouchers
            </h3>
          </div>
          <div className="offers2">
            <h3>
              Special discounts
              <br />
              On gift hampers
            </h3>
          </div>
        </div>
        <Link to="/shop">
          <button className="offerbtn">Get Started <i className="fa-solid fa-arrow-right"></i></button>
        </Link>
        <div>
          <img
            src="./doodle-6 1.png"
            alt="..."
            style={{ width: "10%", marginRight: "80%" }}
          />
        </div>
      </div>
    </>
  );
}
