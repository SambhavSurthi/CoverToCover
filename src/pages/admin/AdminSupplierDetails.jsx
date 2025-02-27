import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";

const AdminSupplierDetails = ({ suppliers, onEdit, onDelete }) => {
  const { supplierId } = useParams();
  const navigate = useNavigate();
  const supplier = suppliers.find((s) => s.id.toString() === supplierId);

  if (!supplier) {
    return <p className="text-center text-red-500">Supplier not found</p>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Supplier Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Supplier ID:</h3>
          <p>{supplier.id}</p>
        </div>
        <div>
          <h3 className="font-semibold">Supplier Name:</h3>
          <p>{supplier.name}</p>
        </div>
        <div>
          <h3 className="font-semibold">Company Name:</h3>
          <p>{supplier.company}</p>
        </div>
        <div>
          <h3 className="font-semibold">Email:</h3>
          <p>{supplier.email}</p>
        </div>
        <div>
          <h3 className="font-semibold">Phone Number:</h3>
          <p>{supplier.phone}</p>
        </div>
        {supplier.altPhone && (
          <div>
            <h3 className="font-semibold">Alternate Phone:</h3>
            <p>{supplier.altPhone}</p>
          </div>
        )}
        <div className="sm:col-span-2">
          <h3 className="font-semibold">Address:</h3>
          <p>
            {supplier.street}, {supplier.city}, {supplier.state}, {supplier.country}, {supplier.postalCode}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => onEdit(supplier)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          <Edit className="mr-2" size={18} /> Edit
        </button>
        <button
          onClick={() => {
            onDelete(supplier.id);
            navigate("/"); // Redirect after deleting
          }}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
        >
          <Trash2 className="mr-2" size={18} /> Delete
        </button>
      </div>
    </div>
  );
};

export default AdminSupplierDetails;
