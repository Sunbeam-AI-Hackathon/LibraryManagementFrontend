import React from "react";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { Select } from "../components/common/Select";

export default function PaymentReport() {
  const dailyData = [
    { date: "Aug 3, 2025", membership: 2500, fine: 185, total: 2685, txns: 8 },
    { date: "Aug 2, 2025", membership: 3000, fine: 95, total: 3095, txns: 12 },
    { date: "Aug 1, 2025", membership: 2000, fine: 140, total: 2140, txns: 9 },
    { date: "Jul 31, 2025", membership: 1575, fine: 0, total: 1575, txns: 6 },
    { date: "Jul 30, 2025", membership: 3500, fine: 250, total: 3750, txns: 15 },
  ];

  const recentTransactions = [
    { name: "Robert Johnson", id: "LIB001025", type: "Monthly Fee + Fine", receipt: "RCP202508030001", amount: 640, time: "10:45 AM" },
    { name: "Maria Garcia", id: "LIB001087", type: "Fine Payment", receipt: "RCP202508030002", amount: 80, time: "10:20 AM" },
    // Add more as needed
  ];

  const totalMembership = dailyData.reduce((sum, d) => sum + d.membership, 0);
  const totalFine = dailyData.reduce((sum, d) => sum + d.fine, 0);
  const totalCollection = dailyData.reduce((sum, d) => sum + d.total, 0);
  const totalTxns = dailyData.reduce((sum, d) => sum + d.txns, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-1">Payment Reports</h1>
      <p className="text-gray-600 mb-6">Comprehensive revenue and collection analytics for library operations</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <SummaryCard label="Total Revenue (This Month)" value="₹18,450" trend="+15.2% from last month" />
        <SummaryCard label="Membership Fees" value="₹15,500" trend="+8.5% from last month" />
        <SummaryCard label="Fine Collections" value="₹2,950" trend="+45.3% from last month" />
        <SummaryCard label="Fee Paying Members" value="31" trend="+2 from last month" />
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-6 flex flex-wrap gap-4 items-end">
        <Input type="date" label="From Date" defaultValue="2025-08-01" />
        <Input type="date" label="To Date" defaultValue="2025-08-03" />
        <Select label="Payment Type" options={["All Payments", "Membership Fees", "Fines"]} />
        <Select label="Report Type" options={["Daily Summary", "Detailed Report"]} />
        <Button variant="primary">Generate Report</Button>
      </div>

      {/* Daily Collections Table */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 bg-white rounded shadow">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">Daily Collections</h2>
            <div className="space-x-2">
              <Button size="sm" variant="secondary">Export PDF</Button>
              <Button size="sm" variant="secondary">Export Excel</Button>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Membership Fees</th>
                <th className="p-2 text-left">Fine Collections</th>
                <th className="p-2 text-left">Total Collections</th>
                <th className="p-2 text-left">Transactions</th>
              </tr>
            </thead>
            <tbody>
              {dailyData.map((d, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="p-2">{d.date}</td>
                  <td className="p-2 text-green-600 font-medium">₹{d.membership}</td>
                  <td className="p-2 text-red-600">₹{d.fine}</td>
                  <td className="p-2 font-semibold">₹{d.total}</td>
                  <td className="p-2">{d.txns}</td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-50 border-t">
                <td className="p-2">Total (Last 5 Days)</td>
                <td className="p-2 text-green-600">₹{totalMembership}</td>
                <td className="p-2 text-red-600">₹{totalFine}</td>
                <td className="p-2">₹{totalCollection}</td>
                <td className="p-2">{totalTxns}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-semibold mb-3">Quick Statistics</h2>
          <Stat label="Average Daily Collection" value="₹2,649" />
          <Stat label="Peak Collection Day" value="Jul 30 (₹3,750)" />
          <Stat label="Average Transaction Value" value="₹265" />
          <Stat label="Outstanding Dues" value="₹1,240" />
          <Stat label="Collection Efficiency" value="91.4%" />
          <h3 className="font-semibold mt-4 mb-1">Payment Type Breakdown</h3>
          <div className="text-sm mb-1">Membership Fees</div>
          <div className="w-full bg-gray-200 h-3 rounded mb-1">
            <div className="h-3 rounded bg-green-500" style={{ width: "94%" }}></div>
          </div>
          <div className="text-sm mb-1">Fines</div>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div className="h-3 rounded bg-red-500" style={{ width: "6%" }}></div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Recent Transactions</h2>
          <span className="text-sm text-gray-500">Last 10 payments</span>
        </div>
        {recentTransactions.map((txn, i) => (
          <div key={i} className="flex justify-between py-2 border-t">
            <div>
              <div className="font-medium">{txn.name} ({txn.id})</div>
              <div className="text-sm text-gray-500">{txn.type} · Receipt: {txn.receipt}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">₹{txn.amount}</div>
              <div className="text-sm text-gray-500">{txn.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SummaryCard({ label, value, trend }) {
  return (
    <div className="bg-white shadow p-4 rounded text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
      <div className="text-xs text-green-600">{trend}</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex justify-between text-sm py-1">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
