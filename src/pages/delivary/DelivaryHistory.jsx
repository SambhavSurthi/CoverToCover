import React from "react";

const DelivaryHistory = () => {
  const items=[
    {
      orderId: 1245,
      expectedDeliveryDate: "25/02/2025",
      flatAddress: "Sai Chalapathi Boys Hostel, Opp Aditya Elite",
      area: "KL University Road, Vaddeshwaram",
      landmark: "KL University Road",
      city: "Vijayawada",
      state: "Andhra Pradesh",
      pincode: 522502,
      customerName: "Sambhav Surthi",
      phoneNumber: 6304749943,
      paymentOption: "Cash On Delivery",
      amountToBeCollected: 958,
      deliveryStatus: "Pending",
      amountCollected: "Yes",
      reason: "Will be delivared by EOD",
    },

  ]


  return (
    <div className="flex flex-col justify-start items-center min-h-screen">
      {items.length === 0 ? (
        <p>No History found</p>
      ) :(items.map((item) => (
        <div
          key={item.orderId}
          className="w-full lg:w-[90%] h-auto mt-5 mx-4 sm:mx-10 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 rounded-2xl"
        >
          {/* Left Section - Order Details */}
          <div className="left text-lg grid grid-cols-2 gap-y-4 w-full max-w-md">
            <h1 className="col-span-2 text-center text-xl font-semibold">
              Order Details
            </h1>

            <h1 className="font-semibold">Order Id:</h1>
            <p>{item.orderId}</p>

            <h1 className="font-semibold">Delivary Data:</h1>
            <p>{item.expectedDeliveryDate}</p>

            <h1 className="font-semibold">Delivary Status:</h1>
            <p>{item.deliveryStatus}</p>
          </div>

          {/* Middle Section - Address Details */}
          <div className="middle">
            <h1 className="text-center text-xl font-semibold">
              Address Details
            </h1>
            <div className="grid grid-cols-2 gap-y-2 mt-4">
              <h3 className="font-semibold">
                Flat, House no., Building, Company, Apartment:
              </h3>
              <p className="text-sm">{item.flatAddress}</p>

              <h3 className="font-semibold">Area, Street, Sector, Village:</h3>
              <p className="text-sm">{item.area}</p>

              <h3 className="font-semibold">Landmark:</h3>
              <p className="text-sm">{item.landmark}</p>

              <h3 className="font-semibold">Town/City:</h3>
              <p className="text-sm">{item.city}</p>

              <h3 className="font-semibold">State:</h3>
              <p className="text-sm">{item.state}</p>

              <h3 className="font-semibold">Pincode:</h3>
              <p className="text-sm">{item.pincode}</p>
            </div>
          </div>

          {/* Right Section - Customer Details */}
          <div className="right">
            <h1 className="text-center text-xl font-semibold">
              Customer Details
            </h1>

            <div className="grid grid-cols-2 gap-y-2 mt-4">
              <h3 className="font-semibold">Customer Name:</h3>
              <p className="text-sm">{item.customerName}</p>

              <h3 className="font-semibold">Customer Phone Number:</h3>
              <p className="text-sm">{item.phoneNumber}</p>

              <h3 className="font-semibold">Payment Options:</h3>
              <p className="text-sm">{item.paymentOption}</p>

              <h3 className="font-semibold">Amount Collected:</h3>
              <p className="text-sm">{item.amountToBeCollected}/- INR</p>

              <h3 className="font-semibold">Amount Collected:</h3>
              <p className="text-sm">{item.amountCollected}</p>

              <h3 className="font-semibold">If Not Delivered Remark:</h3>
              <p className="text-sm">{item.reason}</p>
            </div>
            {/* Submit Button Positioned Outside the Grid */}
            <div className="mt-4 flex justify-center">
              <button
                className="border w-fit px-3 py-2 bg-red-600 rounded text-white cursor-pointer hover:bg-red-700"
                onClick={() => rollbackDelivery(item.orderId)}
              >
                Roll Back
              </button>
            </div>
          </div>
        </div>
      )))}
    </div>
  );
};

export default DelivaryHistory;
