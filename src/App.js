// importing the necessary components
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

function App() {
  // state cart array
  const [cartArr, setCartArr] = useState([]);
  return (
    <div className="App">
      <Header cartArr={cartArr}/>
      {/* Navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop cartArr={cartArr} setCartArr={setCartArr}/>} />
        <Route path="/cart" element={<Cart cartArr={cartArr} setCartArr={setCartArr}/>} />
        <Route path="/checkout" element={<Checkout cartArr={cartArr} setCartArr={setCartArr}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
