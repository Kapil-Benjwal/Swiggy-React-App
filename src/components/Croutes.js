import React from "react";
import { Routes, Route } from "react-router-dom";
// import App from "../App";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";

const Croutes = () => {
  // const appRoute = createBrowserRouter({
  //   path: "/", // Base path
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/", // Default route, rendered when the path is "/"
  //       element: <Body />,
  //     },
  //     {
  //       path: "/home",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/about",
  //       element: <About />,
  //     },
  //     {
  //       path: "/contact",
  //       element: <Contact />,
  //     },
  //   ],
  // });

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path="/body" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurantMenu/:resId" element={<RestaurantMenu />} />
      </Routes>
    </>
  );
};

export default Croutes;
