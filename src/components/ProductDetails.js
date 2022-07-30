import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductDetails.css";
import { addCart } from "../redux/features/cart/cartSlice";
import CustomToast from "./Toast";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [productQty, setProductQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const productDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log(response);
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        }
      } catch (e) {
        console.log("error", e);
      }
    };
    productDetails();
  }, []);

  const handleCart = () => {
    if (productQty > 0) {
      dispatch(addCart({ ...product, quantity: productQty }));
      setToastMsg("Item added to the cart");
      setToast(true);
    } else {
      setToastMsg("Please add the quantity");
      setToast(true);
    }
  };

  const handleQuantity = (e) => {
    setToast(false);
    setToastMsg();
    const quantity = e.target.value;
    setProductQty(quantity);
  };

  const ShowProductDetails = () => {
    return (
      <>
        <div className="d-flex">
          <div className="m-5">
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
          </div>
          <div className="m-5">
            <h4 className="text-uppercase">{product.category}</h4>
            <h1>{product.title}</h1>
            <p>
              Rating {product.rating && product.rating.rate} &nbsp;
              <i className="fa fa-star"></i>
            </p>
            <h3>£{product.price}</h3>
            <p>{product.description}</p>
            <label>
              Quantity
              <input
                className="mx-4 p-1 w-25 h-50"
                type="number"
                min="1"
                autoFocus="autoFocus"
                value={productQty}
                onChange={(e) => handleQuantity(e)}
              />
            </label>
            <button className="btn btn-outline-secondary" onClick={handleCart}>
              Add to cart
            </button>
            <NavLink to="../cart" className="btn btn-dark mx-4">
              Go to Cart
            </NavLink>
            {toast && (
              <CustomToast
                showtoast={toast}
                position="top-end"
                message={toastMsg}
              />
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>{loading ? "Loading..." : <ShowProductDetails />}</div>
    </>
  );
}

export default ProductDetails;
