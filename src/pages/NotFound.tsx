import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pagina Non Trovata
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
          >
            <Home className="h-5 w-5" />
            <span>Torna alla Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Torna Indietro</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;