import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import theme from '@/theme';
import App from '@/pages/App';

import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
