
import React, { useState } from 'react';
import {Navbar} from '../components/common/Navbar';
import {Input} from '../components/common/Input';
import {Select} from '../components/common/Select';
import {Button} from '../components/common/Button';


// AddBook Page
export function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    subject: "",
    isbn: "",
    price: "",
    description: "",
    copies: "",
    rack: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
        <p className="text-gray-600 mb-6">Register a new book title in the library system</p>
        <Input
          label="Book Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter the full title as it appears on the book cover"
          required
        />
        <Input
          label="Author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="For multiple authors, separate with commas"
          required
        />
        <Select
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          options={[
            { value: "programming", label: "Programming" },
            { value: "science", label: "Science" },
            { value: "mathematics", label: "Mathematics" },
          ]}
          placeholder="Select Subject"
          required
        />
        <Input
          label="ISBN"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          placeholder="13-digit ISBN number (including hyphens)"
          required
        />
        <Input
          label="Price (₹)"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Book purchase price in rupees"
          required
        />
        <Input
          label="Description (Optional)"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Optional book summary or description for library records"
        />
        <h3 className="text-lg font-semibold mb-2">Initial Copies</h3>
        <Input
          label="Number of Copies"
          name="copies"
          value={formData.copies}
          onChange={handleChange}
          placeholder="How many physical copies to add (1-20)"
        />
        <Select
          label="Default Rack Location"
          name="rack"
          value={formData.rack}
          onChange={handleChange}
          options={[
            { value: "rack1", label: "Rack 1" },
            { value: "rack2", label: "Rack 2" },
            { value: "rack3", label: "Rack 3" },
          ]}
          placeholder="Select Rack"
        />
        <div className="flex space-x-2 mt-4">
          <Button onClick={handleSubmit}>Add Book to Library</Button>
          <Button variant="secondary" onClick={() => {}}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}