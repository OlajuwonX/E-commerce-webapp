import React from "react";
import ReactDOM from "react-dom";
import productData from "./ProductData";
import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import "./HomeProduct.css";

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
    document.getElementById("modal-root")
  );
};

const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  direction: "horizontal",
  breakpoints: {
    480: {
      slidesPerView: 1.4,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4.3,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
  },
};

const HomeProduct = ({ detail, view, close, setClose, addToCart }) => {
  return (
    <>
      {/* Render Modal */}
      {close && detail.length > 0 && (
        <Modal close={() => setClose(false)}>
          {detail.map((item) => (
            <div className="new-box" key={item.id}>
              <div className="new-imgbox">
                <img src={item.Img} alt={item.Title} />
              </div>
              <div className="new-detail">
                <h4>{item.Cat}</h4>
                <h3> ₦{item.Price}.00 </h3>
                <p>Best Price In The Market</p>
                <h2>{item.Title}</h2>
                <button className="button" onClick={() => addToCart(item)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </Modal>
      )}

      {/* Product List */}

      <div className="new-product">
        <h2>Top Products</h2>
        <div className="new-container">
          {/*Slider settings*/}
          <Swiper {...sliderSettings}>
            {productData.map((item) => (
              <SwiperSlide className="new-box" key={item.id}>
                <div className="new-imgbox">
                  <img src={item.Img} alt={item.Title} />
                  <div className="new-icon">
                    <li onClick={() => addToCart(item)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(item)}>
                      <BsEye />
                    </li>
                  </div>
                </div>
                <div className="new-detail">
                  <p>{item.Cat}</p>
                  <h4>₦{item.Price}.00</h4>
                  <h3>{item.Title}</h3>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-scrollbar"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
