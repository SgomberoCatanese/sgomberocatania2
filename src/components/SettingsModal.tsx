import React, { useState } from 'react';
import { X, Sun, Moon, Palette, Sparkles, RotateCcw } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { theme, updateTheme, resetCache } = useTheme();
  const [customColors, setCustomColors] = useState({
    backgroundColor: theme.backgroundColor,
    textColor: theme.textColor,
    buttonColor: theme.buttonColor,
  });

  if (!isOpen) return null;

  const handleThemeChange = (mode: 'light' | 'dark' | 'custom') => {
    if (mode === 'light') {
      updateTheme({
        mode,
        backgroundColor: '#ffffff',
        textColor: '#000000',
        buttonColor: '#007AFF',
      });
    } else if (mode === 'dark') {
      updateTheme({
        mode,
        backgroundColor: '#1a1a1a',
        textColor: '#ffffff',
        buttonColor: '#007AFF',
      });
    } else {
      updateTheme({ mode });
    }
  };

  const handleCustomColorChange = (key: keyof typeof customColors, value: string) => {
    setCustomColors(prev => ({ ...prev, [key]: value }));
    updateTheme({ [key]: value, mode: 'custom' });
  };

  const glassStyle = theme.glassEffect
    ? 'backdrop-blur-lg bg-white/90 dark:bg-gray-800/90'
    : 'bg-white dark:bg-gray-800';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className={`relative w-full max-w-lg rounded-2xl shadow-xl ${glassStyle} border border-gray-200 dark:border-gray-700`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Impostazioni
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Tema */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tema
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme.mode === 'light'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <Sun className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Chiaro</div>
                </button>

                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme.mode === 'dark'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <Moon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Scuro</div>
                </button>

                <button
                  onClick={() => handleThemeChange('custom')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    theme.mode === 'custom'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <Palette className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Personalizzato</div>
                </button>
              </div>
            </div>

            {/* Colori personalizzati */}
            {theme.mode === 'custom' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Personalizza Colori
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Colore Sfondo
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={customColors.backgroundColor}
                        onChange={(e) => handleCustomColorChange('backgroundColor', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600"
                      />
                      <input
                        type="text"
                        value={customColors.backgroundColor}
                        onChange={(e) => handleCustomColorChange('backgroundColor', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Colore Testo
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={customColors.textColor}
                        onChange={(e) => handleCustomColorChange('textColor', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600"
                      />
                      <input
                        type="text"
                        value={customColors.textColor}
                        onChange={(e) => handleCustomColorChange('textColor', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Colore Pulsanti
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={customColors.buttonColor}
                        onChange={(e) => handleCustomColorChange('buttonColor', e.target.value)}
                        className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600"
                      />
                      <input
                        type="text"
                        value={customColors.buttonColor}
                        onChange={(e) => handleCustomColorChange('buttonColor', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Effetto Vetro */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Effetti Visivi
              </h3>
              
              <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-blue-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Effetto Vetro</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Rende trasparenti dialog e menu</div>
                  </div>
                </div>
                
                <button
                  onClick={() => updateTheme({ glassEffect: !theme.glassEffect })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    theme.glassEffect ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      theme.glassEffect ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Reset Cache */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Cache e Dati
              </h3>
              
              <button
                onClick={resetCache}
                className="w-full flex items-center justify-center space-x-2 p-3 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Resetta Cache e Ricarica</span>
              </button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Elimina tutti i dati salvati e ricarica il sito per avere sempre la versione più aggiornata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;