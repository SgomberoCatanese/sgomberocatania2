import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronDown, User, Settings, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { comuniCatania, servizi } from '../data/comuni';
import AuthModal from './AuthModal';
import SettingsModal from './SettingsModal';

const Navbar: React.FC = () => {
  const [showServizi, setShowServizi] = useState(false);
  const [showComuni, setShowComuni] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const { theme } = useTheme();
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const glassStyle = theme.glassEffect
    ? 'backdrop-blur-lg bg-white/80 dark:bg-gray-900/80'
    : 'bg-white dark:bg-gray-900';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 border-b border-gray-200 dark:border-gray-700 ${glassStyle}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Sgombero Catania
              </span>
            </Link>

            {/* Menu principale */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                Home
              </Link>

              {/* Servizi Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowServizi(true)}
                onMouseLeave={() => setShowServizi(false)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                  <span>Servizi</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {showServizi && (
                  <div className={`absolute top-full left-0 mt-1 w-56 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${
                    theme.glassEffect 
                      ? 'backdrop-blur-lg bg-white/90 dark:bg-gray-800/90' 
                      : 'bg-white dark:bg-gray-800'
                  }`}>
                    {servizi.map((servizio) => (
                      <Link
                        key={servizio.slug}
                        to={`/servizi/${servizio.slug}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-blue-900/50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        <div className="font-medium">{servizio.nome}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {servizio.descrizione.substring(0, 50)}...
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Dove Operiamo Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowComuni(true)}
                onMouseLeave={() => setShowComuni(false)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                  <span>Dove Operiamo</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {showComuni && (
                  <div className={`absolute top-full left-0 mt-1 w-72 max-h-96 overflow-y-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${
                    theme.glassEffect 
                      ? 'backdrop-blur-lg bg-white/90 dark:bg-gray-800/90' 
                      : 'bg-white dark:bg-gray-800'
                  }`}>
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {comuniCatania.map((comune) => (
                        <Link
                          key={comune.slug}
                          to={`/comuni/${comune.slug}`}
                          className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          {comune.nome}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/faq"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive('/faq') 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                FAQ
              </Link>

              <Link
                to="/contatti"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive('/contatti') 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                Contatti
              </Link>
            </div>

            {/* Azioni utente */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:3490073264"
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>349 007 3264</span>
              </a>

              <button
                onClick={() => setShowAuthModal(true)}
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                title={user ? `Ciao, ${user.name}` : 'Accedi'}
              >
                <User className="h-6 w-6" />
              </button>

              <button
                onClick={() => setShowSettingsModal(true)}
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                title="Impostazioni"
              >
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      
      <SettingsModal 
        isOpen={showSettingsModal} 
        onClose={() => setShowSettingsModal(false)} 
      />
    </>
  );
};

export default Navbar;