import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
import Aboutus from "./page/aboutus/Aboutus";
import Home from "./page/homepage/Home";
import RootLayout from './components/layout/RootLayout'


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

