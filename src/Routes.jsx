import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import PricingPage from './Pages/PricingPage'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/pricing' element={<PricingPage />} />
        </Routes>
    </>
  )
}

export default Routing