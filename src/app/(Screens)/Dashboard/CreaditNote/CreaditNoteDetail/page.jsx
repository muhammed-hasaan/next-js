"use client";
import DashboardLayout from "../../../../Sections/DashboardSections/dashboard";

const notesData = {
  noteId: "1",
  jobTitle: "Software Engineer",
  companyName: "Tech Corp",
  dateCreated: "2024-09-01",
  lastUpdated: "2024-09-15",
  noteContent: "Follow up on application.",
  tags: "application, follow-up",
  priority: "High",
  status: "Pending",
};

const CreditNoteDetail = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-end w-full p-6">
        <div className="flex justify-center items-end w-[100%] flex-col ">
          <div className=" w-[80%] flex justify-center items-center space-x-2 ">
            <h1 className="text-[#ff0000] text-3xl font-bold">Creadit </h1>
            <h1 className="text-3xl font-bold"> NoteInfo</h1>
          </div>
          <div className=" w-[80%] flex justify-center items-center ">
            <hr className="bg-black h-1 text-black w-[100px] mt-3" />
          </div>
          <br />
        </div>
        <div className="p-6 bg-gray-50 w-[80%] rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">
            Credit Note Information
          </h2>

          <table className="min-w-full bg-[#F9FAFB] border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left text-gray-700">
                  Field
                </th>
                <th className="py-3 px-4 border-b text-left text-gray-700">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Job Title</td>
                <td className="py-3 px-4 text-gray-600">
                  {notesData.jobTitle}
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Company Name</td>
                <td className="py-3 px-4 text-gray-600">
                  {notesData.companyName}
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Date Created</td>
                <td className="py-3 px-4 text-gray-600">
                  {notesData.dateCreated}
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Last Updated</td>
                <td className="py-3 px-4 text-gray-600">
                  {notesData.lastUpdated}
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Tags</td>
                <td className="py-3 px-4 text-gray-600">{notesData.tags}</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Priority Level</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    notesData.priority === "High"
                      ? "text-red-500"
                      : notesData.priority === "Medium"
                      ? "text-yellow-600"
                      : "text-green-500"
                  }`}
                >
                  {notesData.priority}
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Status</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    notesData.status === "Pending"
                      ? "text-yellow-600"
                      : notesData.status === "Reconciled"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {notesData.status}
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Note Content</td>
                <td className="py-3 px-4 text-gray-600">
                  {notesData.noteContent}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => router.back()}
              className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-lg transition duration-300 mr-4"
            >
              Back
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Mark as{" "}
              {notesData.status === "Pending" ? "Approved" : "Reconciled"}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreditNoteDetail;
