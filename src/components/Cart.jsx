import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const updatedCart = useSelector((state) => state.addCart.cart);
  const [quantity, setQuantity] = useState();
  return (
    <>
      <h2 className="m-5">Shopping Cart</h2>
      <div className="cart-grid-container m-5">
        {updatedCart.length > 0 &&
          updatedCart.map((item) => {
            return (
              <>
                <img src={item.image} alt={item.id} className="cart-image" />

                <div>{item.title}</div>
                <button className=" btn btn-outline-primary cart-btn ">
                  +
                </button>
                <span>{item.quantity}</span>
                <button className="btn btn-outline-primary cart-btn">
                  -
                </button>
                <div>£{item.price}</div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Cart;
