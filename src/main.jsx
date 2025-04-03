import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


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

