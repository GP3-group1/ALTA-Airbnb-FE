import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Reserve from './Pages/Reserve'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserve' element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
