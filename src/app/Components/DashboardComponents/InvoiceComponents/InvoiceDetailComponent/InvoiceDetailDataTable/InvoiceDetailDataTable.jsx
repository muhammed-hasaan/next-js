export default function InvoiceDetailDataTable() {
  //   const data = [
  //     {
  //       hash: 1,
  //       InvoiceNo: "ENGI-INV-2024-390",
  //       PODeal: "Deal",
  //       MonthYear: "Jul/2023",
  //       StartDate: "28-05-2024",
  //       EndDate: "30-06-2024",
  //       InvAmount: "5840",
  //       PayStatus: "Reconciled",
  //       Status: "Pending",
  //     },
  //     {
  //       hash: 2,
  //       InvoiceNo: "ENGI-INV-2024-390",
  //       PODeal: "Deal",
  //       MonthYear: "Jul/2023",
  //       StartDate: "28-05-2024",
  //       EndDate: "30-06-2024",
  //       InvAmount: "5840",
  //       PayStatus: "Reconciled",
  //       Status: "Pending",
  //     },
  //     {
  //       hash: 3,
  //       InvoiceNo: "ENGI-INV-2024-390",
  //       PODeal: "Deal",
  //       MonthYear: "Jul/2023",
  //       StartDate: "28-05-2024",
  //       EndDate: "30-06-2024",
  //       InvAmount: "5840",
  //       PayStatus: "Reconciled",
  //       Status: "Pending",
  //     },
  //     {
  //       hash: 3,
  //       InvoiceNo: "ENGI-INV-2024-390",
  //       PODeal: "Deal",
  //       MonthYear: "Jul/2023",
  //       StartDate: "28-05-2024",
  //       EndDate: "30-06-2024",
  //       InvAmount: "5840",
  //       PayStatus: "Reconciled",
  //       Status: "Pending",
  //     },
  //     {
  //       hash: 3,
  //       InvoiceNo: "ENGI-INV-2024-390",
  //       PODeal: "Deal",
  //       MonthYear: "Jul/2023",
  //       StartDate: "28-05-2024",
  //       EndDate: "30-06-2024",
  //       InvAmount: "5840",
  //       PayStatus: "Reconciled",
  //       Status: "Pending",
  //     },
  //     {
  //       hash: 3,
  //       InvoiceNo: "ENGI-INV-2024-390",
  //       PODeal: "Deal",
  //       MonthYear: "Jul/2023",
  //       StartDate: "28-05-2024",
  //       EndDate: "30-06-2024",
  //       InvAmount: "5840",
  //       PayStatus: "Reconciled",
  //       Status: "Pending",
  //     },
  //   ];

  return (
    <div className="p-6">
      {/* Invoice Details Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-left">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">PO / Deal</td>
              <td className="p-2">ENGI-INV-2024-390</td>
              <td className="p-2 font-semibold">Client</td>
              <td className="p-2 text-orange-500">GRIMSHAW</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Invoice No</td>
              <td className="p-2">ENGI-INV-2024-390</td>
              <td className="p-2 font-semibold">Month</td>
              <td className="p-2">Jul / 2023</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Invoice Date</td>
              <td className="p-2 text-orange-500">28-05-2024</td>
              <td className="p-2 font-semibold">Due Date</td>
              <td className="p-2"></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Payment Terms</td>
              <td className="p-2"></td>
              <td className="p-2 font-semibold">Reference No</td>
              <td className="p-2"></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Status</td>
              <td className="p-2">
                <span className="text-green-500 bg-green-100 px-2 py-1 inline-block rounded">
                  RECONCILED
                </span>
              </td>
              <td className="p-2 font-semibold">Stage</td>
              <td className="p-2">
                <span className="text-yellow-500 bg-yellow-100 px-2 py-1 inline-block rounded">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Project Code</td>
              <td className="p-2"></td>
              <td className="p-2 font-semibold">
                Approved Signed Stamp Invoice
              </td>
              <td className="p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Employee Details Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-200 text-left">
          <thead>
            <tr
              className="bg-gray-100 border-b border-gray-200"
              style={{ fontSize: "11px", fontWeight: "bold" }}
            >
              <th className="p-2 whitespace-nowrap">Employee Name</th>
              <th className="p-2">Deal Price</th>
              <th className="p-2 whitespace-nowrap">Rate / Day</th>
              <th className="p-2 whitespace-nowrap">Total Month Days</th>
              <th className="p-2 whitespace-nowrap">No of Days worked</th>
              <th className="p-2 whitespace-nowrap">OT Hours</th>
              <th className="p-2 whitespace-nowrap">Workstation Deal Price</th>
              <th className="p-2 whitespace-nowrap">Software Deal Price</th>
              <th className="p-2">Price</th>
              <th className="p-2">5% VAT</th>
              <th className="p-2 whitespace-nowrap">Total Amount</th>
              <th className="p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-2 text-orange-500">Anshu Jalaludeen</td>
              <td className="p-2">17,250.00</td>
              <td className="p-2">556.45</td>
              <td className="p-2">31</td>
              <td className="p-2">1</td>
              <td className="p-2">0</td>
              <td className="p-2">0.00</td>
              <td className="p-2">0.00</td>
              <td className="p-2">556.45</td>
              <td className="p-2">27.82</td>
              <td className="p-2">584.27</td>
              <td className="p-2">good</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="mt-4">
        <div className="grid grid-cols-2">
          <div></div>
          <div className="text-right space-y-2">
            <p>
              Total Taxable Value: <span className="font-semibold">556.45</span>
            </p>
            <p>
              Total VAT Added: <span className="font-semibold">27.82</span>
            </p>
            <p>
              Total Invoice Value: <span className="font-semibold">584.27</span>
            </p>
            <p>
              Total Paid Amount:{" "}
              <span className="font-semibold text-green-500">584.27</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
