import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Dispo from './pages/Dispo';
import Term from './pages/Term';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';

import Header from './composants/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dispo" element={<Dispo />} />
        <Route path="/term" element={<Term />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;