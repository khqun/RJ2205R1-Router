import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
