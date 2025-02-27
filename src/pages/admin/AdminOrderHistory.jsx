import React, { useState } from "react";
import { Search } from "lucide-react";

const AdminOrderHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const orders = [
    {
      orderId: "1234",
      productName: "Wireless Ear Phone",
      productQuantity: "2",
      orderDate: "01/02/2025",
      deliveryDate: "02/02/2025",
      deliveryStatus: "Delivered",
      deliveryAgent: "Suraj",
      customerName: "Sambhav Surthi",
      customerPhone: "6304749943",
      paymentOption: "Cash On Delivery",
      amountCollected: "958/- INR",
      address: {
        flat: "Sai Chalapathi Boys Hostel, Opp Aditya Elite",
        area: "KL University Road, Vaddeshwaram",
        landmark: "KL University Road",
        city: "Vijayawada",
        state: "Andhra Pradesh",
        pincode: "522502",
      },
    },
    {
      orderId: "2562",
      productName: "Wireless Ear Phone",
      productQuantity: "2",
      orderDate: "04/02/2025",
      deliveryDate: "06/02/2025",
      deliveryStatus: "Not Delivered",
      deliveryAgent: "Suraj",
      customerName: "Sai Kiran",
      customerPhone: "999999999",
      paymentOption: "Cash On Delivery",
      amountCollected: "250/- INR",
      address: {
        flat: "Sai Chalapathi Boys Hostel, Opp Aditya Elite",
        area: "KL University Road, Vaddeshwaram",
        landmark: "KL University Road",
        city: "Vijayawada",
        state: "Andhra Pradesh",
        pincode: "522502",
      },
    },
  ];

  const filteredOrders = orders.filter((order) =>
    order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  order.orderId.includes(searchQuery)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative lg:ml-16 lg:mt-6 w-[80%] md:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 border rounded-md"
          />
        </div>
      </div>
      {filteredOrders.map((order) => (
        <div
          key={order.orderId}
          className="w-full lg:w-[90%] h-auto mt-5 mx-4 sm:mx-10 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 rounded-2xl"
        >
          {/* Order Details */}
          <div className="text-lg grid grid-cols-2 gap-y-4 w-full max-w-md">
            <h1 className="col-span-2 text-center text-xl font-semibold">
              Order Details
            </h1>
            <h1 className="font-semibold">Order Id:</h1>
            <p>{order.orderId}</p>
            <h1 className="font-semibold">Product Name:</h1>
            <p>{order.productName}</p>
            <h1 className="font-semibold">Product Quantity:</h1>
            <p>{order.productQuantity}</p>
            <h1 className="font-semibold">Order Date:</h1>
            <p>{order.orderDate}</p>
            <h1 className="font-semibold">Delivery Date:</h1>
            <p>{order.deliveryDate}</p>
            <h1 className="font-semibold">Delivery Status:</h1>
            <p>{order.deliveryStatus}</p>
            <h1 className="font-semibold">Delivery Agent:</h1>
            <p>{order.deliveryAgent}</p>
          </div>

          {/* Address Details */}
          <div>
            <h1 className="text-center text-xl font-semibold">Address Details</h1>
            <div className="grid grid-cols-2 gap-y-2 mt-4">
              <h3 className="font-semibold">Flat, House no.:</h3>
              <p className="text-sm">{order.address.flat}</p>
              <h3 className="font-semibold">Area, Street:</h3>
              <p className="text-sm">{order.address.area}</p>
              <h3 className="font-semibold">Landmark:</h3>
              <p className="text-sm">{order.address.landmark}</p>
              <h3 className="font-semibold">Town/City:</h3>
              <p className="text-sm">{order.address.city}</p>
              <h3 className="font-semibold">State:</h3>
              <p className="text-sm">{order.address.state}</p>
              <h3 className="font-semibold">Pincode:</h3>
              <p className="text-sm">{order.address.pincode}</p>
            </div>
          </div>

          {/* Customer Details */}
          <div>
            <h1 className="text-center text-xl font-semibold">Customer Details</h1>
            <div className="grid grid-cols-2 gap-y-2 mt-4">
              <h3 className="font-semibold">Customer Name:</h3>
              <p className="text-sm">{order.customerName}</p>
              <h3 className="font-semibold">Customer Phone Number:</h3>
              <p className="text-sm">{order.customerPhone}</p>
              <h3 className="font-semibold">Payment Options:</h3>
              <p className="text-sm">{order.paymentOption}</p>
              <h3 className="font-semibold">Amount Collected:</h3>
              <p className="text-sm">{order.amountCollected}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrderHistory;
