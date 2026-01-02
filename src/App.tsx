import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Solutions } from './pages/Solutions';
import { Software } from './pages/Software';
import { Industries } from './pages/Industries';
import { Consumables } from './pages/Consumables';
import { Accessories } from './pages/Accessories';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const pageTitle = currentPage === 'home'
      ? 'JVG Global - IT Consultancy & Solutions Provider UAE'
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - JVG Global`;
    document.title = pageTitle;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onNavigate={setCurrentPage} />;
      case 'solutions':
        return <Solutions />;
      case 'software':
        return <Software />;
      case 'industries':
        return <Industries />;
      case 'consumables':
        return <Consumables />;
      case 'accessories':
        return <Accessories />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-20">{renderPage()}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
