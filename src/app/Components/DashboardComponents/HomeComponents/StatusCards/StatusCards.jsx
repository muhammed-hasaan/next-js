import { FaDatabase, FaUsers } from "react-icons/fa";

export default function StatusCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        title="Total Data"
        value="1500"
        icon={<FaDatabase className="h-10 w-10 text-white" />} // Ensure this is correctly styled
        gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
      />
      <Card
        title="Total Users"
        value="350"
        icon={<FaUsers className="h-10 w-10 text-white" />}
        gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
      />
      <Card
        title="Active Users"
        value="120"
        icon={<FaUsers className="h-10 w-10 text-white" />}
        gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
      />
    </div>
  );
}

const Card = ({ title, value, icon, gradient }) => (
  <div className="relative bg-white shadow-lg rounded-2xl p-6 overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
    {/* Decorative Gradient Background */}
    <div
      className={`${gradient} absolute inset-0 opacity-20 blur-md rounded-2xl z-0`}
    ></div>

    {/* Card Content */}
    <div className="relative z-10 flex items-center space-x-4">
      {/* Icon Container */}
      <div className={`p-4 rounded-full shadow-lg ${gradient}`}>{icon}</div>

      {/* Textual Data */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <p className="text-4xl font-extrabold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);
