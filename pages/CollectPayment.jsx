import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import  { Select } from '../components/common/Select';

const CollectPayment = () => {
  const [formData, setFormData] = useState({
    memberSearch: '',
    paymentType: '',
    amount: '',
    method: 'Cash',
    receiptNumber: `RCP${new Date().toISOString().slice(0, 10).replace(/-/g, '')}001`,
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReset = () => {
    setFormData({
      memberSearch: '',
      paymentType: '',
      amount: '',
      method: 'Cash',
      receiptNumber: `RCP${new Date().toISOString().slice(0, 10).replace(/-/g, '')}001`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Submitted:', formData);
    // Submit to backend API
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-1 text-center">Collect Payment</h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          Process membership fee and fine payments from library members
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Member Information</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Search Member *</label>
              <input
                type="text"
                name="memberSearch"
                value={formData.memberSearch}
                onChange={handleChange}
                placeholder="Enter member ID, name, or email..."
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <h3 className="text-lg font-semibold mb-4 border-t pt-4">Payment Details</h3>

            <div className="mb-4">
              <Select
                label="Payment Type *"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                options={['Membership Fee', 'Fine', 'Other']}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Amount (₹) *</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <Select
                label="Payment Method"
                name="method"
                value={formData.method}
                onChange={handleChange}
                options={['Cash', 'Card', 'UPI', 'Bank Transfer']}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Receipt Number</label>
              <input
                type="text"
                value={formData.receiptNumber}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" onClick={handleSubmit} disabled={!formData.paymentType || !formData.amount}>
                Collect Payment
              </Button>
              <Button onClick={handleReset}>Reset Form</Button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Member Details</h3>
            {/* You can dynamically display member info here after search */}
            <p className="text-sm text-gray-500">No member selected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectPayment;
