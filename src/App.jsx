import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Qualifications from './pages/Qualifications';
import Contact from './pages/Contact';
import ObfuscatedEmail from './components/ObfuscatedEmail';
import './index.css';

// ScrollToTop component to ensure pages start at the top when navigating
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header style={{ 
        background: scrollY > 50 ? 'var(--glass-bg)' : 'transparent',
        borderBottom: scrollY > 50 ? '1px solid var(--glass-border)' : 'none',
        boxShadow: scrollY > 50 ? 'var(--shadow-subtle)' : 'none'
      }}>
        <div className="container">
          <Link to="/" className="logo">VLD Translations</Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/vldtranslations-businessandlegaltranslationsintofrench">Services</Link></li>
              <li><Link to="/hire-a-legal-translator">Qualifications</Link></li>
              <li><Link to="/vldtranslations-contactalegalandbusinesstranslator">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {children}
      </main>

      <footer>
        <div className="container">
          <div style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>VLD Translations</div>
          <p>© 2026 Valerie Le Deroff. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Designed with expertise for the legal community.</p>
          <p style={{ opacity: 0.6, fontSize: '0.8rem' }}><ObfuscatedEmail /></p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vldtranslations-businessandlegaltranslationsintofrench" element={<Services />} />
          <Route path="/hire-a-legal-translator" element={<Qualifications />} />
          <Route path="/vldtranslations-contactalegalandbusinesstranslator" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
