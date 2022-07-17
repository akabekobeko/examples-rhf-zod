import { createTheme } from '@mui/material'

/**
 * Unified look and feel of the application.
 */
export const theme = createTheme({
  palette: {
    background: {
      default: '#EFEFEF',
    },
    text: {
      primary: '#34495E',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.3rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
  },
})
