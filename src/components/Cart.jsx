import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  deleteProduct,
} from "../redux/features/cart/cartSlice";
import "./Cart.css";

function Cart() {
  const updatedCart = useSelector((state) => state.addCart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const updateCart = (updateAction, item) => {
    if (updateAction === "increment") {
      dispatch(incrementCart(item));
    }
    if (updateAction === "decrement" && item.quantity > 0) {
      dispatch(decrementCart(item));
    }
  };
  const deleteItem = (item) => {
    dispatch(deleteProduct(item));
  };
  useEffect(() => {
    let tempTotal = 0;
    updatedCart.forEach((item) => {
      tempTotal += item.quantity * item.price;
    });
    setTotalPrice(Math.round(tempTotal*100)/100);
  }, [updatedCart]);
  const CartDetails = () => {
    return (
      <>
        <div className="cart-grid-container m-5">
          {updatedCart.map((item) => {
            return (
              <>
                <img src={item.image} alt={item.id} className="cart-image" />

                <div>{item.title}</div>
                <button
                  className=" btn btn-outline-primary cart-btn "
                  onClick={() => updateCart("increment", item)}
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-outline-primary cart-btn"
                  onClick={() => updateCart("decrement", item)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-primary h-25 p-1"
                  onClick={() => deleteItem("increment", item)}
                >
                  Remove
                </button>
                <div>£{item.price}</div>
              </>
            );
          })}
        </div>
        <hr />
        <h3 className="m-5 float-end">Total Price: £{totalPrice}</h3>
      </>
    );
  };
  return (
    <>
      <h2 className="m-5">Shopping Cart</h2>
      <hr />
      {updatedCart.length > 0 ? (
        <CartDetails />
      ) : (
        <h4 className="m-5">Shopping cart is empty</h4>
      )}
    </>
  );
}

export default Cart;
