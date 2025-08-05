import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/common/Navbar';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { SearchBar } from '../components/common/SearchBar';
import { Filter } from '../components/common/Filter';
import AddMember from '../pages/AddMember';
import AddBookCopy from '../pages/AddBookCopy';
import CollectPayment from '../pages/CollectPayment';
import BookCopiesManagement from '../pages/BookCopiesManagement';
import TransactionTable from '../components/transactions/TransactionTable';
import MemberPaymentStatus from '../pages/MemberPaymentStatus';
import OverdueBooks from '../pages/OverdueBooks';
import PaymentReport from '../pages/PaymentReport';

import PendingTasks from '../components/dashboard/PendingTasks';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import MemberInfo from '../components/members/MemberInfo';

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <Button />
      <Input />
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        onChange={(e) => console.log(e.target.value)}
      />
      <SearchBar />
      <Filter
        filters={[
          {
            type: 'search',
            label: 'Book Name',
            value: '',
            onChange: (e) => console.log(e.target.value),
            placeholder: 'Search books...',
          },
        ]}
      />

      <SearchBar /> 
    <Filter 
  filters={[
    { 
      type: "search",
      label: "Book Name",
      value: "",
      onChange: (e) => console.log(e.target.value),
      placeholder: "Search books..."
    }
  ]}
/>
<PaymentReport/>
   </>

  )
}

export default App;