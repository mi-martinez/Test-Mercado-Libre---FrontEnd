import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe600',
      light: '#fff159',
      dark: '#c7b600',
      contrastText: '#000000',
    },
    secondary: {
      main: '#3483fa',
      light: '#6aa7ff',
      dark: '#0050cb',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff0000',
      light: '#ff5f5f',
      dark: '#c70000',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9900',
      light: '#ffcc4d',
      dark: '#c66900',
      contrastText: '#ffffff',
    },
    info: {
      main: '#00b8ff',
      light: '#62daff',
      dark: '#0081cb',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00ff00',
      light: '#66ff66',
      dark: '#00cc00',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
      hint: '#cccccc',
    },
    background: {
      paper: '#ffffff',
      default: '#f2f2f2',
    },
    action: {
      active: '#333333',
      hover: '#666666',
      hoverOpacity: 0.08,
      selected: '#999999',
      selectedOpacity: 0.16,
      disabled: '#cccccc',
      disabledBackground: '#999999',
      disabledOpacity: 0.24,
      focus: '#cccccc',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  },
  typography: {
    fontFamily: ['proxima-nova', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '3rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.5rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: '2.25rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '2rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.75rem',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.25rem',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1rem',
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 700,
      lineHeight: '1rem',
      textTransform: 'uppercase',
    },
  },
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RedwoodProvider titleTemplate="%PageTitle">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </ThemeProvider>
  </FatalErrorBoundary>
)

export default App
