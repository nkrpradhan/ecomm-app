import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
function Products() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
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

  const DisplayProducts = () => {
    return (
      <>
        <div className="buttons">
          <button className="btn btn-outline-secondary mx-2">All</button>
          <button className="btn btn-outline-secondary mx-2">
            Men's Clothing
          </button>
          <button className="btn btn-outline-secondary mx-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-secondary mx-2">Jewellery</button>
          <button className="btn btn-outline-secondary mx-2">Electronic</button>
        </div>
        {filter &&
          filter.map((product) => {
            return (
              <>
                <div className=" card mx-1 my-2 p-4 text-center card-size">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded card-img-top card-img-size"
                  />
                  <div className="card-body">
                    <div className="card-title">
                      <strong>{product.title}</strong>
                    </div>
                    <div className="card-text">£{product.price}</div>
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
