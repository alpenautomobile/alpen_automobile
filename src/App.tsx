import React, { useEffect, useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const pageContent = document.querySelector('.page-content') as HTMLElement | null
    if (pageContent) {
      pageContent.scrollTop = 0
    }
  }, [location.key])

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false)
      return
    }

    const handleLoad = () => setIsLoading(false)
    const fallbackTimer = window.setTimeout(() => setIsLoading(false), 2500)

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div className="app-shell">
      {isLoading && (
        <div className="page-loader" role="status" aria-live="polite">
          <img src="/logo_design_5.png" alt="Alpen loading logo" className="page-loader__logo" />
        </div>
      )}
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
