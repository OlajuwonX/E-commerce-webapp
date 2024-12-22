import React from "react";
import "./Rout.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import MAbout from "../MAbout/MAbout";

const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addToCart,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              setCart={setCart}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} key={cart.length} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<MAbout />} />
      </Routes>
    </>
  );
};

export default Rout;
