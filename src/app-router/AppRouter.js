import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default AppRouter