import { useState } from "react";
import { Download, Search } from "lucide-react";

const AdminInventoryData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const inventoryItems = [
    {
      id: 2001,
      name: "The Great Gatsby",
      category: "Fiction",
      supplier: "Penguin Books",
      buyingPrice: 300,
      sellingPrice: 500,
      quantity: 100,
    },
    {
      id: 2002,
      name: "1984",
      category: "Dystopian",
      supplier: "HarperCollins",
      buyingPrice: 350,
      sellingPrice: 550,
      quantity: 80,
    },
    {
      id: 2003,
      name: "Sapiens: A Brief History of Humankind",
      category: "History",
      supplier: "Vintage",
      buyingPrice: 500,
      sellingPrice: 800,
      quantity: 50,
    },
    {
      id: 2004,
      name: "Atomic Habits",
      category: "Self-Help",
      supplier: "Random House",
      buyingPrice: 400,
      sellingPrice: 700,
      quantity: 90,
    },
    {
      id: 2005,
      name: "The Alchemist",
      category: "Fiction",
      supplier: "HarperOne",
      buyingPrice: 250,
      sellingPrice: 450,
      quantity: 120,
    },
    {
      id: 2006,
      name: "To Kill a Mockingbird",
      category: "Classic",
      supplier: "J.B. Lippincott & Co.",
      buyingPrice: 380,
      sellingPrice: 600,
      quantity: 70,
    },
    {
      id: 2007,
      name: "The Psychology of Money",
      category: "Finance",
      supplier: "Harriman House",
      buyingPrice: 450,
      sellingPrice: 750,
      quantity: 60,
    },
    {
      id: 2008,
      name: "Harry Potter and the Sorcerer’s Stone",
      category: "Fantasy",
      supplier: "Bloomsbury",
      buyingPrice: 600,
      sellingPrice: 1000,
      quantity: 40,
    },
    {
      id: 2009,
      name: "The Lean Startup",
      category: "Business",
      supplier: "Crown Publishing",
      buyingPrice: 550,
      sellingPrice: 900,
      quantity: 65,
    },
    {
      id: 2010,
      name: "Rich Dad Poor Dad",
      category: "Finance",
      supplier: "Plata Publishing",
      buyingPrice: 300,
      sellingPrice: 500,
      quantity: 85,
    },
  ];

  const sortedItems = [...inventoryItems].sort((a, b) => {
    if (!sortBy) return 0;
    return sortOrder === "asc"
      ? a[sortBy] > b[sortBy]
        ? 1
        : -1
      : a[sortBy] < b[sortBy]
      ? 1
      : -1;
  });

  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSort = (key) => {
    setSortBy(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Inventory Data</h1>

      {/* Filters and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 border rounded-md"
          />
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
          <Download size={20} /> Download CSV
        </button>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              {[
                "id",
                "name",
                "category",
                "supplier",
                "buyingPrice",
                "sellingPrice",
                "quantity",
              ].map((key) => (
                <th
                  key={key}
                  className="border p-3 cursor-pointer"
                  onClick={() => toggleSort(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortBy === key ? (sortOrder === "asc" ? " ▲" : " ▼") : ""}
                </th>
              ))}
              <th className="border p-3">Net Profit</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border p-3">
                <td className="border p-3">{item.id}</td>
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.category}</td>
                <td className="border p-3">{item.supplier}</td>
                <td className="border p-3">₹{item.buyingPrice}</td>
                <td className="border p-3">₹{item.sellingPrice}</td>
                <td className="border p-3">₹{item.quantity}</td>
                <td className="border p-3">
                  {item.sellingPrice - item.buyingPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInventoryData;
