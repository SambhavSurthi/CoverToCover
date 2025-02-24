import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreditCard,
} from "react-icons/fa";
import { motion } from "framer-motion";

const CustomerAddress = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Enter Your Address Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: <FaUser />, placeholder: "Customer Name", type: "text" },
            { icon: <FaPhone />, placeholder: "Customer Phone Number", type: "text" },
            { icon: <FaEnvelope />, placeholder: "Customer Email", type: "email" },
            { icon: <FaPhone />, placeholder: "Alternate Phone Number", type: "text" },
            { icon: <FaMapMarkerAlt />, placeholder: "Flat, House no., Building, Company, Apartment", type: "text", fullWidth: true },
            { icon: <FaMapMarkerAlt />, placeholder: "Area, Street, Sector, Village", type: "text", fullWidth: true },
            { icon: <FaMapMarkerAlt />, placeholder: "Landmark", type: "text" },
            { icon: <FaMapMarkerAlt />, placeholder: "Town/City", type: "text" },
            { placeholder: "State", type: "text" },
            { placeholder: "Pincode", type: "text" },
          ].map(({ icon, placeholder, type, fullWidth }, index) => (
            <div key={index} className={`${fullWidth ? "col-span-2" : "col-span-1"} flex items-center border p-2 rounded-lg bg-gray-50`}>
              {icon && <span className="text-gray-500 mr-2">{icon}</span>}
              <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          ))}
          <div className="col-span-2 flex items-center border p-2 rounded-lg bg-gray-50">
            <FaCreditCard className="text-gray-500 mr-2" />
            <select className="w-full bg-transparent focus:outline-none">
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
        </div>

        <div className="mt-6 text-lg font-semibold">
          <p>
            Total Amount Payable: <span className="text-green-600">₹2506</span>
          </p>
          <p>
            Total Number Of Products: <span className="text-blue-600">5</span>
          </p>
        </div>

        <motion.div animate={animate ? { scale: 1.1 } : {}}>
            <Link to="/customer" >
            <button
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all"
            onClick={() => setAnimate(true)}
          >
            Confirm Order
          </button>
            </Link>
          
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerAddress;
