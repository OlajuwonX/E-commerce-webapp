import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f-container">
          <div className="f-about">
            <div className="f-wrapper">
              <div className="f-account">
                <h3>My Account</h3>
                <ul>
                  <Link className="link" to="/product">
                    <li>Order</li>
                  </Link>
                  <Link className="link" to="/cart">
                    <li>Cart</li>
                  </Link>
                  <Link className="link" to="/contact">
                    <li>shipping</li>
                  </Link>
                  <Link className="link" to="/contact">
                    <li>return</li>
                  </Link>
                  <Link className="link" to="/contact">
                    <li>Help Center</li>
                  </Link>
                  <Link className="link" to="/contact">
                    <li>Become a seller</li>
                  </Link>
                  <Link className="link" to="/contact">
                    <li>Report a product</li>
                  </Link>
                  <Link className="link" to="/product">
                    <li>Black Friday</li>
                  </Link>
                </ul>
              </div>

              <div className="f-page">
                <h3>Pages</h3>
                <ul>
                  <Link className="link" to="/">
                    <li>Home</li>
                  </Link>
                  <Link className="link" to="/about">
                    <li>About</li>
                  </Link>
                  <Link className="link" to="/contact">
                    <li>Contact Us</li>
                  </Link>
                  <Link className="link" to="/about">
                    <li>Terms & Conditions</li>
                  </Link>
                </ul>
              </div>

              <div className="f-icon">
                <li>
                  {/* Mail */}
                  <a href="mailto:olasimboolajuwon@gmail.com">
                    <MdAlternateEmail />
                  </a>
                </li>
                <li>
                  {/* Instagram */}
                  <a href="Https://wa.me//+2348123806786">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/yung_in">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  {/* X */}
                  <a href="https://x.com/yung_in01">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  {/* GitHub */}
                  <a href="https://github.com/OlajuwonX">
                    <FaGithub />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <p>All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
