import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { LibrarianDashboard } from "../pages/LibrarianDashboard";
import { BooksCatalog } from '../pages/BooksCatalog';
import { AddBook } from '../pages/AddBook';
import { EditBook } from '../pages/EditBook';
import { AddBookCopy } from '../pages/AddBookCopy';
import { IssueBook } from '../pages/IssueBook';
import { IssueHistory } from '../pages/IssueHistory';
import AddMember from '../pages/AddMember';
import CollectPayment from '../pages/CollectPayment';
import BookCopiesManagement from '../pages/BookCopiesManagement';
// import MembersManagement from '../pages/MembersManagement';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <Routes>
          <Route path="/" element={<LibrarianDashboard />} />
          <Route path="/books" element={<BooksCatalog />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="/add-book-copy" element={<AddBookCopy />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/issue-history" element={<IssueHistory />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/collect-payment" element={<CollectPayment />} />
          <Route path="/book-copies-management" element={<BookCopiesManagement />} />
          {/* <Route path="/members" element={<MembersManagement />} /> */}
        </Routes>
      </main>
    </div>
  );
}
