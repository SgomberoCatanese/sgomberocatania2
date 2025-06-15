import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contatti: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/393490073264?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsAppMessage = `Ciao, sono ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone}
Servizio richiesto: ${formData.service}
Messaggio: ${formData.message}`;
    
    window.open(`https://wa.me/393490073264?text=${encodeURIComponent(whatsAppMessage)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  React.useEffect(() => {
    document.title = 'Contatti - Sgombero Catania | Chiamaci 349 007 3264';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contatta Sgombero Catania per servizi gratuiti. Telefono 349 007 3264, WhatsApp disponibile. Preventivi gratuiti per sgombero, trasporti e traslochi.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contattaci
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Siamo qui per aiutarti con tutti i tuoi servizi di sgombero, trasporti e traslochi
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informazioni di Contatto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Informazioni di Contatto
                </h2>
                
                <div className="space-y-6">
                  {/* Telefono */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Telefono
                      </h3>
                      <a
                        href="tel:3490073264"
                        className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        349 007 3264
                      </a>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Chiamate e SMS sempre attivi
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        WhatsApp
                      </h3>
                      <button
                        onClick={handleWhatsApp}
                        className="text-xl font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                      >
                        Chatta con noi
                      </button>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Risposta rapida e preventivi istantanei
                      </p>
                    </div>
                  </div>

                  {/* Area Operativa */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Area Operativa
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Catania e tutta la provincia
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Interventi in tutti i comuni
                      </p>
                    </div>
                  </div>

                  {/* Orari */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Orari di Contatto
                      </h3>
                      <div className="space-y-1 text-gray-700 dark:text-gray-300">
                        <p><span className="font-medium">Lun - Sab:</span> 8:00 - 19:00</p>
                        <p><span className="font-medium">Domenica:</span> 9:00 - 17:00</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        WhatsApp attivo 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Rapide */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contattaci Subito
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:3490073264"
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Chiama Ora</span>
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
            </div>

            {/* Form di Contatto */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Richiedi un Preventivo
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Il tuo nome"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Il tuo numero"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="email@esempio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Servizio Richiesto
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="sgombero">Sgombero Gratuito</option>
                    <option value="trasporto">Trasporto</option>
                    <option value="trasloco">Trasloco Completo</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Descrivi il servizio di cui hai bisogno..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                >
                  <Send className="h-5 w-5" />
                  <span>Invia Richiesta via WhatsApp</span>
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Cliccando "Invia Richiesta" si aprirà WhatsApp con il messaggio precompilato
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 dark:bg-red-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Emergenze e Interventi Urgenti
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Per situazioni urgenti che richiedono intervento immediato
          </p>
          
          <a
            href="tel:3490073264"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors font-semibold text-lg"
          >
            <Phone className="h-6 w-6" />
            <span>Chiamata di Emergenza</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contatti;