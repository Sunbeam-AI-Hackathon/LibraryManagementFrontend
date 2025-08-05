import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/common/Navbar';
import { Button } from './../components/common/Button';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { SearchBar } from '../components/common/SearchBar';
import { Filter } from '../components/common/Filter';

import PendingTasks from '../components/dashboard/PendingTasks';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import MemberInfo from '../components/members/MemberInfo';

function App() {
  return (
    <>
      {/* Common UI Components */}
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

      {/* Dashboard Components */}
      <PendingTasks />
      <QuickActions />
      <RecentActivity />
      <MemberInfo />
    </>
  );
}

export default App;
