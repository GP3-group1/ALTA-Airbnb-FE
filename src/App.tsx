import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Payment from './Pages/Payment'
import Trip from './Pages/Trip'
import Account from './Pages/Account'
import Profile from './Pages/Profile'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/trip' element={<Trip/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
