import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Expenses from './components/expenses';
import Invoices from './components/invoices';
import InvoiceComponents from './components/invoicecomponents';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Hello, let's Invoices or Expenses to continue</p>
            </main>
          }
        />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="invoices/:abc" element={<InvoiceComponents />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
