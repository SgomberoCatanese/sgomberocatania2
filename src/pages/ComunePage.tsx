import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Users, Navigation, CheckCircle, Clock, Truck } from 'lucide-react';
import { comuniCatania } from '../data/comuni';

const ComunePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const comune = comuniCatania.find(c => c.slug === slug);

  if (!comune) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsApp = () => {
    const message = `Ciao, vorrei informazioni sul servizio di sgombero a ${comune.nome}`;
    window.open(`https://wa.me/393490073264?text=${encodeURIComponent(message)}`, '_blank');
  };

  const seoTitle = `Sgombero Gratuito a ${comune.nome} - Servizio Professionale`;
  const seoDescription = `${comune.descrizione}. Servizio gratuito in cambio di merce riutilizzabile. Chiama 349 007 3264 per un preventivo.`;

  // Update page title and meta description
  React.useEffect(() => {
    document.title = seoTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', seoDescription);
      document.head.appendChild(metaDescription);
    }
  }, [seoTitle, seoDescription]);

  const images = [
    'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-200" />
                <span className="text-blue-200 font-medium">Catania, Sicilia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sgombero Gratuito a <span className="text-blue-200">{comune.nome}</span>
              </h1>
              
              <p className="text-xl mb-6 text-blue-100">
                {comune.descrizione}. Servizio professionale e completamente gratuito in cambio di oggetti riutilizzabili.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">{comune.popolazione} abitanti</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">{comune.distanza}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3490073264"
                  className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  <span>349 007 3264</span>
                </a>
                
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors font-semibold"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={images[0]}
                alt={`Servizio di sgombero a ${comune.nome}`}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Servizi Specifici */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Servizi di Sgombero a {comune.nome}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Offriamo soluzioni complete per ogni esigenza di sgombero nella zona
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sgombero Appartamenti
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Svuotamento completo di appartamenti, case e abitazioni a {comune.nome}. 
                Recuperiamo tutto ciò che può essere riutilizzato.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sgombero Cantine e Garage
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pulizia e svuotamento di cantine, garage, magazzini e depositi. 
                Servizio rapido e professionale.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Interventi Rapidi
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Interventi programmati secondo le tue esigenze. 
                Raggiungiamo {comune.nome} in tempi rapidi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi Locali */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Perché Sceglierci a {comune.nome}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Conoscenza del Territorio</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Conosciamo perfettamente {comune.nome} e sappiamo come muoverci efficacemente nella zona.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tempi di Intervento Ridotti</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Grazie alla nostra presenza capillare, raggiungiamo rapidamente ogni zona di {comune.nome}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rispetto dell'Ambiente</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tutto ciò che recuperiamo viene destinato al riuso, contribuendo alla sostenibilità ambientale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={images[1]}
                alt={`Team di sgombero a ${comune.nome}`}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cosa Dicono i Nostri Clienti a {comune.nome}
            </h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">
              "Servizio eccellente! Hanno svuotato completamente il nostro appartamento a {comune.nome} 
              in una giornata, recuperando mobili e oggetti che pensavamo di dover buttare. 
              Professionali e puntuali, lo consiglio vivamente!"
            </p>
            <div className="font-semibold text-gray-900 dark:text-white">
              Marco R. - Cliente di {comune.nome}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai Bisogno di Sgombero a {comune.nome}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contattaci ora per un sopralluogo gratuito e senza impegno
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3490073264"
              className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Chiama 349 007 3264</span>
            </a>
            
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-colors font-semibold text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Scrivi su WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComunePage;