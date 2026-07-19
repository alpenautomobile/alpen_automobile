import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const stickyFooterOnMobile = location.pathname === '/contact' || location.pathname === '/about'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    if (document.documentElement) {
      document.documentElement.scrollTop = 0
    }

    if (document.body) {
      document.body.scrollTop = 0
    }
  }, [location.pathname])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer stickyOnMobile={stickyFooterOnMobile} />
    </div>
  )
}
