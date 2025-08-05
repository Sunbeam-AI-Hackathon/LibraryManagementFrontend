import React from "react";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Button } from "../common/Button";

const BookFilter = ({ onFilter }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow border mt-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        <Input id="searchQuery" label="Search Books" placeholder="Title, author, or ISBN..." />
        <Select id="subject" label="Subject" options={["All Subjects", "Programming", "Science", "Literature", "History", "Mathematics"]} />
        <Select id="availability" label="Availability" options={["All Books", "Available", "Out of Stock"]} />
        <Select id="rack" label="Rack Location" options={["All Racks", "Rack 1", "Rack 2", "Rack 3"]} />
        <div className="flex items-end">
          <Button label="Apply Filters" onClick={onFilter} />
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
