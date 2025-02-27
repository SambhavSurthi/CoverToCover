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
import AdminNavbar from "./pages/admin/AdminNavbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAllOrders from "./pages/admin/AdminAllOrders";
import AdminAllProducts from "./pages/admin/AdminAllProducts";
import AdminProductDescription from "./pages/admin/AdminProductDescription";
import AdminInventoryData from "./pages/admin/AdminInventoryData";
import AdminOrderHistory from "./pages/admin/AdminOrderHistory";
import AdminAddSupplier from "./pages/admin/AdminAddSupplier";
import AdminSupplierDetails from "./pages/admin/AdminSupplierDetails";
import AdminSupplyHistory from "./pages/admin/AdminSupplyHistory";
import EditDelivaryProfile from "./pages/delivary/EditDelivaryProfile";
import DelivaryProfile from "./pages/delivary/DelivaryProfile";
import DelivaryHistory from "./pages/delivary/DelivaryHistory";
import DelivaryItems from "./pages/delivary/DelivaryItems";
import DelivaryNavbar from "./pages/delivary/DelivaryNavbar";

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
  

  {
    path: "/delivary",
    element: (
      <div>
        <DelivaryNavbar />
      </div>
    ),
    children: [
      {
        path: "",
        element: <DelivaryItems />,
      },
      {
        path: "delivaryhistory",
        element: <DelivaryHistory />,
      },
      {
        path: "delivaryprofile",
        element: <DelivaryProfile />,
      },
      {
        path: "editdelivaryprofile",
        element: <EditDelivaryProfile />,
      },
    ],
  },

  

  {
    path: "/admin",
    element: <AdminNavbar />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "allorders",
        element: <AdminAllOrders />,
      },
      {
        path: "allproducts",
        element: <AdminAllProducts />,
      },
      {
        path: "product",
        element: <AdminProductDescription />,
      },
      {
        path: "inventory",
        element: <AdminInventoryData />,
      },
      {
        path: "orderhistory",
        element: <AdminOrderHistory />,
      },
      {
        path: "supplyhistory",
        element: <AdminSupplyHistory />,
      },
      {
        path: "addsupplier",
        element: <AdminAddSupplier />,
      },
      {
        path: "supplierdetails",
        element: <AdminSupplierDetails />,
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
