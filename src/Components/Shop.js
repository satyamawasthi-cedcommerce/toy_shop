import React, { useState } from 'react'
import productCredentials from './Products'
import './Shop.css'
export default function Shop(props) {
  // state variable to store the value inputted in the search box
  const [search, setSearch] = useState();
  // add to cart functionality
  var addtoCart = (item) => {
    var pid = item.id;
    var cartProduct = props.cartArr.find((item) => item.id === pid);
    if (cartProduct) {
      props.setCartArr(
        props.cartArr.filter((item) => {
          if (item.id === pid) {
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        })
      );
    } else {
      props.setCartArr([...props.cartArr, { ...item, quantity: 1 }]);
    }
  };
  // search functionality
  var searchProduct = (event) => {
    setSearch(event.target.value);
  };
  // print all products
  var printWhole = () => {
    return (
      <>
        {productCredentials.map((item, index) => (
          <>
            <div className="individualDiv">
              <img src={item.image} alt="///" style={{maxWidth:"100%", width: "500px" }} />
              <div className="productSDetails">
                <h3 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  {item.name}({item.category})
                </h3>
                <h4 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  Previous Price:{" "}
                  <span
                    style={{
                      color: "grey",
                      textDecoration: "line-through",
                      fontFamily: "'Roboto Serif', serif",
                    }}
                  >
                    &#8377; {item.markedPrice}{" "}
                  </span>
                </h4>
                <h4 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  Discounted Price:{" "}
                  <span style={{ fontFamily: "'Roboto Serif', serif" }}>
                    &#8377; {item.sellingPrice}{" "}
                  </span>
                </h4>
                <button onClick={() => addtoCart(item)}>Add To Cart</button>
              </div>
            </div>
          </>
        ))}
      </>
    );
  };
  // print searched products
  var printSearch = (itemSearched) => {
    var tempProductArr = [];
    productCredentials.map((item) => {
      if (item.name.toLowerCase().includes(itemSearched.toLowerCase())) {
        tempProductArr = [...tempProductArr, item];
      }
    });
    if (tempProductArr.length === 0) {
      return (
        <>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQpJnnPzhDYwOTr9S8quxVfMhbjcWiD9Haw&usqp=CAU"
            alt="..."
          />
        </>
      );
    }
    return (
      <>
        {tempProductArr.map((item, index) => (
          <>
            <div className="individualDiv">
              <img src={item.image} alt="///" style={{ width: "100%" }} />
              <div className="productSDetails">
                <h3 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  {item.name}({item.category})
                </h3>
                <h4 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  Previous Price:{" "}
                  <span
                    style={{
                      color: "grey",
                      textDecoration: "line-through",
                      fontFamily: "'Roboto Serif', serif",
                    }}
                  >
                    &#8377; {item.markedPrice}{" "}
                  </span>
                </h4>
                <h4 style={{ fontFamily: "'Roboto Serif', serif" }}>
                  Discounted Price:{" "}
                  <span style={{ fontFamily: "'Roboto Serif', serif" }}>
                    &#8377; {item.sellingPrice}{" "}
                  </span>
                </h4>
                <button onClick={() => addtoCart(item)}>Add To Cart</button>
              </div>
            </div>
          </>
        ))}
      </>
    );
  };
  return (
    <>
      <div>
        <div className="shopDiv">
          <input
            type="text"
            placeholder="Enter the toy you are looking for"
            className="search"
            onChange={searchProduct}
            value={search}
          />
        </div>
        <div className="productsDiv">
          {/* conditionally rendering the products */}
          {search ? printSearch(search) : printWhole()}
        </div>
      </div>
    </>
  );
}
