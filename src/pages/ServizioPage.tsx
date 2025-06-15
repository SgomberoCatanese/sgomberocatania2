import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Award } from 'lucide-react';
import { servizi } from '../data/comuni';

const ServizioPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const servizio = servizi.find(s => s.slug === slug);

  if (!servizio) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsApp = () => {
    const message = `Ciao, vorrei informazioni sul servizio di ${servizio.nome.toLowerCase()}`;
    window.open(`https://wa.me/393490073264?text=${encodeURIComponent(message)}`, '_blank');
  };

  const seoTitle = `${servizio.nome} Professionale a Catania - Servizio Completo`;
  const seoDescription = `${servizio.descrizione}. Servizio professionale a Catania e provincia. Chiama 349 007 3264 per un preventivo gratuito.`;

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

  const getServiceContent = () => {
    switch (servizio.slug) {
      case 'sgombero':
        return {
          hero: {
            title: 'Sgombero Gratuito',
            subtitle: 'In Cambio di Merce Riutilizzabile',
            description: 'Liberiamo il tuo spazio senza costi: appartamenti, case, cantine e garage. Recuperiamo tutto ciò che può avere una seconda vita.',
            image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },
          features: [
            {
              icon: CheckCircle,
              title: 'Completamente Gratuito',
              description: 'Il servizio non ha costi per te, recuperiamo valore dalla merce riutilizzabile'
            },
            {
              icon: Clock,
              title: 'Servizio Rapido',
              description: 'Interventi veloci, spesso completati in una sola giornata'
            },
            {
              icon: Shield,
              title: 'Assicurati e Protetti',
              description: 'Lavoriamo con tutte le assicurazioni e protezioni necessarie'
            }
          ],
          details: {
            title: 'Come Funziona il Nostro Sgombero',
            content: [
              'Sopralluogo gratuito per valutare gli oggetti recuperabili',
              'Pianificazione dell\'intervento secondo le tue esigenze',
              'Sgombero completo con recupero di mobili, elettrodomestici e oggetti',
              'Pulizia finale degli spazi liberati',
              'Smaltimento ecologico dei materiali non recuperabili'
            ]
          }
        };

      case 'trasporto':
        return {
          hero: {
            title: 'Servizio Trasporti',
            subtitle: 'Professionali e Sicuri',
            description: 'Trasportiamo mobili, elettrodomestici e oggetti voluminosi in tutta la provincia di Catania con mezzi adeguati e personale specializzato.',
            image: 'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },
          features: [
            {
              icon: CheckCircle,
              title: 'Mezzi Professionali',
              description: 'Furgoni e camion attrezzati per ogni tipo di trasporto'
            },
            {
              icon: Shield,
              title: 'Trasporti Sicuri',
              description: 'Imballaggio professionale e assicurazione merci'
            },
            {
              icon: Award,
              title: 'Personale Esperto',
              description: 'Team specializzato nel trasporto di oggetti delicati'
            }
          ],
          details: {
            title: 'Tipologie di Trasporto',
            content: [
              'Trasporto mobili e arredamento',
              'Trasporto elettrodomestici di ogni dimensione',
              'Trasporto pianoforti e oggetti pesanti',
              'Trasporto opere d\'arte e oggetti fragili',
              'Servizio di montaggio e smontaggio mobili'
            ]
          }
        };

      case 'trasloco':
        return {
          hero: {
            title: 'Traslochi Completi',
            subtitle: 'Dalla A alla Z',
            description: 'Gestiamo ogni aspetto del tuo trasloco: dall\'imballaggio al trasporto, dal montaggio alla sistemazione nella nuova casa.',
            image: 'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1200'
          },
          features: [
            {
              icon: CheckCircle,
              title: 'Servizio Completo',
              description: 'Ci occupiamo di tutto: imballaggio, trasporto e montaggio'
            },
            {
              icon: Clock,
              title: 'Pianificazione Precisa',
              description: 'Organizziamo il trasloco nei minimi dettagli'
            },
            {
              icon: Shield,
              title: 'Protezione Totale',
              description: 'Assicurazione completa su tutti i beni trasportati'
            }
          ],
          details: {
            title: 'Servizi Inclusi nel Trasloco',
            content: [
              'Sopralluogo e preventivo gratuito dettagliato',
              'Fornitura di scatole e materiali per l\'imballaggio',
              'Smontaggio mobili e protezione oggetti fragili',
              'Trasporto con mezzi professionali assicurati',
              'Rimontaggio mobili e sistemazione nella nuova casa'
            ]
          }
        };

      default:
        return null;
    }
  };

  const content = getServiceContent();
  if (!content) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {content.hero.title}
                <br />
                <span className="text-blue-200">{content.hero.subtitle}</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100">
                {content.hero.description}
              </p>

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
                src={content.hero.image}
                alt={`Servizio di ${servizio.nome.toLowerCase()} a Catania`}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Vantaggi del Nostro Servizio
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {content.details.title}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
            <div className="space-y-4">
              {content.details.content.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zone Operative */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Zone Operative
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Operiamo in tutta la provincia di Catania
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Catania', 'Acireale', 'Paternò', 'Misterbianco', 'Gravina', 'Mascalucia', 'Belpasso', 'Giarre', 'Adrano', 'Bronte', 'Lentini', 'Caltagirone'].map((zona) => (
              <div key={zona} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{zona}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Richiedi il Tuo Preventivo Gratuito
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contattaci per ricevere un preventivo personalizzato senza impegno
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

export default ServizioPage;