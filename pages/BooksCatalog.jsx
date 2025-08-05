import React from 'react'
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Filter } from '../components/common/Filter';
import BookTable from './../components/books/BookTable';
import { useState } from 'react';
import { Navbar } from '../components/common/Navbar';




// BooksCatalog Page
export function BooksCatalog() {
  const [filters, setFilters] = useState({
    subject: "",
    availability: "",
    rack: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const mockBooks = [
  {
    id: "001",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    subject: "Programming",
    isbn: "978-0132350884",
    price: "2499",
    totalCopies: 5,
    availableCopies: 3,
    issuedCopies: 2,
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
  },
  {
    id: "002",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    subject: "Programming",
    isbn: "978-0201616224",
    price: "1899",
    totalCopies: 3,
    availableCopies: 1,
    issuedCopies: 2,
  },
];

  const handleApplyFilters = () => {};
  const handleResetFilters = () => setFilters({ subject: "", availability: "", rack: "" });

  const filterConfig = [
    {
      type: "select",
      label: "Subject",
      value: filters.subject,
      onChange: handleFilterChange,
      name: "subject",
      options: [
        { value: "all", label: "All Subjects" },
        { value: "programming", label: "Programming" },
        { value: "science", label: "Science" },
      ],
      placeholder: "Select Subject",
    },
    {
      type: "select",
      label: "Availability",
      value: filters.availability,
      onChange: handleFilterChange,
      name: "availability",
      options: [
        { value: "all", label: "All Books" },
        { value: "available", label: "Available" },
        { value: "out", label: "Out of Stock" },
      ],
      placeholder: "Select Availability",
    },
    {
      type: "select",
      label: "Rack Location",
      value: filters.rack,
      onChange: handleFilterChange,
      name: "rack",
      options: [
        { value: "all", label: "All Racks" },
        { value: "rack1", label: "Rack 1" },
        { value: "rack2", label: "Rack 2" },
      ],
      placeholder: "Select Rack",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Books Catalog</h2>
        <p className="text-gray-600 mb-6">Complete library inventory with copy management</p>
        <div className="flex justify-between mb-4">
          <Button onClick={() => {}}>Add New Book</Button>
          <Button onClick={() => {}}>Add Copy</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card title="Total Books" value="247" />
          <Card title="Total Copies" value="456" />
          <Card title="Available" value="158" />
        </div>
        <Filter filters={filterConfig} onApply={handleApplyFilters} onReset={handleResetFilters} />
        <BookTable books={mockBooks} />
      </div>
    </div>
  );
}