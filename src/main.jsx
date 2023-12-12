import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react';
import { Box, createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main:'#1A191E',
    },
    secondary:{
      main:'#C4B28F',
    }
    // secondary: purple,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box bgcolor={'#F1F3F4'}>
    <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
)
