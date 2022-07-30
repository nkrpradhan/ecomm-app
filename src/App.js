import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
