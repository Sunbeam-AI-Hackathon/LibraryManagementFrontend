import React from "react";
import { Button } from "../common/Button";

const BookTable = ({ books }) => {
  return (
    <div className="overflow-x-auto mt-6 rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Author</th>
            <th className="px-4 py-3 text-left">ISBN</th>
            <th className="px-4 py-3 text-left">Subject</th>
            <th className="px-4 py-3 text-left">Available</th>
            <th className="px-4 py-3 text-left">Issued</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {books.map((book) => (
            <tr key={book.id}>
              <td className="px-4 py-2 font-medium">{book.title}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.isbn}</td>
              <td className="px-4 py-2">{book.subject}</td>
              <td className="px-4 py-2 text-green-600">{book.available}</td>
              <td className="px-4 py-2 text-red-500">{book.issued}</td>
              <td className="px-4 py-2 flex gap-2">
                <Button label="View" size="sm" variant="secondary" onClick={() => alert(`View Book ${book.id}`)} />
                <Button label="Edit" size="sm" variant="secondary" onClick={() => alert(`Edit Book ${book.id}`)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
