import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './site.css'

// import pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginRegister from './pages/LoginRegister';

const route = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={ <LoginRegister/> } />
    <Route path='/home' element={ <Home/> } />
    <Route path='/dashboard' element={ <Dashboard/> } />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(route);