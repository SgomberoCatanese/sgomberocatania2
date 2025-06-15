import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Truck, Home as HomeIcon, Package, CheckCircle, MapPin, Clock, Shield } from 'lucide-react';

const Home: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/393490073264?text=Ciao%2C%20vorrei%20informazioni%20sul%20servizio%20di%20sgombero', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sgombero <span className="text-blue-200">Gratuito</span>
              <br />a Catania e Provincia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Liberiamo il tuo spazio in cambio di oggetti riutilizzabili. 
              Servizio professionale, veloce e completamente gratuito.
            </p>
            
            {/* Numero telefono prominente */}
            <div className="mb-8">
              <a
                href="tel:3490073264"
                className="inline-flex items-center space-x-3 text-3xl md:text-4xl font-bold bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Phone className="h-8 w-8 md:h-10 w-10" />
                <span>349 007 3264</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Scrivi su WhatsApp</span>
              </button>
              
              <Link
                to="/contatti"
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-colors font-semibold text-lg border border-white/30"
              >
                <span>Richiedi Preventivo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Servizi */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Offriamo soluzioni complete per lo sgombero e il trasporto nella provincia di Catania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sgombero Gratuito</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Svuotiamo case, appartamenti, cantine e garage completamente gratis in cambio di oggetti riutilizzabili.
              </p>
              <Link to="/servizi/sgombero" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Scopri di più →
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Trasporti</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Servizio di trasporto professionale per mobili e oggetti voluminosi in tutta la provincia.
              </p>
              <Link to="/servizi/trasporto" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Scopri di più →
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Traslochi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Traslochi completi con servizio di imballaggio, trasporto e montaggio mobili.
              </p>
              <Link to="/servizi/trasloco" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Scopri di più →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Perché Scegliere Noi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">100% Gratuito</h3>
              <p className="text-gray-600 dark:text-gray-300">Il servizio è completamente gratuito in cambio di merce</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tutta la Provincia</h3>
              <p className="text-gray-600 dark:text-gray-300">Operiamo in tutti i comuni di Catania e provincia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Servizio Rapido</h3>
              <p className="text-gray-600 dark:text-gray-300">Intervento veloce e programmato secondo le tue esigenze</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professionale</h3>
              <p className="text-gray-600 dark:text-gray-300">Team esperto e attrezzature professionali</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto per Liberare il Tuo Spazio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contattaci oggi per un sopralluogo gratuito e senza impegno
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3490073264"
              className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Chiama Subito</span>
            </a>
            
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-colors font-semibold text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;