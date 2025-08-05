import React from "react";
import {Card} from "../common/Card";

const stats = [
  { label: "Total Books", value: 247 },
  { label: "Total Members", value: 45 },
  { label: "Books Issued", value: 89 },
  { label: "Overdue Returns", value: 6 },
];

const OverviewStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <Card key={index} className="text-center py-6">
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="text-sm uppercase tracking-wide text-gray-500">{item.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default OverviewStats;
