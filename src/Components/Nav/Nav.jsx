import React, { useState } from "react";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FaAmazonPay, FaHome, FaTruckMoving } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { CiLogin, CiLogout, CiSearch, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import "./Nav.css";

const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const handleSearch = () => {
    searchbtn(search);
    setSearch("");
  };

  return (
    <>
      {/* Free Shipping Banner */}
      <div className="Nav">
        <div className="nav-wrapper">
          <div className="nav-icon">
            <FaTruckMoving />
          </div>
          <p>FREE delivery for goods over ₦159,999.</p>
        </div>
      </div>

      {/* Navbar for Small Screens */}
      <div className="nh-small">
        <div className="nc-small">
          <div className="ns-right">
            <OutsideClickHandler onOutsideClick={closeMenu}>
              <div className="Dashboard">
                <button onClick={toggleMenu}>
                  {menuOpened ? <IoClose /> : <GiHamburgerMenu />}
                </button>
              </div>
              {menuOpened && (
                <div className="dash-menu">
                  <div className="hc-small">
                    <p>DASHBOARD</p>
                    <div className="hl-small">
                      <ul>
                        <li>
                          <Link to="/" className="link" onClick={closeMenu}>
                            <h4>
                              <FaHome />
                            </h4>{" "}
                            <p>Home</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/product"
                            className="link"
                            onClick={closeMenu}
                          >
                            <h4>
                              <CiShoppingCart />
                            </h4>{" "}
                            <p>Product</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            className="link"
                            onClick={closeMenu}
                          >
                            <h4>
                              <FcAbout />
                            </h4>{" "}
                            <p>About</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="link"
                            onClick={closeMenu}
                          >
                            <h4>
                              <MdContacts />
                            </h4>{" "}
                            <p>Contact</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </OutsideClickHandler>
          </div>
          <div className="nl-small">
            <p>X</p> <FaAmazonPay />
          </div>
          {/* Nav Icons */}
          <div className="ni-small">
            <div className="log-in">
              {isAuthenticated && (
                <div className="na-small">
                  <div className="nu-small">
                    <AiOutlineUser />
                  </div>
                  <div className="nu-text">
                    <p>Hello,</p>
                    <span>{user.name}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="rem-icons">
              <div className="ns-small">
                <Link to="/cart" className="link">
                  <BsBagCheck />
                </Link>
              </div>
              <div className="h-auth-small">
                {isAuthenticated ? (
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    <CiLogout />
                  </button>
                ) : (
                  <button onClick={loginWithRedirect}>
                    <CiLogin />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="small-search-box-container">
          <div className="small-search-box">
            <input
              type="text"
              value={search}
              placeholder="Enter Product Name Here"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="button" onClick={handleSearch}>
              <CiSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Header for Larger Screens */}
      <div className="nav-header">
        <div className="nav-container">
          <div className="l-container">
            <div className="nav-logo">
              <p>X</p> <FaAmazonPay />
            </div>
            {/* Search Box */}
            <div className="search-box-container">
              <div className="search-box">
                <input
                  type="text"
                  value={search}
                  placeholder="Enter Product Name Here"
                  autoComplete="off"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="button" onClick={handleSearch}>
                  <CiSearch />
                </button>
              </div>
            </div>
          </div>

          <div className="nav-icons">
            {isAuthenticated && (
              <div className="nav-account">
                <div className="nav-user">
                  <AiOutlineUser />
                </div>
                <p>
                  Hello, <span>{user.name}</span>
                </p>
              </div>
            )}
            <div className="nav-second">
              <Link to="/" className="link">
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className="link">
                <BsBagCheck />
              </Link>
            </div>
            <div className="h-auth">
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <CiLogout />
                </button>
              ) : (
                <button onClick={loginWithRedirect}>
                  <CiLogin />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Header">
        <div className="h-container">
          <div className="h-links">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
