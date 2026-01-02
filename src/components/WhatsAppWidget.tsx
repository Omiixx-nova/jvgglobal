import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '971123456789';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I'd like to know more about JVG Global's solutions.`, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 w-64 animate-slideIn">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Chat with us!</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">We typically reply within minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Start Chat</span>
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};
