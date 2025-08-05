import React from "react";

const tasks = [
  { task: "Return reminder for 'Design Patterns'", due: "Today" },
  { task: "Review overdue members", due: "Today" },
  { task: "Organize Rack 3 books", due: "Tomorrow" },
];

const PendingTasks = () => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Pending Tasks</h2>
      <ul className="space-y-3 text-sm text-gray-700">
        {tasks.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.task}</span>
            <span className="text-gray-400 text-xs">{item.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTasks;
