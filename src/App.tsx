import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Services from './pages/Services'
import Social from './pages/Social'
import Philosophy from './pages/Philosophy'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <NavBar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/social" element={<Social />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
