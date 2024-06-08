import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import PhotoContainer from './pages/photo-container/PhotoContainer';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/photos/:id" element={<PhotoContainer />} />
    </Routes>
  </Router>
);

export default App;
