import React, { useState } from 'react';
import {Navbar} from '../components/common/Navbar';
import {Card} from '../components/common/Card';
import {Filter} from '../components/common/Filter';
import TransactionTable from '../components/transactions/TransactionTable';

// Mock Data for Transactions
const mockTransactions = [
  {
    bookTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    memberName: "John Doe",
    memberId: "LIB001234",
    copyId: "004",
    issueDate: "Aug 3, 2025",
    dueDate: "Aug 10, 2025",
    returnDate: "",
    status: "Current",
    fine: "₹0",
  },
  {
    bookTitle: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    memberName: "Alice Smith",
    memberId: "LIB001235",
    copyId: "003",
    issueDate: "Aug 1, 2025",
    dueDate: "Aug 8, 2025",
    returnDate: "",
    status: "Current",
    fine: "₹0",
  },
];

// IssueHistory Page
export function IssueHistory() {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    status: "",
    member: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {};
  const handleResetFilters = () => setFilters({ fromDate: "", toDate: "", status: "", member: "" });

  const filterConfig = [
    {
      type: "search",
      label: "From Date",
      value: filters.fromDate,
      onChange: handleFilterChange,
      name: "fromDate",
      placeholder: "Select From Date",
    },
    {
      type: "search",
      label: "To Date",
      value: filters.toDate,
      onChange: handleFilterChange,
      name: "toDate",
      placeholder: "Select To Date",
    },
    {
      type: "select",
      label: "Status",
      value: filters.status,
      onChange: handleFilterChange,
      name: "status",
      options: [
        { value: "all", label: "All Transactions" },
        { value: "current", label: "Currently Issued" },
        { value: "returned", label: "Returned" },
      ],
      placeholder: "Select Status",
    },
    {
      type: "search",
      label: "Member",
      value: filters.member,
      onChange: handleFilterChange,
      name: "member",
      placeholder: "Search Member",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Issue History</h2>
        <p className="text-gray-600 mb-6">Complete transaction history of all book issues and returns</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card title="Total Transactions" value="342" />
          <Card title="Currently Issued" value="89" />
          <Card title="Returned" value="245" />
        </div>
        <Filter filters={filterConfig} onApply={handleApplyFilters} onReset={handleResetFilters} />
        <div className="mt-6">
          <TransactionTable transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
}