import React, { useState } from "react";
import { Search } from "lucide-react";

const SupplyHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supplyOrders = [
    {
      id: 1524,
      productName: "November 9",
      productId: "WE1524",
      quantity: 2,
      orderDate: "21/02/2025",
      receivedDate: "22/02/2025",
      supplyStatus: "Delivered",
      supplierName: "Books India",
      supplierPhone: "9876543210",
      supplierAddress: "Mumbai, India",
      paymentOption: "Cash on Delivery",
      amountPaid: "₹1500",
    },
    {
      id: 1525,
      productName: "Wings of Fire",
      productId: "SP1525",
      quantity: 1,
      orderDate: "24/02/2025",
      receivedDate: "-",
      supplyStatus: "Pending",
      supplierName: "Sai Books",
      supplierPhone: "9876543222",
      supplierAddress: "Delhi, India",
      paymentOption: "Online Payment",
      amountPaid: "₹250",
    },
  ];

  const filteredOrders = supplyOrders.filter((order) =>
    order.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Supply Order History</h1>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search by product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Supply Orders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
          >
            <h2 className="text-xl font-semibold mb-2">{order.productName}</h2>
            <p><strong>Product ID:</strong> {order.productId}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Order Date:</strong> {order.orderDate}</p>
            <p><strong>Received Date:</strong> {order.receivedDate}</p>
            <p><strong>Supply Status:</strong> <span className={order.supplyStatus === "Delivered" ? "text-green-600" : "text-red-600"}>{order.supplyStatus}</span></p>
            <p><strong>Supplier Name:</strong> {order.supplierName}</p>
            <p><strong>Supplier Phone:</strong> {order.supplierPhone}</p>
            <p><strong>Supplier Address:</strong> {order.supplierAddress}</p>
            <p><strong>Payment Option:</strong> {order.paymentOption}</p>
            <p><strong>Amount Paid:</strong> {order.amountPaid}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyHistory;