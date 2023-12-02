import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import "react-image-gallery/styles/css/image-gallery.css";
import './site.css'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Control from './utils/Control';
import LoginControl from './utils/LoginControl';

// import pages
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import ProductDetail from './pages/ProductDetail';
import ProductSearch from './pages/ProductSearch';

const route =
<BrowserRouter>
  <ToastContainer />
  <Routes>
    <Route path='/' element={<LoginControl page={<Login />} />} />
    <Route path='/home' element={ <Control page={<Home />} /> } />
    <Route path='/users' element={ <Control page={<Users />} /> } />
    <Route path='/productDetail/:id' element={ <Control page={<ProductDetail />} /> } />
    <Route path='/productSearch' element={ <Control page={<ProductSearch />} /> } />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(route);