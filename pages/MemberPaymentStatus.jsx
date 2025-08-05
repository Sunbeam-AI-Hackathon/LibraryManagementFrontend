import React, { useState } from "react";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { Select } from "../components/common/Select";

const mockMembers = [
  {
    id: "LIB001025",
    name: "Robert Johnson",
    email: "robert.j@email.com",
    lastPayment: "Jun 3, 2025",
    nextDueDate: "Jul 3, 2025",
    status: "OVERDUE",
    amountDue: 500,
    fine: 140,
  },
  {
    id: "LIB001087",
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    lastPayment: "Jun 20, 2025",
    nextDueDate: "Jul 20, 2025",
    status: "OVERDUE",
    amountDue: 500,
    fine: 80,
  },
  {
    id: "LIB001156",
    name: "David Wilson",
    email: "david.wilson@email.com",
    lastPayment: "Jul 15, 2025",
    nextDueDate: "Aug 15, 2025",
    status: "DUE_SOON",
    amountDue: 500,
    fine: 0,
  },
  {
    id: "LIB001298",
    name: "Sarah Brown",
    email: "sarah.brown@email.com",
    lastPayment: "Jul 28, 2025",
    nextDueDate: "Aug 28, 2025",
    status: "DUE_SOON",
    amountDue: 500,
    fine: 0,
  },
  {
    id: "LIB001234",
    name: "John Doe",
    email: "john.doe@email.com",
    lastPayment: "Jul 30, 2025",
    nextDueDate: "Aug 30, 2025",
    status: "CURRENT",
    amountDue: 0,
    fine: 0,
  },
  {
    id: "LIB001235",
    name: "Alice Smith",
    email: "alice.smith@email.com",
    lastPayment: "Jul 29, 2025",
    nextDueDate: "Aug 29, 2025",
    status: "CURRENT",
    amountDue: 0,
    fine: 0,
  },
  {
    id: "LIB001345",
    name: "Michael Davis",
    email: "michael.davis@email.com",
    lastPayment: "Aug 5, 2025",
    nextDueDate: "Sep 5, 2025",
    status: "CURRENT",
    amountDue: 0,
    fine: 0,
  },
];

const statusClasses = {
  OVERDUE: "bg-red-100 text-red-600",
  DUE_SOON: "bg-yellow-100 text-yellow-700",
  CURRENT: "bg-green-100 text-green-700",
};

export default function MemberPaymentStatus() {
  const [members, setMembers] = useState(mockMembers);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-1">Member Payment Status</h1>
      <p className="text-gray-600 mb-6">
        Monitor and manage payment status of all library members
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        <SummaryCard label="Total Members" value="45" />
        <SummaryCard label="Payment Current" value="32" />
        <SummaryCard label="Payment Due Soon" value="8" />
        <SummaryCard label="Payment Overdue" value="5" />
        <SummaryCard label="Outstanding Amount" value="₹2,500" />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-6 flex flex-wrap items-center gap-4">
        <Select label="Payment Status" options={["All Members", "Current", "Due Soon", "Overdue"]} />
        <Input placeholder="Name, email, or ID..." />
        <Select label="Member Since" options={["All Time", "Last 30 Days", "Last 6 Months"]} />
        <Button onClick={() => {}} variant="primary">
          Apply Filters
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b"><input type="checkbox" /></th>
              <th className="p-2 border-b">Member Details</th>
              <th className="p-2 border-b">Member ID</th>
              <th className="p-2 border-b">Last Payment</th>
              <th className="p-2 border-b">Next Due Date</th>
              <th className="p-2 border-b">Status</th>
              <th className="p-2 border-b">Amount Due</th>
              <th className="p-2 border-b">Outstanding Fines</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className={m.status === "OVERDUE" ? "bg-red-50" : m.status === "DUE_SOON" ? "bg-yellow-50" : ""}>
                <td className="p-2 border-b"><input type="checkbox" /></td>
                <td className="p-2 border-b">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-gray-600">{m.email}</div>
                </td>
                <td className="p-2 border-b">{m.id}</td>
                <td className="p-2 border-b">{m.lastPayment}</td>
                <td className="p-2 border-b">{m.nextDueDate}</td>
                <td className="p-2 border-b">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${statusClasses[m.status]}`}>
                    {m.status}
                  </span>
                </td>
                <td className="p-2 border-b text-red-600 font-medium">₹{m.amountDue}</td>
                <td className="p-2 border-b text-gray-700">₹{m.fine}</td>
                <td className="p-2 border-b space-x-1">
                  {m.status !== "CURRENT" && (
                    <Button variant="primary" onClick={() => alert(`Collecting from ${m.name}`)}>
                      Collect
                    </Button>
                  )}
                  <Button variant="secondary">{
                    m.status === "CURRENT" ? "Profile" : m.status === "OVERDUE" ? "Remind" : "History"
                  }</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 p-4">{members.length} total members</div>
      </div>
    </div>
  );
}

function SummaryCard({ label, value }) {
  return (
    <div className="bg-white shadow p-4 rounded text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}
