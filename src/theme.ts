import { extendTheme } from '@chakra-ui/react'

const appFontFamily = "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff5f5',
      100: '#ffe5e5',
      500: '#b71c1c'
    }
  },
  breakpoints: {
    base: '0px',
    sm: '480px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
    '2xl': '1920px',
  },
  fonts: {
    heading: appFontFamily,
    body: appFontFamily,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        fontSize: { base: 'sm', md: 'md' },
        lineHeight: 1.7,
      },
    },
  },
  styles: {
    global: {
      html: {
        fontFamily: appFontFamily,
      },
      body: {
        fontFamily: appFontFamily,
        fontSize: { base: '15px', md: '16px' },
        lineHeight: 1.7,
        bg: 'transparent',
        color: 'gray.900'
      }
    }
  }
})

export default theme
