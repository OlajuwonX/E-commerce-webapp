import React, { useState, useEffect } from "react";
import "./Items.css";
import { IoTicket } from "react-icons/io5";

const Items = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          return 24 * 60 * 60; // Reset to 24 hours
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const products = [
    {
      src: "./Assets/iphone12.jpg",
      alt: "iPhone 12",
      details: "11 items left",
    },
    {
      src: "./Assets/rolex-datejust.jpg",
      alt: "Rolex Watch",
      details: "6 items left",
    },
    {
      src: "./Assets/hyatti.png",
      alt: "Perfumes",
      details: "3 items left",
    },
    {
      src: "./Assets/airpod2.jpeg",
      alt: "AirPods",
      details: "17 items left",
    },
  ];

  return (
    <div className="p-type">
      <div className="p-sale">
        <IoTicket />
        <div className="p-flash">
          <p>Flash Sale</p>
          <p>{formatTime(timeLeft)}</p>
        </div>
      </div>

      <div className="p-container">
        {products.map((product, i) => (
          <div className="p-box" key={i}>
            <div className="p-boxImg">
              <img src={product.src} alt={product.alt} />
            </div>
            <div className="p-details">
              <p>{product.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
