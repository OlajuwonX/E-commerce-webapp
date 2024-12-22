import React from "react";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { BiHeadphone } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

import "./About.css";

const MAbout = () => {
  return (
    <div className="about">
      <div className="a-container">
        <div className="a-box">
          <div className="a-icon">
            <FaTruck />
          </div>
          <div className="a-detail">
            <h3>Free Shipping</h3>
            <p>Orders above ₦159,999</p>
          </div>
        </div>
        <div className="a-box">
          <div className="a-icon">
              <TbCurrencyNaira />
          </div>
          <div className="a-detail">
            <h3>Return & Refund</h3>
            <p>Money Back Guaranteed</p>
          </div>
        </div>
        <div className="a-box">
          <div className="a-icon">
            <HiOutlineReceiptTax />
          </div>
          <div className="a-detail">
            <h3>Member Discount</h3>
            <p>On Every Order</p>
          </div>
        </div>
        <div className="a-box">
          <div className="a-icon">
            <BiHeadphone />
          </div>
          <div className="a-detail">
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAbout;
