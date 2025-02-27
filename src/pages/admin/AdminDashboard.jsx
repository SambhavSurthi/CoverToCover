import { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  ShoppingCart,
  Package,
  Truck,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Calendar
} from "lucide-react";
import "chart.js/auto";

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
      
      {/* Date Selector */}
      <div className="mb-4 flex items-center gap-4">
        <Calendar size={24} />
        <span className="font-medium">Select Date:</span>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Total Products" value="1200" icon={<Package />} />
        <DashboardCard title="Total Sales" value="₹50,000" icon={<DollarSign />} />
        <DashboardCard title="Today's Orders" value="30" icon={<ShoppingCart />} />
        <DashboardCard title="Sold Products" value="450" icon={<TrendingUp />} />
        <DashboardCard title="Total Orders" value="500" icon={<ShoppingCart />} />
        <DashboardCard title="Pending Deliveries" value="20" icon={<Truck />} />
        <DashboardCard title="Low Stock Alerts" value="15" icon={<AlertTriangle />} />
        <DashboardCard title="Profits" value="₹10,000" icon={<DollarSign />} />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-2">Sales Trends</h2>
          <Line data={salesTrendsData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-2">Top Selling Products</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Sold</th>
                <th className="border p-2">Total Profit</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">{item.sold}</td>
                  <td className="border p-2">₹{item.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-2">Stock Levels & Restock Alerts</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              {stockLevels.map((item, index) => (
                <tr key={index} className={`border p-2 ${item.stock < 10 ? 'bg-red-300' : item.stock > 100 ? 'bg-orange-300' : ''}`}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-2">Order Status Distribution</h2>
          <Pie data={sampleChartData} />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => (
  <div className="p-4 flex items-center gap-4 bg-white shadow-md rounded-lg">
    <div className="p-2 bg-gray-200 rounded-full">{icon}</div>
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const salesTrendsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [100, 200, 150, 300, 250, 400],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Profit",
      data: [50, 100, 80, 200, 120, 300],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    }
  ],
};

const stockLevels = [
    { name: "Item X", category: "Category 1", stock: 5 },
    { name: "Item Y", category: "Category 2", stock: 120 },
    { name: "Item Z", category: "Category 3", stock: 8 },
    { name: "Item W", category: "Category 4", stock: 200 },
];
const sampleChartData = {
    labels: ["Pending", "Shipped", "Delivered", "Cancelled"],
    datasets: [
      {
        data: [10, 20, 30, 5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

const topSellingProducts = [
  { name: "Product A", category: "Category 1", sold: 150, profit: 20000 },
  { name: "Product B", category: "Category 2", sold: 120, profit: 18000 },
  { name: "Product C", category: "Category 3", sold: 100, profit: 15000 },
  { name: "Product D", category: "Category 4", sold: 90, profit: 12000 },
  { name: "Product E", category: "Category 5", sold: 80, profit: 10000 },
];

export default AdminDashboard;