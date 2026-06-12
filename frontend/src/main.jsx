import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { AnimeProvider } from './contexts/AnimeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AnimeProvider>
          <App />
        </AnimeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
