import React from "react";

const CopyCard = ({ copy }) => (
  <div className="border p-4 rounded shadow-sm">
    <div className="text-sm text-gray-500">Copy ID</div>
    <div className="text-lg font-bold">{copy.id}</div>

    <div className="mt-2 text-sm text-gray-700">
      <p><strong>Rack:</strong> {copy.rack}</p>
      <p><strong>Status:</strong> <span className={copy.status === 'Available' ? 'text-green-600' : 'text-red-500'}>{copy.status}</span></p>
    </div>
  </div>
);

export default CopyCard;
