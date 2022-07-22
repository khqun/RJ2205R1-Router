import React from 'react';
import ReactDOM from 'react-dom/client';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
function Invoices() {
  let [id, setId] = useState(1000);

  return (
    <main style={{ padding: "1rem 0" }}>
      <input onChange={(e) => {
        setId(e.target.value)
      }}></input>
      <h2>Invoices</h2>
      <Link to={`/invoices/${id}`} key={id}>
        ID {id}
      </Link>
    </main>
  );
}
function Invoice() {
  let params = useParams();
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Invoice Detail</h2>
      <p>Invoice: {params.id}</p>
    </div>
  );
}
function About() {
  return (
    <>
      <main>
        <h1>This is about </h1>
      </main>
      <nav>
        <Link to="/">Go to home page</Link>
      </nav>
    </>
  )
}

function Expenses() {
  return (
    <>
      <main>
        <h2>Expenses</h2>

      </main>
      {/* <nav>
        <Link to="/invoices">Invoices</Link>
      </nav> */}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Hello, this is home page</p>
            </main>
          } />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="about" element={<About />} />
        <Route path="invoices/:id" element={<Invoice />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
