import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './page/homepage/Home';

// import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
// import RootLayout from "./components/layout/RootLayout";
import NavbarComponent from "./components/button/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ShoppingCart from "./page/shoppingcart/ShoppingCart";

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />, // Wrap with Layout
          children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <Aboutus /> },
          ]
        },
    ])
    
    return (
      <RouterProvider router={router} />
    )
}

export default App;
