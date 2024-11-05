import React, { useState } from "react";
import { useRouter } from "next/navigation";
const InvoiceDataTable = () => {
  const router = useRouter();
  const data = [
    {
      invoiceNo: "ENGI-INV-2024-391",
      poDeal: "PO1235",
      monthYear: "Jul / 2024",
      date: "28-05-2025",
      dueDate: "28-06-2025",
      invoiceAmount: "100",
      paymentStatus: "Pay-Not-Done",
      status: "Approved",
    },
    {
      invoiceNo: "ENGF-INV-2024-491",
      poDeal: "PO7514",
      monthYear: "Jul / 2026",
      date: "4-05-2025",
      dueDate: "8-06-2025",
      invoiceAmount: "10000",
      paymentStatus: "Pay-Done",
      status: "Pending",
    },
    {
      invoiceNo: "ENGQ-INV-2024-594",
      poDeal: "PO5125",
      monthYear: "Jul / 2023",
      date: "8-05-2022",
      dueDate: "3-06-2025",
      invoiceAmount: "1300",
      paymentStatus: "Not-Done",
      status: "Reconciled",
    },
    {
      invoiceNo: "ENGF-INV-2024-491",
      poDeal: "PO7514",
      monthYear: "Jul / 2026",
      date: "4-05-2025",
      dueDate: "8-06-2025",
      invoiceAmount: "10000",
      paymentStatus: "Pay-Done",
      status: "Pending",
    },
    {
      invoiceNo: "ENGI-INV-2024-391",
      poDeal: "PO1235",
      monthYear: "Jul / 2024",
      date: "28-05-2025",
      dueDate: "28-06-2025",
      invoiceAmount: "100",
      paymentStatus: "Pay-Not-Done",
      status: "Approved",
    },
    {
      invoiceNo: "ENGQ-INV-2024-594",
      poDeal: "PO5125",
      monthYear: "Jul / 2023",
      date: "8-05-2022",
      dueDate: "3-06-2025",
      invoiceAmount: "1300",
      paymentStatus: "Not-Done",
      status: "Reconciled",
    },
  ];

  function NavigateToInvoiceDetail() {
    router.push("/Dashboard/Invoice/InvoiceDetail");
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  // Filter the data based on search term and status filter
  const filteredData = data.filter((item) => {
    const matchesSearch = Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus =
      filterStatus === "All" ||
      item.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mt-4 w-[100%] mx-auto">
      {/* Tabs for Status Filter */}
      <div className="flex justify-between items-center ">
        <div className="mb-4 flex justify-center space-x-4  bg-red-100 p-1 rounded-md">
          {["All", "Pending", "Reconciled", "Approved"].map((status) => (
            <button
              key={status}
              className={`w-[100px]  py-2 rounded-md ${
                filterStatus === status
                  ? "bg-[#ff0000] text-white"
                  : "text-gray-700"
              } hover:bg-[#ff0000] hover:text-white transition duration-300`}
              onClick={() => handleStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Search Filter */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search Invoices..."
            className="border border-gray-300 p-2 rounded-lg w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[350px]"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      {/* Invoice Table */}
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-2 border-b">#</th>
            <th className="py-2 px-2 border-b whitespace-nowrap">Invoice No</th>
            <th className="py-2 px-2 border-b whitespace-nowrap">PO / Deal</th>
            <th className="py-2 px-2 border-b">Month / Year</th>
            <th className="py-2 px-2 border-b">Date</th>
            <th className="py-2 px-2 border-b">Due Date</th>
            <th className="py-2 px-2 border-b">Invoice Amount</th>
            <th className="py-2 px-2 border-b">Payment Status</th>
            <th className="py-2 px-2 border-b">Status</th>
            <th className="py-2 px-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-2 border-b">{index + 1}</td>
                <td className="py-2 px-2 border-b text-blue-600 hover:underline cursor-pointer">
                  {item.invoiceNo}
                </td>
                <td className="py-2 px-2 border-b">{item.poDeal}</td>
                <td className="py-2 px-2 border-b">{item.monthYear}</td>
                <td className="py-2 px-2 border-b">{item.date}</td>
                <td className="py-2 px-2 border-b">{item.dueDate}</td>
                <td className="py-2 px-2 border-b">{item.invoiceAmount}</td>
                <td className="py-2 px-2 border-b">
                  <span className="text-green-600 font-semibold">
                    {item.paymentStatus}
                  </span>
                </td>
                <td className="py-2 px-2 border-b">
                  <span
                    className={`px-2 py-1 rounded ${
                      item.status === "Pending"
                        ? "bg-yellow-300 text-black"
                        : item.status === "Reconciled"
                        ? "bg-green-300 text-black"
                        : "bg-blue-300 text-black"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-2 border-b">
                  <button
                    onClick={NavigateToInvoiceDetail}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Action
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="py-4 text-center text-gray-500">
                No matching results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceDataTable;
