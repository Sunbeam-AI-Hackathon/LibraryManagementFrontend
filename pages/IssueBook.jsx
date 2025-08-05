import React, { useState } from 'react';
import {Navbar} from '../components/common/Navbar';
import {SearchBar} from '../components/common/SearchBar';
import {Select} from '../components/common/Select';
import {Button} from '../components/common/Button';
import MemberInfo from '../components/members/MemberInfo';

// Mock Data for MemberInfo
const mockMember = {
  id: "LIB001234",
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+91 9876543210",
  paymentStatus: "Paid (Aug 30)",
  booksIssued: 2,
  outstandingFines: 0,
};

// IssueBook Page
export function IssueBook() {
  const [formData, setFormData] = useState({
    member: "",
    book: "",
    copy: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Issue Book</h2>
        <p className="text-gray-600 mb-6">Issue books to registered library members</p>
        <SearchBar
          label="Search Member"
          name="member"
          value={formData.member}
          onChange={handleChange}
          placeholder="Search by member name or ID"
          required
        />
        <SearchBar
          label="Search Book"
          name="book"
          value={formData.book}
          onChange={handleChange}
          placeholder="Search by book title or ISBN"
          required
        />
        <Select
          label="Select Copy"
          name="copy"
          value={formData.copy}
          onChange={handleChange}
          options={[
            { value: "copy1", label: "Copy #001" },
            { value: "copy2", label: "Copy #002" },
          ]}
          placeholder="First select a book"
        />
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Issue Summary</h3>
          <p className="text-sm text-gray-600">Issue Date: August 5, 2025</p>
          <p className="text-sm text-gray-600">Return Due Date: August 12, 2025</p>
          <p className="text-sm text-gray-600">Loan Period: 7 days</p>
          <p className="text-sm text-gray-600">Fine Rate (if late): ₹5 per day</p>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button onClick={handleSubmit}>Issue Book</Button>
          <Button variant="secondary" onClick={() => {}}>Reset Form</Button>
        </div>
        <div className="mt-6">
          <MemberInfo member={mockMember} />
        </div>
      </div>
    </div>
  );
}