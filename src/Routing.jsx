import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Home/SignUp";
import SignIn from "./pages/Home/SignIn";
import CustomerNavbar from "./pages/customer/CustomerNavbar";
import CustomerHomePage from "./pages/customer/CustomerHomePage";
import CustomerCart from "./pages/customer/CustomerCart";
import CustomerOrderHistory from "./pages/customer/CustomerOrderHistory";
import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerAddress from "./pages/customer/CustomerAddress";
import CustomerProductDescription from "./pages/customer/CustomerProductDescription";
import CustomerEditProfile from "./pages/customer/CustomerEditProfile";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/customer",
    element: <CustomerNavbar />,
    children: [
      {
        path: "",
        element: <CustomerHomePage />,
      },
      {
        path: "cart",
        element: <CustomerCart />,
      },
      {
        path: "history",
        element: <CustomerOrderHistory />,
      },
      {
        path: "profile",
        element: <CustomerProfile />,
      },
      {
        path: "address",
        element: <CustomerAddress />,
      },
      {
        path: "product",
        element: <CustomerProductDescription />,
      },
      {
        path:"editcustomerprofile",
        element:<CustomerEditProfile />
      },
    ],
  },
]);

const Routing = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routing;
