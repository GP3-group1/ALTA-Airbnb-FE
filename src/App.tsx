import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Trip from './Pages/Trip'
import Profile from './Pages/Profile'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/reserve' element={<Reserve />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/trip' element={<Trip/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
