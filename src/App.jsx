
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import AddNewBook from './../pages/AddNewBook';
// import AddBookCopy from './../pages/AddBookCopy';
import { Navbar } from '../components/common/Navbar';
import { Button } from './../components/common/Button';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { SearchBar } from '../components/common/SearchBar';
import { Filter } from '../components/common/Filter';


function App() {
 
  return (
   <>
     <Navbar/> 
     <Card/> 
     <Button /> 
     <Input /> 
     <Select options={[
              { value: "1", label: "Option 1" },
             { value: "2", label: "Option 2" }
                  ]}
                onChange={(e) => console.log(e.target.value)}/> 
      

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


   </>

  )
}

export default App
