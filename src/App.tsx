import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Red Earth Construction Pvt. Ltd — Building Nepal with strength & precision',
      about: 'About Us — Red Earth Construction',
      services: 'Our Services — Red Earth Construction',
      projects: 'Projects — Red Earth Construction',
      contact: 'Contact Us — Red Earth Construction',
    };
    document.title = titles[page] || titles.home;
  }, [page]);

  const render = () => {
    switch (page) {
      case 'home': return <Home onNavigate={setPage} />;
      case 'about': return <About onNavigate={setPage} />;
      case 'services': return <Services onNavigate={setPage} />;
      case 'projects': return <Projects onNavigate={setPage} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={page} onNavigate={setPage} />
      <main key={page} className="animate-pageIn">{render()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
