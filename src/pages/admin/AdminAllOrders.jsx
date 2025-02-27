import React from "react";

const AdminAllOrders = () => {
  return (
    <div>
      <div>
        <div className="w-full lg:w-[95%] h-auto mt-5 mx-4 sm:mx-10 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 rounded-2xl">
          {/* Left Section - Order Details */}
          <div className="left text-lg grid grid-cols-2 gap-y-4 w-full max-w-md">
            <h1 className="col-span-2 text-center text-xl font-semibold">
              Order Details
            </h1>

            <h1 className="font-semibold">Order Id:</h1>
            <p>1234</p>

            <h1 className="font-semibold">Order Data:</h1>
            <p>31/01/2025</p>

            <label htmlFor="ExpectedData" className="font-semibold">
            Expected Delivery By:
          </label>
          <input
            className="w-full rounded-lg border border-gray-900 text-gray-700 px-2 py-1"
            type="date"
            name="ExpectedData"
            id="ExpectedData"
          />

          <label htmlFor="DelivaryAgentStatus" className="font-semibold">
            Assign Delivary Agent:
          </label>
          <select
            name="DelivaryAgentStatus"
            id="DelivaryAgentStatus"
            className="w-full rounded-lg border border-gray-900 text-gray-700 px-2 py-1"
          >
            <option value="">Please select</option>
            <option value="suraj">Suraj</option>
            
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
              <p className="text-sm">
                Sai Chalapathi Boys Hostel, Opp Aditya Elite
              </p>

              <h3 className="font-semibold">Area, Street, Sector, Village:</h3>
              <p className="text-sm">KL University Road, Vaddeshwaram</p>

              <h3 className="font-semibold">Landmark:</h3>
              <p className="text-sm">KL University Road</p>

              <h3 className="font-semibold">Town/City:</h3>
              <p className="text-sm">Vijayawada</p>

              <h3 className="font-semibold">State:</h3>
              <p className="text-sm">Andhra Pradesh</p>

              <h3 className="font-semibold">Pincode:</h3>
              <p className="text-sm">522502</p>
            </div>
          </div>

          {/* Right Section - Customer Details */}
          <div className="right">
            <h1 className="text-center text-xl font-semibold">
              Customer Details
            </h1>

            <div className="grid grid-cols-2 gap-y-2 mt-4">
              <h3 className="font-semibold">Customer Name:</h3>
              <p className="text-sm">Sambhav Surthi</p>

              <h3 className="font-semibold">Customer Phone Number:</h3>
              <p className="text-sm">6304749943</p>

              <h3 className="font-semibold">Payment Options:</h3>
              <p className="text-sm">Cash On Delivery</p>

              <h3 className="font-semibold">Amount Collected:</h3>
              <p className="text-sm">958/- INR</p>

              <h3 className="font-semibold">Delivery Remark:</h3>
              <p className="text-sm">Null</p>
            </div>
            <div className="mt-4 flex justify-center">
            <input
              className="border w-fit px-3 py-2 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-600"
              type="submit"
              value="Update Delivary Status"
            />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminAllOrders;
