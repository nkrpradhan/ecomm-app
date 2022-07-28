import React from "react";
import "./Home.css";
import Products from "./Products";
function Home() {
  const carousel1 = {
    textAlign: "center",
    fontSize: "5rem",
    fontWeight: "bold",
    color: "white",
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(57,57,115,0.9953023445706407) 30%, rgba(0,212,255,1) 100%)",
    padding: "10px",
    height: "20rem",
  };
  const carousel2 = {
    textAlign: "center",
    fontSize: "5rem",
    fontWeight: "bold",
    color: "white",
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(115,112,63,0.9953023445706407) 100%, rgba(1,255,0,1) 100%)",
    padding: "10px",
    height: "20rem",
  };
  const carousel3 = {
    textAlign: "center",
    fontSize: "5rem",
    color: "white",
    backgroundImage:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(142,162,185,1) 92%)",
    padding: "10px",
    height: "20rem",
  };
  return (
    <>
      <div
        id="carouselSlide"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div style={carousel1}>Welcome to the portal</div>
          </div>
          <div className="carousel-item">
            <div style={carousel2}>Exciting offers</div>
          </div>
          <div className="carousel-item">
            <div style={carousel3}>Pro membership free trial for 90 days</div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Home;
