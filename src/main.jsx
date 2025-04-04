import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Aboutus from "./page/aboutus/Aboutus.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./components/layout/RootLayout.jsx";
import Home from "./page/homepage/Home.jsx";
import ShoppingCart from "./page/shoppingcart/ShoppingCart.jsx";
import ProductListing from "./page/productlisting/ProductListing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = {<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/shopping-cart" element={<ShoppingCart/>}/>
        <Route path="/product-listing" element={<ProductListing/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
      <App />
  </StrictMode>

);

