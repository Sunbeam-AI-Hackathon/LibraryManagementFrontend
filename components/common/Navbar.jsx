import React from 'react';

// Navbar Component
// Used for top bar with title and user info (navigation and alerts removed)
export function Navbar({ title = "Library Management System", user = "Sarah Johnson" }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span>Librarian: {user}</span>
        <button
          onClick={() => {}} // Placeholder for sign-out logic (alert removed)
          className="hover:underline"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}