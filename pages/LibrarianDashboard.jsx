
import { Navbar } from "../components/common/Navbar";
import OverviewStats from "../components/dashboard/OverviewStats"
import { Card } from "../components/common/Card";
import QuickActions from "../components/dashboard/QuickActions"
import PendingTasks from "../components/dashboard/PendingTasks";

import RecentActivity from "../components/dashboard/RecentActivity";



export function LibrarianDashboard() {
  const handleAction = () => {};

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome Back, Sarah!</h2>
        <p className="text-gray-600 mb-6">Here's your library overview for today, August 3rd, 2025</p>
        <OverviewStats
          stats={[
            { title: "Total Books in Library", value: "247", subtitle: "+12 added this month", icon: "" },
            { title: "Currently Issued", value: "89", subtitle: "15 due this week", icon: "" },
            { title: "Available Copies", value: "158", subtitle: "Ready for issue", icon: "" },
            { title: "Overdue Books", value: "3", subtitle: "Need immediate action", icon: "🚨" },
            { title: "Active Members", value: "45", subtitle: "2 new this week", icon: "" },
            { title: "Today's Collections", value: "₹2,850", subtitle: "Fees + Fines", icon: "" },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <QuickActions
            actions={[
              { label: "Issue Book", onClick: handleAction },
              { label: "Return Book", onClick: handleAction },
              { label: "Collect Payment", onClick: handleAction },
              { label: "Add New Book", onClick: handleAction },
              { label: "Add Member", onClick: handleAction },
              { label: "Overdue Books", onClick: handleAction },
            ]}
          />
          <RecentActivity
            activities={[
              { time: "10:45 AM", description: "Collected ₹500 monthly fee from John Doe (ID: 1234)" },
              { time: "10:30 AM", description: "Issued 'Clean Code' to Member #1087" },
            ]}
          />
        </div>
        <PendingTasks
          tasks={[
            { description: "Collect overdue fines", details: "3 books, ₹85 total", priority: "High" },
            { description: "Follow up on unpaid fees", details: "5 members", priority: "Medium" },
          ]}
        />
      </div>
    </div>
  );
}