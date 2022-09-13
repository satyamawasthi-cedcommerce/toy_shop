import React from "react";
import { Link } from "react-router-dom";
import './Cart.css'
var totalAmount = 0;
export default function Cart(props) {
  // empty cart festure
  var emptyCart = () => {
    if (window.confirm("Are you sure you want to delete everything from cart?"))
      props.setCartArr([]);
  };
  // delete individual product functionality
  var deleteCartItem = (id) => {
    if (window.confirm("Are you sure you want to delete item from cart?"))
      props.setCartArr(props.cartArr.filter((cartItem) => cartItem.id !== id));
  };
  // decrease quantity functionality
  var quantMinus = (productId) => {
    props.setCartArr(
      props.cartArr.filter((cartItem) => {
        if (cartItem.id === productId) {
          if (cartItem.quantity === 1) {
            if (window.confirm("Are you sure you want to remove product"))
              return false;
          } else {
            cartItem.quantity -= 1;
            return cartItem;
          }
        }
        return cartItem;
      })
    );
  };
  // increase quantity functionality
  var quantplus = (productId) => {
    props.setCartArr(
      props.cartArr.map((cartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity += 1;
        }
        return cartItem;
      })
    );
  };
  // rendering if cart array is empty
  if (props.cartArr.length === 0) {
    return (
      <>
        <h1 className="emptyCarthead"> Your cart has no Products added!!</h1>
        <img
          src="https://exidechennai.com/images/emptycart.png"
          alt="..."
          style={{ marginTop: "5%" ,width:"50%"}}
        />
      </>
    );
  }
  return (
    <div className="cartContainer">
      <div className="cartDiv">
        <h2 className="cartList">Here is the list of products added.</h2>
        {props.cartArr.map((item, index) => (
          <>
            <div className="individualCartItem">
              <div style={{ width: "30%" }}>
                <img
                  src={item.image}
                  alt="..."
                  style={{ width: "70%", borderRadius: "10px" }}
                />
              </div>
              <div style={{ width: "60%", textAlign: "left" }}>
                <h3
                  style={{
                    fontFamily: "'Roboto Serif', serif",
                    marginTop: "2%",
                  }}
                >
                  {item.name}{" "}
                </h3>
                <h4 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  &#8377; {item.sellingPrice * item.quantity}
                </h4>
                <h3>
                  {" "}
                  Qunatity:{" "}
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#1d2e50" }}
                    onClick={() => quantplus(item.id)}
                  ></i>{" "}
                  {item.quantity}{" "}
                  <i
                    className="fa-solid fa-circle-minus"
                    style={{ color: "#1d2e50" }}
                    onClick={() => quantMinus(item.id)}
                  ></i>
                </h3>
                <button
                  onClick={() => deleteCartItem(item.id)}
                  className="removeItem"
                >
                  Delete item <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* rendering bill */}
      <div className="billDiv" id="bill" style={{ width: "40%" }}>
        <h2 className="billHead">Here is your Bill</h2>
        <hr style={{ width: "95%" }} />
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
        <hr style={{ width: "90%", marginLeft: "5%" }} />
        <h3>Your Bill amounts to: &#8377;{totalAmount}</h3>
        <hr style={{ width: "95%", marginLeft: "5%" }} />
        <Link to="/checkout">
          <button className="checkoutbtn">
            Checkout <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </Link>

        <button className="emptyCartbtn" onClick={emptyCart}>
          Empty cart <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
}
