import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TraceLanding from './components/TraceLanding';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TraceLanding />} />
      </Routes>
    </BrowserRouter>
  );
}
