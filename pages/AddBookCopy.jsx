import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import {Select} from '../components/common/Select';

const AddBookCopy = () => {
  const [formData, setFormData] = useState({
    rackLocation: 'Rack 1',
    condition: 'Good',
    notes: '',
    copyType: 'single',
  });

  const book = {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    price: 2499,
    stats: {
      current: 5,
      available: 3,
      issued: 2,
    },
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({
      ...prev,
      copyType: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can integrate with backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-1 text-center">Add New Copy</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Add physical copies to existing book inventory
        </p>

        {/* Book Details Card */}
        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="italic text-sm text-gray-500 mb-4">by {book.author}</p>
          <div className="grid grid-cols-3 gap-2 mb-2 text-center text-sm">
            <div>
              <p className="text-xl font-bold">{book.stats.current}</p>
              <p className="text-gray-500">Current Copies</p>
            </div>
            <div>
              <p className="text-xl font-bold">{book.stats.available}</p>
              <p className="text-gray-500">Available</p>
            </div>
            <div>
              <p className="text-xl font-bold">{book.stats.issued}</p>
              <p className="text-gray-500">Issued</p>
            </div>
          </div>
          <p className="mt-2 text-lg font-semibold">₹{book.price}</p>
          <p className="text-xs text-gray-500 uppercase">Book Price</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Copy Information */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Copy Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Select
                label="Rack Location *"
                name="rackLocation"
                value={formData.rackLocation}
                onChange={handleChange}
                options={['Rack 1', 'Rack 2', 'Rack 3']}
              />
              <Select
                label="Condition *"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                options={['Good', 'Fair', 'Damaged']}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Physical location and condition of the book copy
            </p>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special notes about this copy..."
                className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                Optional notes about the copy’s condition, acquisition, etc.
              </p>
            </div>
          </div>

          {/* Quantity Options */}
          <div>
            <h4 className="font-semibold mb-2 border-b pb-1">Quantity Options</h4>
            <div className="bg-gray-50 border rounded-lg p-4 mt-4">
              <p className="text-sm font-medium mb-3">How many copies would you like to add?</p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="copyType"
                    value="single"
                    checked={formData.copyType === 'single'}
                    onChange={handleRadioChange}
                    className="accent-red-600"
                  />
                  <span>Single copy</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="copyType"
                    value="multiple"
                    checked={formData.copyType === 'multiple'}
                    onChange={handleRadioChange}
                    className="accent-red-600"
                  />
                  <span>Multiple copies</span>
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end pt-2">
            <Button type="submit">Add Copy to Inventory</Button>
            <Button type="button" onClick={() => window.history.back()}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookCopy;
