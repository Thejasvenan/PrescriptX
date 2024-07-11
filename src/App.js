// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import PrescriptionForm from './components/PrescriptionForm';
import PrescriptionList from './components/PrescriptionList';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prescriptions/new" element={<PrescriptionForm />} />
        <Route path="/prescriptions" element={<PrescriptionList />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
);

export default App;
