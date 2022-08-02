import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Dashboard from '../pages/Dasboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default AppRouter