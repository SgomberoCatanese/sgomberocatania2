import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Il servizio di sgombero è davvero gratuito?',
      answer: 'Sì, il nostro servizio di sgombero è completamente gratuito quando recuperiamo oggetti riutilizzabili di valore (mobili, elettrodomestici funzionanti, oggetti d\'antiquariato, ecc.). Il valore di questi oggetti copre i costi del servizio.'
    },
    {
      question: 'In quali zone operate?',
      answer: 'Operiamo in tutta la provincia di Catania, inclusi tutti i comuni principali come Acireale, Paternò, Misterbianco, Gravina di Catania, Mascalucia, Belpasso, Giarre, Adrano, Bronte, Lentini e molti altri.'
    },
    {
      question: 'Quanto tempo ci vuole per uno sgombero?',
      answer: 'I tempi dipendono dalle dimensioni dello spazio e dalla quantità di oggetti. Generalmente, uno sgombero di un appartamento standard richiede 4-8 ore, mentre per case più grandi potrebbe essere necessaria un\'intera giornata.'
    },
    {
      question: 'Cosa succede agli oggetti che recuperate?',
      answer: 'Gli oggetti in buone condizioni vengono destinati al mercato dell\'usato, donati a enti benefici o rivenduti. Questo ci permette di offrire il servizio gratuitamente e contribuisce all\'economia circolare.'
    },
    {
      question: 'Devo essere presente durante lo sgombero?',
      answer: 'È preferibile la vostra presenza per indicarci cosa tenere e cosa sgomberare. Tuttavia, possiamo accordarci per lavorare anche in vostra assenza, previa visione preliminare e accordi chiari.'
    },
    {
      question: 'Sgomberate anche cantine e garage?',
      answer: 'Certamente! Sgomberiamo cantine, garage, soffitte, magazzini e qualsiasi altro tipo di locale. Ogni situazione viene valutata caso per caso.'
    },
    {
      question: 'Come posso richiedere un preventivo?',
      answer: 'Potete chiamarci al 349 007 3264 o contattarci via WhatsApp. Offriamo sopralluoghi gratuiti per valutare il lavoro e fornire un preventivo dettagliato.'
    },
    {
      question: 'Siete assicurati?',
      answer: 'Sì, siamo coperti da assicurazione per danni a terzi e responsabilità civile. Lavoriamo sempre in sicurezza e nel rispetto delle normative.'
    },
    {
      question: 'Cosa non ritirate?',
      answer: 'Non ritiriamo materiali pericolosi (amianto, vernici, sostanze chimiche), rifiuti sanitari, pneumatici e materiali da costruzione. Per questi materiali vi indirizzeremo verso i canali di smaltimento appropriati.'
    },
    {
      question: 'Offrite anche servizi di pulizia?',
      answer: 'Dopo lo sgombero, effettuiamo una pulizia di base dei locali. Per pulizie approfondite, possiamo mettervi in contatto con partner specializzati.'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/393490073264?text=Ciao%2C%20ho%20delle%20domande%20sui%20vostri%20servizi', '_blank');
  };

  React.useEffect(() => {
    document.title = 'FAQ - Domande Frequenti | Sgombero Catania';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Risposte alle domande più frequenti sui nostri servizi di sgombero gratuito a Catania. Scopri come funziona il servizio e le zone operative.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Domande Frequenti
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Trova le risposte alle domande più comuni sui nostri servizi di sgombero
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Non Hai Trovato la Risposta?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contattaci direttamente per ricevere assistenza personalizzata
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

export default FAQ;