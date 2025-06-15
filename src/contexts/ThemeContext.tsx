import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Theme {
  mode: 'light' | 'dark' | 'custom';
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  glassEffect: boolean;
}

interface ThemeContextType {
  theme: Theme;
  updateTheme: (updates: Partial<Theme>) => void;
  resetCache: () => void;
}

const defaultTheme: Theme = {
  mode: 'light',
  backgroundColor: '#ffffff',
  textColor: '#000000',
  buttonColor: '#007AFF',
  glassEffect: false,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('sgombero-theme');
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('sgombero-theme', JSON.stringify(theme));
    
    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty('--bg-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--button-color', theme.buttonColor);
    
    // Apply dark/light class
    if (theme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const updateTheme = (updates: Partial<Theme>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  const resetCache = () => {
    // Clear all caches
    localStorage.clear();
    sessionStorage.clear();
    
    // Reset theme to default
    setTheme(defaultTheme);
    
    // Force reload without cache
    window.location.reload();
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetCache }}>
      {children}
    </ThemeContext.Provider>
  );
};