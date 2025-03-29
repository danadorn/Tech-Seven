import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NavbarComponent } from "./components/button/navbar/NavbarComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarComponent />
    <App />
  </StrictMode>
);
