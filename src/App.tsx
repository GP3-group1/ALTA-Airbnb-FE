import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Payment from './Pages/Payment'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
