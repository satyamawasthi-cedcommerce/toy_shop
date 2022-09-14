import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
export default function Categories() {
  return (
    // returning JSX
    <>
    {/* here are the render of the categories that products are divided into */}
      <div className="categoriesContainer">
        <h1 className="categoriesHead">Find the best of all categories</h1>
        <div className="categoriesDiv">
          <div style={{ width: "30%" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0696/9637/products/EleandPlush_1024x1024.jpg?v=1653995089"
              alt="..."
              style={{ width: "50%", borderRadius: "0 25px 0 25px" }}
            />
            <h3 className="cat_head">For New Born</h3>
            <br />
            <Link to="/shop">
              <button className="categorybtn">Explore <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
          </div>
          <div style={{ width: "30%" }}>
            <img
              src="./Gift Basket For 2.jpg"
              alt="..."
              style={{ width: "50%", borderRadius: "0 25px 0 25px" }}
            />
            <h3 className="cat_head">For New Born</h3>
            <br />
            <Link to="/shop">
              <button className="categorybtn">Explore <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
          </div>
          <div style={{ width: "30%" }}>
            <img
              src="https://rukminim1.flixcart.com/image/416/416/k6v2ykw0/stuffed-toy/e/p/7/teddy-bear-soft-toy-5-fit-152-ms-aradhyatoys-original-imafp823tf67g5ph.jpeg?q=70"
              alt="..."
              style={{ width: "48%", borderRadius: "0 25px 0 25px" }}
            />
            <h3 className="cat_head">For New Born</h3>
            <br />
            <Link to="/shop">
              <button className="categorybtn">Explore <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
