import './App.css';
import * as React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>Welcome to React Route</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <NavLink to="/about" style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : ""
          };
        }}>About</NavLink>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          React Router is a lightweight, fully-featured routing library for the React JavaScript library
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;
