import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import {Select} from '../components/common/Select';

const BookCopiesManagement = () => {
  const [filter, setFilter] = useState({
    status: 'All Copies',
    rack: 'All Racks',
  });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const book = {
    id: '#001',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    subject: 'Programming',
    isbn: '978-0132350884',
    totalCopies: 5,
    available: 3,
    issued: 2,
    price: 2499,
    copies: [
      {
        id: '001',
        rack: 'Rack 2',
        condition: 'Good',
        added: 'Jan 15, 2023',
        lastBorrowed: 'Jul 10, 2025',
        status: 'Available',
      },
      {
        id: '002',
        rack: 'Rack 2',
        condition: 'Excellent',
        added: 'Jan 15, 2023',
        lastBorrowed: 'Never',
        status: 'Available',
      },
      {
        id: '003',
        rack: 'Rack 2',
        condition: 'Good',
        added: 'Mar 10, 2024',
        lastBorrowed: 'Jun 5, 2025',
        status: 'Available',
      },
      {
        id: '004',
        rack: 'Rack 3',
        condition: 'Good',
        added: 'Apr 1, 2024',
        status: 'Issued',
        issuedTo: 'John Doe (LIB001234)',
        issueDate: 'Aug 3, 2025',
        dueDate: 'Aug 10, 2025',
        daysRemaining: 5,
      },
      {
        id: '005',
        rack: 'Rack 3',
        condition: 'Good',
        added: 'Aug 5, 2025',
        status: 'Issued',
        issuedTo: 'Alice Smith (LIB001235)',
        issueDate: 'Jul 29, 2025',
        dueDate: 'Aug 5, 2025',
        daysRemaining: 2,
      },
    ],
  };

  const filteredCopies = book.copies.filter((copy) => {
    const statusMatch =
      filter.status === 'All Copies' || copy.status === filter.status;
    const rackMatch = filter.rack === 'All Racks' || copy.rack === filter.rack;
    return statusMatch && rackMatch;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Book Info Header */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-sm text-gray-500 italic mt-1">by {book.author}</p>
            <p className="text-sm text-gray-600 mt-1">
              Book ID: {book.id} | Subject: {book.subject} | ISBN: {book.isbn}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button onClick={() => {}}>+ Add New Copy</Button>
            <Button variant="secondary" onClick={() => {}}>Edit Book Info</Button>
          </div>
        </div>
        {/* Book Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{book.totalCopies}</div>
            <div className="text-sm text-gray-600">Total Copies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{book.available}</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{book.issued}</div>
            <div className="text-sm text-gray-600">Currently Issued</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">₹{book.price}</div>
            <div className="text-sm text-gray-600">Book Price</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow-md mb-6 flex flex-wrap gap-4 items-end">
        <div className="w-full md:w-1/3">
          <Select
            label="Filter by Status"
            name="status"
            value={filter.status}
            onChange={handleFilterChange}
            options={['All Copies', 'Available', 'Issued']}
          />
        </div>
        <div className="w-full md:w-1/3">
          <Select
            label="Filter by Rack"
            name="rack"
            value={filter.rack}
            onChange={handleFilterChange}
            options={['All Racks', 'Rack 1', 'Rack 2', 'Rack 3']}
          />
        </div>
        <Button onClick={() => {}}>Apply Filters</Button>
      </div>

      {/* Individual Copies */}
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">Individual Copies</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {filteredCopies.map((copy) => (
            <div
              key={copy.id}
              className={`border rounded-lg p-4 ${
                copy.status === 'Available'
                  ? 'border-green-300 bg-green-50'
                  : 'border-red-300 bg-red-50'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold">Copy #{copy.id}</h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    copy.status === 'Available'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {copy.status}
                </span>
              </div>
              <p className="text-sm">Rack Location: {copy.rack}</p>
              <p className="text-sm">Condition: {copy.condition}</p>
              <p className="text-sm">Added Date: {copy.added}</p>

              {copy.status === 'Available' && (
                <>
                  <p className="text-sm">Last Borrowed: {copy.lastBorrowed}</p>
                  <div className="flex gap-2 mt-3">
                    <Button variant="secondary" onClick={() => {}}>Relocate</Button>
                    <Button variant="secondary" onClick={() => {}}>Edit</Button>
                    <Button onClick={() => {}}>Issue</Button>
                  </div>
                </>
              )}

              {copy.status === 'Issued' && (
                <>
                  <p className="text-sm mt-1">Issued To: {copy.issuedTo}</p>
                  <p className="text-sm">Issue Date: {copy.issueDate}</p>
                  <p className="text-sm">Due Date: {copy.dueDate}</p>
                  <p className="text-sm text-red-600">
                    Days Remaining: {copy.daysRemaining} days
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    {copy.daysRemaining <= 2
                      ? 'Due soon! Consider sending reminder to member.'
                      : 'Currently issued to member. Return processing available from Issue History page.'}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {filteredCopies.length} total copies
        </p>
      </div>
    </div>
  );
};

export default BookCopiesManagement;
