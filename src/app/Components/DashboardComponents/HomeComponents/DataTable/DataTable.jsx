const DataTable = () => {
  const data = [
    {
      count: 1,
      id: "0001",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
    },
    {
      count: 2,
      id: "0002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
    },
    {
      count: 3,
      id: "0003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Subscriber",
    },
    {
      count: 4,
      id: "0004",
      name: "Bob Williams",
      email: "bob.williams@example.com",
      role: "Admin",
    },
    {
      count: 5,
      id: "0005",
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      role: "Guest",
    },
  ];

  return (
    <div className="p-1 bg-gray-50">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-6">{item.id}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.email}</td>
                <td className="py-3 px-6">{item.role}</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
