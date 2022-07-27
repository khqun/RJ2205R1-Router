import './App.css';
import { Link, Outlet, NavLink } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |
        <Link to="/about" >About</Link>
        <nav>
          <NavLink to="/about" style={({ isActive }) => {
            return {
              fontWeight: 'bold',
            color: isActive ? "red" : ""
            };
          }}>About</NavLink>
        </nav>
      </nav>
      <Outlet />
    </div>
  );
}