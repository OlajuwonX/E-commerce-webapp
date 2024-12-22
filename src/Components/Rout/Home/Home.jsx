import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import Items from "../Items/Items";
import About from "../About/About";
import HomeProduct from "../HomeProducts/HomeProduct";
import Banner from "../Banner/Banner";

import "./Home.css";

const Home = ({ detail, view, close, setClose, addToCart }) => {
  const gadgets = [
    {
      Img: "./Assets/ps5-controller.webp",
    },
    {
      Img: "./Assets/ps4.png",
    },
    {
      Img: "./Assets/macbook-m3.png",
    },
  ];

  const [currentGadgetIndex, setCurrentGadgetIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through the gadgets array
    const interval = setInterval(() => {
      setCurrentGadgetIndex((prevIndex) => (prevIndex + 1) % gadgets.length);
    }, 10000); // 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [gadgets.length]);

  return (
    <>
      {/* Banner Section */}
      <div className="home-banner">
        <div className="home-container">
          <div className="home-detail">
            <h2>The Best Gadgets Collection of 2024</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: "1" }}
            transition={{ duration: "2.5", type: "ease-in" }}
            className="home-imgbox"
          >
            <img
              src={gadgets[currentGadgetIndex].Img}
              alt={`Gadget ${currentGadgetIndex + 1}`}
            />
          </motion.div>
        </div>
      </div>
      <Items />
      <HomeProduct
        detail={detail}
        view={view}
        close={close}
        setClose={setClose}
        addToCart={addToCart}
      />
      <Banner />
      <About />
    </>
  );
};

export default Home;
