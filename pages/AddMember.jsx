import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import  { Input } from '../components/common/Input';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate axios post here
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-4 self-start">
        <button className="text-sm text-blue-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-200">
          ← Dashboard
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-1 text-center">Add New Member</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Create new member account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />

          <p className="text-xs text-gray-500 mt-2">
            The default password will be same as email id. Member can change it from their profile settings.
          </p>

          <Button type="submit" variant="dark">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
