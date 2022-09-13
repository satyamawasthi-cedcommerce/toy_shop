import React from "react";
import { Link } from "react-router-dom";
import './Checkout.css'
var totalAmount = 0;
export default function Checkout(props) {
  // checkout function
  var finalOrder = () => {
    alert("order Successfully Placed");
    props.setCartArr([]);
    totalAmount = 0;
    window.location.reload();
  };
  return (
    <>
      <div className="checkoutPageDiv">
        <div className="InfoDiv">
          <h1 className="detailsDiv">Enter your details</h1>
          <div className="formDiv">
            <label for="email">Email:</label>
            <input
              type="text"
              placeholder="Enetr your Email"
              className="imputmail"
            />
            <br />
            <label for="email">Name:</label>
            <input
              type="text"
              placeholder="Enetr your Name"
              className="imputmail"
            />
            <br />
            <label for="email">Mobile:</label>
            <input
              type="text"
              placeholder="Enetr your Phone no."
              className="imputmail"
            />
            <br />
            <label for="email">Address:</label>
            <input
              type="text"
              placeholder="Enetr your Address"
              className="imputmail"
            />
          </div>
        </div>
        <div className="confirmOrder">
          <h1 className="confirmHead">Confirm Your order and proceed</h1>
          <table className="orderSummary">
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product Amount</th>
            </tr>
            {props.cartArr.map((item) => (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.quantity}*{item.sellingPrice} ={" "}
                    {item.quantity * item.sellingPrice}
                  </td>
                </tr>
                <p style={{ display: "none" }}>
                  {(totalAmount += item.sellingPrice * item.quantity)}
                </p>
              </>
            ))}
          </table>
          <hr style={{ width: "95%", marginLeft: "5%" }} />
          <h3>Your Bill amounts to: &#8377;{totalAmount}</h3>
          <hr style={{ width: "95%", marginLeft: "5%" }} />
          <button className="finalOrderBtn" onClick={finalOrder}>
            Proceed to place order
          </button>
        </div>
      </div>
      <Link to="/shop">
        <button className="continueShop">Continue Shopping</button>
      </Link>
    </>
  );
}
