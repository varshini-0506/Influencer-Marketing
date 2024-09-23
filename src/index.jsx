//import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Homepg from "./components/Homepg/Homepg";
import Agencies from "./components/Agencies/Agencies";
import Brands from "./components/Brands/Brands";
import Pricing from "./components/Pricing/Pricing";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        element: <Homepg />,
        path: "/",
      },
      {
        element: <Brands />,
        path: "brand",
      },
      {
        element: <Agencies />,
        path: "agencies",
      },
      {
        element: <Pricing />,
        path: "pricing",
      },
    ],
  },
]);

root.render(<RouterProvider router={Router} />);
//root.render(<Index/>)
