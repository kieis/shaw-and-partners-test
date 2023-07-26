import ReactDOM from 'react-dom/client'
import './main.css'
import theme from '@/theme';
import App from '@/pages/App';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <ToastContainer />
    <App />
  </ThemeProvider>
)
