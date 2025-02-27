import React from "react";

const DelivaryItems = () => {

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
      amountCollected: "",
      reason: "",
    },
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
      amountCollected: "",
      reason: "",
    },
  ]

  return (
    <div className="flex flex-col justify-start items-center min-h-screen">
      {items.length === 0 ? (
        <p>No Items To be Delivered</p>
      ):(items.map((item) => (
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

            <label htmlFor="ExpectedData" className="font-semibold">
              Expected Delivery By:
            </label>
            <p>{item.expectedDeliveryDate}</p>

            <label htmlFor="DelivaryStatus" className="font-semibold">
              Delivery Status:
            </label>
            <select
              name="DelivaryStatus"
              id="DelivaryStatus"
              className="w-full rounded-lg border border-gray-900 text-gray-700 px-2 py-1"
              onChange={(e) =>
                updateDeliveryStatus({
                  ...item,
                  deliveryStatus: e.target.value,
                })
              }
            >
              <option value="">Please select</option>
              <option value="NotDelivared">Not Delivered</option>
              <option value="OnTheWay">On The Way</option>
              <option value="Delivared">Delivered</option>
            </select>
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

              <h3 className="font-semibold">Amount to be Collected:</h3>
              <p className="text-sm">{item.amountToBeCollected}/- INR</p>

              {/* Amount Collected Section - Align Radio Buttons to Right */}
              <h3 className="font-semibold">Amount Collected:</h3>

              <div className="col-span-1 flex justify-start space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="amountcollection"
                    value="Yes"
                    id="amountcollectedYes"
                  />
                  <span>Yes</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="amountcollection"
                    value="No"
                    id="amountcollectedNo"
                  />
                  <span>No</span>
                </label>
              </div>

              {/* Input for "If Not Delivered" */}
              <h3 className="font-semibold col-span-2">
                <label htmlFor="notdelivared">If Not Delivered:</label>
              </h3>
              <input
                className="border rounded w-full p-1 col-span-2"
                type="text"
                name="notdelivared"
                id="notdelivared"
                placeholder="Enter reason"
                onChange={(e) =>
                  updateDeliveryStatus({
                    ...item,
                    reason: e.target.value,
                  })
                }
              />
            </div>

            {/* Submit Button Positioned Outside the Grid */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() =>
                  updateDeliveryStatus({ ...item, deliveryStatus: "Delivered" })
                }
                className="border w-fit px-3 py-2 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-600"
              >
                Update Delivary Status
              </button>
            </div>
          </div>
        </div>
      )))}
    </div>
  );
};

export default DelivaryItems;
