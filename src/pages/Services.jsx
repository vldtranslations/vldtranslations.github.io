import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <title>English to French Translation Services | VLD Translations</title>
      <meta name="description" content="Premium English-to-French translation services for law and corporate communications. Three-step process ensuring quality, accuracy, and strict terminology." />
      
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="section-title">
          <h2>My Services</h2>
          <p>Expert translations are my specialty. I offer premium English to French translation services for law and corporate communications.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.9 }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Certified English to French language services</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Every document that passes through my hands undergoes a three-step process of translating, editing, and proofreading. My translations convey the professional image and quality specific to your industry. To polish up your documents, I use professional terminology management software to ensure terminology consistency across all your texts.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            My services are perfectly suited for attorneys-at-law, lawyers and corporations. I am committed to delivering high quality translations when you need them — I do not miss deadlines. As a lawyer myself, I understand the need for strict confidentiality and can ensure it will always be respected.
          </p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>My Specializations</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            As a French lawyer-linguist, I have established expertise in different areas of law. I hold qualifications both in law (Master) and translation (English to French certified legal translator). This lays the groundwork for my implicit understanding of the French and American legal systems.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-subtle)' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Legal</h4>
              <ul style={{ listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Environmental, Social and Governance (ESG)</li>
                <li>Data privacy and Data security</li>
                <li>Contract law</li>
                <li>Pre-contracts (term sheets, letter of intents, MOU)</li>
                <li>Corporate law</li>
                <li>Criminal law</li>
                <li>Human rights</li>
                <li>Environmental law</li>
                <li>European law</li>
                <li>Judgments, court documents, legal opinions</li>
                <li>International arbitrage</li>
              </ul>
            </div>
            
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-subtle)' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Corporate Communications</h4>
              <ul style={{ listStylePosition: 'inside', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Company policies & procedures</li>
                <li>Corporate governance & corporate social responsibility</li>
                <li>Annual reports</li>
                <li>Marketing documents (brochure, reports)</li>
                <li>Chairman’s letters and speeches</li>
                <li>PowerPoint presentations</li>
                <li>Websites for law firms</li>
                <li>E-training for lawyers</li>
                <li>International relations</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--primary)', color: 'white', borderRadius: '20px' }}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>IS YOUR TEXT READY?</h3>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>I will make your text sing and shine.</p>
            <Link to="/vldtranslations-contactalegalandbusinesstranslator" className="btn btn-primary">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
