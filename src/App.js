import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound'
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <ul>
              <li><Link to="/photos">Go to photo page</Link></li>
              <li><Link to="/photos/add">Go to add photo</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Navigate to="/photos" />} ></Route>
                <Route path="photos/*" element={<Photo/>} />
                <Route element={NotFound} />
            </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
