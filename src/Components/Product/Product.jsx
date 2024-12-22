import React from "react";
import ReactDOM from "react-dom";
import Items from "./Items";
import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { BsEye } from "react-icons/bs";

import "./Product.css";

// Modal component that uses React Portal
const Modal = ({ children, close }) => {
  return ReactDOM.createPortal(
    <div className="i_detail">
      <div className="i_container">
        <button onClick={close} className="closebtn">
          <AiOutlineCloseCircle />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // This renders the modal outside the normal DOM structure
  );
};

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addToCart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Filter products based on the category
  const filterproduct = (product) => {
    const update = Items.filter((x) => x.Cat === product);
    setProduct(update);
  };

  // Show all products
  const showAllProducts = () => {
    setProduct(Items);
  };

  return (
    <>
      {/* Modal Component */}
      {close && (
        <Modal close={() => setClose(false)}>
          {detail.map((data) => (
            <div className="new-box" key={data.id}>
              <div className="new-imgbox">
                <img src={data.Img} alt={data.Title} />
              </div>
              <div className="new-detail">
                <h4>{data.Cat}</h4>
                <h3>₦{data.Price}</h3>
                <p>Best Price In The Market</p>
                <h2>{data.Title}</h2>
                <button className="button" onClick={() => addToCart(data)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </Modal>
      )}

      {/* Product List */}
      <div className="item">
        <h2># Products</h2>
        <div className="item-container">
          {/* Filters Section */}
          <div className="item-filter">
            <div className="item-cat">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => showAllProducts()}>All Products</li>
                <li onClick={() => filterproduct("gadgets")}>Gadgets</li>
                <li onClick={() => filterproduct("pleasures")}>Pleasures</li>
                <li onClick={() => filterproduct("wristwatches")}>
                  Wristwatches
                </li>
                <li onClick={() => filterproduct("perfumes")}>Perfumes</li>
                <li onClick={() => filterproduct("phones")}>Mobile Phones</li>
                <li onClick={() => filterproduct("electronics")}>
                  Electronics
                </li>
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="item-box">
            <div className="item-c">
              {product.map((data) => (
                <div className="new-box" key={data.id}>
                  <div className="new-imgbox">
                    <img src={data.Img} alt={data.Title} />
                    <div className="new-icon">
                      {isAuthenticated ? (
                        <li onClick={() => addToCart(data)}>
                          <AiOutlineShoppingCart />
                        </li>
                      ) : (
                        <li onClick={() => loginWithRedirect()}>
                          <AiOutlineShoppingCart />
                        </li>
                      )}
                      <li onClick={() => view(data)}>
                        <BsEye />
                      </li>
                      <li>
                        <AiOutlineHeart />
                      </li>
                    </div>
                  </div>

                  <div className="new-detail">
                    <p>{data.Cat}</p>
                    <h4>₦{data.Price}.00 </h4>
                    <h3>{data.Title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
