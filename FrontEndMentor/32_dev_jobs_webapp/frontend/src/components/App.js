import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Job from '../pages/Job';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job" element={<Job />} />
    </Routes>
  );
}

export default App;
