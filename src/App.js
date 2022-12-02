import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskPage from './pages/TaskPage/TaskPage';

import ProjectSelection from './pages/ProjectSelection/ProjectSelection';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board/:project" element={<TaskPage />} />
        <Route path="/" element={<ProjectSelection />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
