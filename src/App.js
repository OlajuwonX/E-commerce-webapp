import React, { useState } from 'react';
import Nav from './Components/Nav/Nav.jsx';
import { BrowserRouter } from 'react-router-dom';
import Rout from './Components/Rout/Rout.jsx';
import './app.css';
import Footer from './Components/Footer/Footer.jsx';
import Items from './Components/Product/Items.js';

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const App = () => {
  /* To close modal */
  const [close, setClose] = useState(false);

  /* Item Details */
  const [detail, setDetail] = useState([]);

  /* Filter Products */
  const [product, setProduct] = useState(Items);
  const searchbtn = (product) => {
    const filteredProduct = Items.filter((x) => {
      return x.Cat === product;
    });
    setProduct(filteredProduct);
  };

  /* Add to cart */
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    /* function to add to cart */
    const itemCarted = cart.find((item) => item.id === product.id);

    if (itemCarted) {
      alert('Product already added to cart!!!');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Product successfully added to cart!!!');
    }
  };

  /* Single Product Detail */
  const view = (product) => {
    setDetail([{ ...product }]);

    /* to close view */
    setClose(true);
  };

  /* Dark mode state */
  const [darkMode, setDarkMode] = useState(false);

  /* Toggle dark mode */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <BrowserRouter>
        <button onClick={toggleDarkMode} className="theme-toggle" style={{
          backgroundColor: darkMode ? '#ffffff' : '#121212',
          color: darkMode ? '#121212' : '#ffffff',
        }}>
          {darkMode ? <CiLight /> : <MdDarkMode />}
        </button>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
