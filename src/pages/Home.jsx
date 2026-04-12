import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <title>VLD Translations | Expert Legal & Corporate English-to-French Translation</title>
      <meta name="description" content="Deeply skilled English-to-French translation services specializing in law and corporate communications. Delivered by a certified legal translator and French lawyer-linguist." />
      
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Expert Legal Translation Services</h1>
            <p>
              As a lawyer, you have high standards and strict deadlines. I provide high-quality French translations you can rely on. 
              Avoid the pitfalls of hiring an unqualified translator or relying on AI to do the job. Legal translation is a complex task!
            </p>
            <Link to="/vldtranslations-contactalegalandbusinesstranslator" className="btn btn-primary">Get a Quote</Link>
            <Link to="/vldtranslations-businessandlegaltranslationsintofrench" className="btn btn-secondary">Learn More</Link>
          </div>
          <div className="hero-image">
            <img src="/hero-image.png" alt="Legal Translation Elements" />
          </div>
        </div>
      </section>

      {/* Why Choose Me / Services Highlights */}
      <section id="services">
        <div className="container">
          <div className="section-title">
            <h2>The Non-Negotiables</h2>
            <p>When legal reputation is on the line, there is no room for amateurism. That's where I come in.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Accurate Terminology</h3>
              <p>Precision in translation to convey exact legal meanings across jurisdictions without ambiguity.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>Common Law Mastery</h3>
              <p>A deep understanding of common law systems, bridging the gap between common law and civil law concepts.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Clarity & Precision</h3>
              <p>Ability to write with precision and clarity to communicate the intended meaning unambiguously.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="highlight-item">
              <h3>400+</h3>
              <p>Hours of Master-Level Training</p>
            </div>
            <div className="highlight-item">
              <h3>100%</h3>
              <p>Client Confidentiality</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
