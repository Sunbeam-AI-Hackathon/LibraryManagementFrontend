import React from "react";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { Select } from "../components/common/Select";

const overdueBooks = [
  {
    title: "Design Patterns",
    subtitle: "Elements of Reusable Object-Oriented Software",
    author: "By Gang of Four",
    member: "#007",
    name: "Robert Johnson",
    copyId: "003",
    dueDate: "July 15, 2025",
    daysOverdue: 19,
    priority: "CRITICAL",
    fine: 95,
  },
  {
    title: "The Pragmatic Programmer",
    author: "By Andrew Hunt & David Thomas",
    member: "#003",
    name: "Maria Garcia",
    copyId: "003",
    dueDate: "July 18, 2025",
    daysOverdue: 16,
    priority: "CRITICAL",
    fine: 80,
  },
  {
    title: "Code Complete",
    author: "By Steve McConnell",
    member: "#002",
    name: "David Wilson",
    copyId: "002",
    dueDate: "July 20, 2025",
    daysOverdue: 14,
    priority: "CRITICAL",
    fine: 70,
  },
  {
    title: "Refactoring",
    subtitle: "Improving the Design of Existing Code",
    author: "By Martin Fowler",
    member: "#001",
    name: "Sarah Brown",
    copyId: "001",
    dueDate: "July 25, 2025",
    daysOverdue: 9,
    priority: "HIGH",
    fine: 45,
  },
  {
    title: "You Don’t Know JS: Scope & Closures",
    author: "By Kyle Simpson",
    member: "#004",
    name: "Michael Davis",
    copyId: "004",
    dueDate: "July 27, 2025",
    daysOverdue: 7,
    priority: "HIGH",
    fine: 35,
  },
  {
    title: "Clean Architecture",
    author: "By Robert C. Martin",
    member: "#005",
    name: "Emma Wilson",
    copyId: "005",
    dueDate: "July 30, 2025",
    daysOverdue: 4,
    priority: "MEDIUM",
    fine: 20,
  },
  {
    title: "Effective Java",
    author: "By Joshua Bloch",
    member: "#006",
    name: "James Anderson",
    copyId: "006",
    dueDate: "August 1, 2025",
    daysOverdue: 2,
    priority: "MEDIUM",
    fine: 10,
  },
  {
    title: "Spring in Action",
    author: "By Craig Walls",
    member: "#008",
    name: "Lisa Thompson",
    copyId: "008",
    dueDate: "August 2, 2025",
    daysOverdue: 1,
    priority: "MEDIUM",
    fine: 5,
  },
];

const priorityStyles = {
  CRITICAL: "bg-red-100 text-red-600",
  HIGH: "bg-yellow-100 text-yellow-800",
  MEDIUM: "bg-yellow-50 text-yellow-700",
};

export default function OverdueBooks() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-1">Overdue Books</h1>
      <p className="text-gray-600 mb-6">Track and manage books past their return due date</p>

      {/* Alert */}
      <div className="bg-red-100 text-red-800 border border-red-300 px-4 py-3 mb-6 rounded">
        <strong className="font-bold">Urgent Action Required:</strong> 3 books are critically overdue (15+ days).
        Please contact members immediately and collect outstanding fines.
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        <SummaryCard label="Total Overdue" value="8" />
        <SummaryCard label="Critical (15+ Days)" value="3" />
        <SummaryCard label="High Priority (7+ Days)" value="5" />
        <SummaryCard label="Total Fines Due" value="₹195" />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-6 flex flex-wrap gap-4">
        <Select label="Priority Level" options={["All Overdue Books", "Critical", "High", "Medium"]} />
        <Input placeholder="Search by member name or ID..." />
        <Input placeholder="Search by book title..." />
        <Button variant="primary">Apply Filters</Button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b text-left">Book Details</th>
              <th className="p-2 border-b text-left">Member</th>
              <th className="p-2 border-b text-left">Copy ID</th>
              <th className="p-2 border-b text-left">Due Date</th>
              <th className="p-2 border-b text-left">Days Overdue</th>
              <th className="p-2 border-b text-left">Priority</th>
              <th className="p-2 border-b text-left">Fine Amount</th>
              <th className="p-2 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {overdueBooks.map((book, i) => (
              <tr key={i} className="border-t border-gray-100 bg-red-50">
                <td className="p-3">
                  <div className="font-medium">{book.title}</div>
                  {book.subtitle && <div className="text-xs text-gray-600">{book.subtitle}</div>}
                  <div className="text-xs text-gray-600">{book.author}</div>
                </td>
                <td className="p-3">
                  <div className="font-medium">{book.name}</div>
                  <div className="text-xs text-gray-500">{book.member}</div>
                </td>
                <td className="p-3">{book.copyId}</td>
                <td className="p-3">{book.dueDate}</td>
                <td className="p-3 text-red-700 font-semibold">{book.daysOverdue} days</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${priorityStyles[book.priority]}`}>
                    {book.priority}
                  </span>
                </td>
                <td className="p-3 text-red-700 font-medium">₹{book.fine}</td>
                <td className="p-3 space-x-2">
                  <Button variant="primary" size="sm">Collect Fine</Button>
                  <Button variant="secondary" size="sm">Contact</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-sm text-gray-500">{overdueBooks.length} books overdue</div>
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
