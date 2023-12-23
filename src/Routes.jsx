import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
        </Routes>
    </>
  )
}

export default Routing