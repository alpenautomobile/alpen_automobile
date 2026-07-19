import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
  const pageContentRef = useRef<HTMLElement | null>(null)
  const stickyFooterOnMobile = location.pathname === '/contact' || location.pathname === '/about'

  const forceScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const scrollingElement = document.scrollingElement as HTMLElement | null
    if (scrollingElement) {
      scrollingElement.scrollTop = 0
      scrollingElement.scrollLeft = 0
    }

    if (document.documentElement) {
      document.documentElement.scrollTop = 0
      document.documentElement.scrollLeft = 0
    }

    if (document.body) {
      document.body.scrollTop = 0
      document.body.scrollLeft = 0
    }

    const pageContent = pageContentRef.current
    if (pageContent) {
      pageContent.scrollTop = 0
      pageContent.scrollLeft = 0
    }
  }

  useLayoutEffect(() => {
    forceScrollTop()
  }, [location.pathname, location.key])

  useEffect(() => {
    forceScrollTop()

    // Multiple passes to override delayed browser restoration on mobile/history nav.
    const frame = window.requestAnimationFrame(() => {
      forceScrollTop()
    })

    const timeoutA = window.setTimeout(() => {
      forceScrollTop()
    }, 0)

    const timeoutB = window.setTimeout(() => {
      forceScrollTop()
    }, 80)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeoutA)
      window.clearTimeout(timeoutB)
    }
  }, [location.pathname, location.key])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const handlePageShow = () => {
      forceScrollTop()
    }

    window.addEventListener('pageshow', handlePageShow)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
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
      <main className="page-content" key={location.pathname} ref={pageContentRef}>
        <Routes key={location.pathname}>
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
