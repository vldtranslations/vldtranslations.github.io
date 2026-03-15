import React from 'react';
import { Link } from 'react-router-dom';

function Qualifications() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="section-title">
          <h2>Qualifications</h2>
          <p>As a certified legal translator & French lawyer-linguist based in Chicago, I specialize in assisting US law firms, corporate legal departments, and international organizations.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ background: 'var(--primary)', color: 'white', padding: '3rem', borderRadius: '20px', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ flex: '1' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '2rem' }}>Why Hire a Lawyer-Linguist?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                A native French speaker, I translate from English to French, bridging cultural differences to prevent reader confusion and legal uncertainty. This task requires extensive training, experience, and mental agility.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '2.5rem', borderRadius: '15px', boxShadow: 'var(--shadow-subtle)', borderTop: '5px solid var(--accent)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚖️</div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Law Credentials</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>•</span> Master's degree in French Business Law - Université Paris XII, France</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>•</span> Diplome C.U.E.C.E., European Public and Private Law - Université Paris I La Sorbonne, France</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>•</span> Certificate, New French contract law - Université Paris I La Sorbonne, France</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>•</span> Certificate, Contract drafting - Université de Genève, Switzerland</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>•</span> Certificate, U.S. law – Levin College of Law, U.S.A.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '2.5rem', borderRadius: '15px', boxShadow: 'var(--shadow-subtle)', borderTop: '5px solid var(--secondary)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📝</div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Translation Credentials</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--secondary)' }}>•</span> Master-level certification - English to French legal translation, accredited by the French government ― 450 hours of training; graduated with highest honors.</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--secondary)' }}>•</span> Certificate in translation - New York University, U.S.A.</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--secondary)' }}>•</span> U.S. State Department translation exam, passed</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--secondary)' }}>•</span> Member of the American Translators Association (ATA) since 2012</li>
                <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--secondary)' }}>•</span> Member of the National Association of Judiciary Interpreters and Translators (NAJIT)</li>
              </ul>
            </div>

          </div>

          {/* Testimonial */}
          <div style={{ textAlign: 'center', fontStyle: 'italic', padding: '3rem', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
            <h3 style={{ marginBottom: '1rem', fontStyle: 'normal' }}>WHAT CLIENTS SAY</h3>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>“Your work is simply excellent.”</p>
            <p style={{ fontWeight: 'bold' }}>— Jean-Claude Alyko, Manager, Idée-Up France</p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Need more details? Contact me.</p>
            <Link to="/vldtranslations-contactalegalandbusinesstranslator" className="btn btn-primary">Get in Touch</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Qualifications;
