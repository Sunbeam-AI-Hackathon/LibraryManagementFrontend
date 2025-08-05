import React from "react";

const transactions = [
  {
    id: "T001",
    memberName: "John Doe",
    bookTitle: "Clean Code",
    type: "Issue",
    date: "2025-07-25",
    status: "Returned",
  },
  {
    id: "T002",
    memberName: "Alice Smith",
    bookTitle: "Effective Java",
    type: "Issue",
    date: "2025-07-29",
    status: "Issued",
  },
  {
    id: "T003",
    memberName: "Bob Johnson",
    bookTitle: "Refactoring",
    type: "Return",
    date: "2025-08-01",
    status: "Completed",
  },
];

export default function TransactionTable() {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="p-2 border-b">ID</th>
            <th className="p-2 border-b">Member</th>
            <th className="p-2 border-b">Book</th>
            <th className="p-2 border-b">Type</th>
            <th className="p-2 border-b">Date</th>
            <th className="p-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="text-sm hover:bg-gray-50">
              <td className="p-2 border-b">{tx.id}</td>
              <td className="p-2 border-b">{tx.memberName}</td>
              <td className="p-2 border-b">{tx.bookTitle}</td>
              <td className="p-2 border-b">{tx.type}</td>
              <td className="p-2 border-b">{tx.date}</td>
              <td className="p-2 border-b">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    tx.status === "Issued"
                      ? "bg-yellow-200 text-yellow-800"
                      : tx.status === "Returned"
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

