import React from "react";
import profileImg from "/profile-icon.png";

const DelivaryProfile = () => {
  const delivaryData = {
    profileImg: profileImg,
    name: "Suraj Kumar",
    employeeId: "1502D",
    phoneNumber: 6304749943,
    address: "Sai Chalapathi Boys Hostel, Opp Aditya Elite",
    area: "KL University Road, Vaddeshwaram",
    landmark: "KL University Road",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pincode: 522502,
    joiningDate: "2023-01-01",
    itemsDelivered: 10,
    itemsNotDelivered: 5,
    totalDelivary: 15,
  };

  return (
    <div>
      
      {delivaryData ? (
        <div className="p-8">
          <div className="p-8 bg-gray-100 shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src={delivaryData.profileImg} alt="logo" className="w-24 h-24" />
                </div>
              </div>
            </div>

            <div className="mt-32 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">{delivaryData.name}</h1>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Section - Personal Details */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-700">Personal Details</h2>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Employee ID:</span> {delivaryData.employeeId}
                      </p>
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Phone No:</span> {delivaryData.phoneNumber}
                      </p>
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Address:</span> {delivaryData.address}, {delivaryData.city}, {delivaryData.state}
                      </p>
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Joining Date:</span> {delivaryData.joiningDate}
                      </p>
                    </div>
                  </div>

                  {/* Right Section - Delivery Stats */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-700">Delivery Stats</h2>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Items Delivered Successfully:</span> {delivaryData.itemsDelivered}
                      </p>
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Items Not Delivered:</span> {delivaryData.itemsNotDelivered}
                      </p>
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">Success Rate:</span> {(delivaryData.itemsDelivered / delivaryData.totalDelivary) * 100}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/delivary/editdelivaryprofile" className="bg-red-600 p-2 rounded text-white px-5">Edit</a>
            </div>
          </div>
        </div>
      ) : (
        <p>No Delivery Profile Found</p>
      )}
    </div>
  );
};

export default DelivaryProfile;
