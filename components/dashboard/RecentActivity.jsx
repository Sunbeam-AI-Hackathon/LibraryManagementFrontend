import React from "react";

const activities = [
  { text: "John Doe issued 'Clean Code'", time: "2 hours ago" },
  { text: "Alice Smith returned 'The Pragmatic Programmer'", time: "4 hours ago" },
  { text: "New member 'Robert Johnson' registered", time: "Yesterday" },
  { text: "Payment collected from 'Maria Garcia'", time: "2 days ago" },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
      <ul className="space-y-3 text-sm text-gray-700">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between">
            <span>{activity.text}</span>
            <span className="text-gray-400 text-xs">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
