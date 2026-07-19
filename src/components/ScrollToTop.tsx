import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    const resetScroll = () => {
      // Main browser scroll container
      const scrollingElement = document.scrollingElement

      if (scrollingElement) {
        scrollingElement.scrollTop = 0
        scrollingElement.scrollLeft = 0
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })

      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Reset known application containers
      const selectors = [
        '#root',
        '.app-shell',
        '.page-content',
        'main',
      ]

      selectors.forEach((selector) => {
        document
          .querySelectorAll<HTMLElement>(selector)
          .forEach((element) => {
            element.scrollTop = 0
            element.scrollLeft = 0
          })
      })
    }

    resetScroll()

    const frame1 = window.requestAnimationFrame(() => {
      resetScroll()

      window.requestAnimationFrame(() => {
        resetScroll()
      })
    })

    const timer1 = window.setTimeout(resetScroll, 100)
    const timer2 = window.setTimeout(resetScroll, 300)
    const timer3 = window.setTimeout(resetScroll, 500)

    return () => {
      window.cancelAnimationFrame(frame1)
      window.clearTimeout(timer1)
      window.clearTimeout(timer2)
      window.clearTimeout(timer3)
    }
  }, [location.pathname, location.key])

  return null
}