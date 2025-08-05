import React from "react";

const MemberInfo = ({ member }) => {
  if (!member) return null;

  return (
    <div className="bg-white p-6 rounded shadow border">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Member Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <strong>Member ID:</strong> {member.memberId}
        </div>
        <div>
          <strong>Name:</strong> {member.name}
        </div>
        <div>
          <strong>Email:</strong> {member.email}
        </div>
        <div>
          <strong>Phone:</strong> {member.phone}
        </div>
        <div>
          <strong>Join Date:</strong> {member.joinDate}
        </div>
        <div>
          <strong>Payment Status:</strong>{" "}
          <span className={
            member.paymentStatus === "Overdue"
              ? "text-red-600"
              : member.paymentStatus === "Due Soon"
              ? "text-yellow-600"
              : "text-green-600"
          }>
            {member.paymentStatus}
          </span>
        </div>
        <div>
          <strong>Books Issued:</strong> {member.booksIssued}
        </div>
        <div>
          <strong>Status:</strong>{" "}
          <span className={
            member.status === "Overdue"
              ? "text-red-600"
              : member.status === "New"
              ? "text-blue-600"
              : "text-green-600"
          }>
            {member.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
