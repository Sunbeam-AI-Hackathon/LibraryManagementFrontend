import React from "react";
import { Button } from "../common/Button";

const BookCard = ({ book }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600 italic">by {book.author}</p>
        <span className="inline-block mt-1 px-2 py-1 text-xs border rounded text-gray-700 border-gray-300">
          {book.subject}
        </span>
      </div>

      <div className="grid grid-cols-2 text-sm text-gray-700 gap-2 mb-4">
        <div>
          <div className="text-xs text-gray-500">ISBN</div>
          <div>{book.isbn}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Price</div>
          <div>₹{book.price}</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-md p-3 mb-3 text-center text-sm">
        <div className="flex justify-around">
          <div>
            <div className="text-lg font-bold text-gray-800">{book.total}</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">{book.available}</div>
            <div className="text-xs">Available</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-500">{book.issued}</div>
            <div className="text-xs">Issued</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button label="View" size="sm" variant="secondary" onClick={() => alert(`View Book ${book.id}`)} />
        <Button label="Edit" size="sm" variant="secondary" onClick={() => alert(`Edit Book ${book.id}`)} />
        <Button label="Copies" size="sm" variant="secondary" onClick={() => alert(`Manage Copies for ${book.id}`)} />
      </div>
    </div>
  );
};

export default BookCard
