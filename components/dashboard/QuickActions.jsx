import React from "react";
import { Link } from "react-router-dom";

const actions = [
  { label: "Add New Book", path: "/add-book" },
  { label: "Add Member", path: "/add-member" },
  { label: "Issue Book", path: "/issue-book" },
  { label: "Collect Payment", path: "/collect-payment" },
];

const QuickActions = () => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="block bg-gray-800 text-white text-center py-3 px-2 rounded hover:bg-gray-700 transition text-sm font-medium"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
