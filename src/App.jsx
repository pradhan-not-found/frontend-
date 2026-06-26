import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TraceLanding from './components/TraceLanding';
import TraceLogin from './components/TraceLogin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TraceLanding />} />
        <Route path="/login" element={<TraceLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
