import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Employees from './components/employees';
import Employeedetail from './components/employeedetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/employeedetail" element={<Employeedetail/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
