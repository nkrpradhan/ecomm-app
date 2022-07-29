import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
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
            <button className="btn btn-outline-secondary">Add to cart</button>
            <NavLink to="/cart" className="btn btn-dark mx-4">
              Go to Cart
            </NavLink>
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
