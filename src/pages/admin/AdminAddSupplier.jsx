import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddSupplier = ({ addSupplier }) => {
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    altPhone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupplier = { ...supplier, id: Date.now() };
    addSupplier(newSupplier);
    navigate(`/supplier/${newSupplier.id}`); // Redirect to details page
  };

  return (
    <div className="max-w-lg mt-5 mx-auto p-6 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Supplier</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="text" name="name" placeholder="Supplier Name" value={supplier.name} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="company" placeholder="Company Name" value={supplier.company} onChange={handleChange} className="p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={supplier.email} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="phone" placeholder="Phone Number" value={supplier.phone} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="altPhone" placeholder="Alternate Phone (Optional)" value={supplier.altPhone} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="street" placeholder="Street Address" value={supplier.street} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="city" placeholder="City" value={supplier.city} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="state" placeholder="State/Province" value={supplier.state} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="country" placeholder="Country" value={supplier.country} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="postalCode" placeholder="Postal Code" value={supplier.postalCode} onChange={handleChange} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Supplier</button>
      </form>
    </div>
  );
};

export default AdminAddSupplier;
