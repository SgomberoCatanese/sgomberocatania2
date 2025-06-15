import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComunePage from './pages/ComunePage';
import ServizioPage from './pages/ServizioPage';
import FAQ from './pages/FAQ';
import Contatti from './pages/Contatti';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comuni/:slug" element={<ComunePage />} />
              <Route path="/servizi/:slug" element={<ServizioPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;