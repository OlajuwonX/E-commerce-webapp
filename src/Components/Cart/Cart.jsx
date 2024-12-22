import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  /* Increase Btn */
  const incbtn = (product) => {
    const itemCarted = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((data) => {
        return data.id === product.id
          ? { ...itemCarted, qty: itemCarted.qty + 1 }
          : data;
      })
    );
  };

  /* Decrease Btn */
  const decbtn = (product) => {
    const itemCarted = cart.find((x) => x.id === product.id);
    if (itemCarted && itemCarted.qty > 1) {
      setCart(
        cart.map((data) =>
          data.id === product.id
            ? { ...itemCarted, qty: itemCarted.qty - 1 }
            : data
        )
      );
    } else {
      alert("Quantity cannot be less than 1!");
    }
  };

  /* Total Price */
  const totalPrice = cart
    .reduce((price, item) => {
      return (
        price + item.qty * parseFloat(item.Price.replace(/[^\d.-]/g, "")) || 0
      );
    }, 0)
    .toLocaleString();

  return (
    <>
      <div className="cart-container">
        {/* Display empty cart message if the cart is empty */}
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Your Cart Is Empty!</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
        )}

        {/* Display cart items if the cart has products */}
        {cart.length > 0 && (
          <div className="cart-about">
            {cart.map((data) => (
              <div className="cart-item" key={data.id}>
                <div className="cart-imgbox">
                  <img src={data.Img} alt={data.Title} />
                </div>
                <div className="cart-detail">
                  <div className="cart-info">
                    <h4>{data.Cat}</h4>
                    <h3> {data.Title}</h3>
                    <p>Price: ₦{data.Price}.00 </p>
                    {/* Add a button to remove item from the cart */}
                    <div className="cart-qty">
                      <button className="incbtn" onClick={() => incbtn(data)}>
                        +
                      </button>
                      <input type="text" value={data.qty} />
                      <button className="decbtn" onClick={() => decbtn(data)}>
                        -
                      </button>
                    </div>
                    <h4 className="subtotal">
                      Sub Total: ₦
                      {(() => {
                        const sanitizedPrice =
                          parseFloat(data.Price.replace(/[^\d.-]/g, "")) || 0; // To remove the commas
                        const quantity = data.qty || 1;
                        return (sanitizedPrice * quantity).toLocaleString(); // Formats the number with commas
                      })()}
                      .00
                    </h4>
                  </div>
                  <div className="cartclose-btn">
                    <button
                      className="cclosebtn"
                      onClick={() =>
                        setCart(cart.filter((item) => item.id !== data.id))
                      }
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <>
            <h2 className="totalprice">Total Price: ₦{totalPrice}.00</h2>
            <button className="checkout button">Check Out</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
