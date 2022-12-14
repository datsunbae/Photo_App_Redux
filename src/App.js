import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter> 
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/photos" />} ></Route>
                <Route  path="photos/*" element={<Photo/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
