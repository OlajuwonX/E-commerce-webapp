import React, { useState, useEffect } from "react";
import "./Banner.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  const transition = {
    type: "spring",
    duration: 1,
    ease: "easeInOut",
    delay: 0.5,
  };

  const [selected, setSelected] = useState(0);

  const recent = [
    {
      h3: "Apple Iphone 12 Pro Max 512GB",
      p: "₦879,000.00",
      img: "./Assets/pro-max.png",
      alt: "Iphone 12 Pro Max",
    },
    {
      h3: "Airpod Pro",
      p: "₦150,400.00",
      img: "./Assets/airpod-pro.png",
      alt: "Airpod pro",
    },
    {
      h3: "Acer Aspire 2 in 1 Laptop 16GB 256SSD",
      p: "₦370,000.00",
      img: "./Assets/acer.png",
      alt: "Acer",
    },
    {
      h3: "Green Gucci Purse",
      p: "₦720,000.00",
      img: "./Assets/greengucci.png",
      alt: "Gucci Purse",
    },
    {
      h3: "Samsung Galaxy Smartwatch",
      p: "₦325,000.00",
      img: "./Assets/galaxy-watch.png",
      alt: "Galaxy Smartwatch",
    },
    {
      h3: "Versace Men Shirt",
      p: "₦123,050.00",
      img: "./Assets/versace-men.png",
      alt: "Shirt",
    },
    {
      h3: "Rabbit Vibrator (20% Off)",
      p: "₦11,000.00",
      img: "./Assets/rabbit.webp",
      alt: "Vibrator",
    },
    {
      h3: "Macbook M3 2023 15INCHES 16GB 1TB SSD",
      p: "₦3,231,000.00",
      img: "./Assets/macbook-m3.png",
      alt: "Mac M3",
    },
    {
      h3: "PS5",
      p: "₦687,000.00",
      img: "./Assets/Ps5.webp",
      alt: "PS5",
    },
  ];

  // Cycle through the array at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % recent.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [recent.length]);

  return (
    <div className="banner">
      <div className="banner-container">
        {/* Static H4 */}
        <h4>LATEST PRODUCT ADDED</h4>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            className="banner-detail"
          >
            <motion.h3>{recent[selected].h3}</motion.h3>
            <motion.p>{recent[selected].p}</motion.p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            className="banner-imgbox"
          >
            <img src={recent[selected].img} alt={recent[selected].alt} />
          </motion.div>
        </AnimatePresence>
        <Link to="/product" className="link">
          Shop Now <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
