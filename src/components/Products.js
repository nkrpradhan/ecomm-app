import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Products() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("useffect");
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        if (response.status === 200) {
          setData(response.data);
          setFilter(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.log("error--", err);
      }
    };
    getProducts();
  }, []);
  const filterProduct = (filterbyCategory) => {
    const filteredData = data.filter(
      (item) => item.category === filterbyCategory
    );
    setFilter(filteredData);
  };
  const gotoProduct = (productid) => {
    navigate(`../products/${productid}`, { replace: true });
  };
  const DisplayProducts = () => {
    return (
      <>
        <div className="buttons">
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => filterProduct(`men's clothing`)}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => filterProduct(`women's clothing`)}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => filterProduct(`jewelery`)}
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => filterProduct(`electronics`)}
          >
            Electronic
          </button>
        </div>
        {filter &&
          filter.map((product) => {
            return (
              <>
                <div className="card mx-1 my-2 p-4 text-center card-size">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded card-img-top card-img-size"
                  />
                  <div className="card-body">
                    <div className="card-title">
                      <strong>{product.title.substring(0, 12)}</strong>
                    </div>
                    <div className="card-text mb-1">£{product.price}</div>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => gotoProduct(product.id)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  };
  return (
    <>
      <div className="container text-center py-3">
        <div className="row">
          <div className="col">
            <h2>Our Products</h2>
          </div>
        </div>
        <div className="row">
          {loading ? "Loading..." : <DisplayProducts />}
        </div>
      </div>
    </>
  );
}

export default Products;
