import React, { useState } from 'react';
import ObfuscatedEmail from '../components/ObfuscatedEmail';
import ObfuscatedPhone from '../components/ObfuscatedPhone';

function Contact() {
  const [result, setResult] = useState("");

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <title>Contact VLD Translations | Request a Quote</title>
      <meta name="description" content="Contact VLD Translations for a free and non-binding price quote within 24 hours. Strict confidentiality guaranteed by a lawyer-linguist." />
      
      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Call or email me to discuss your translation needs. I would be delighted to hear about your project.</p>
        </div>

        <div className="contact-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="contact-info">
            <h3>How to Proceed</h3>
            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>To receive a free and non-binding price quote within 24 hours, please:</p>
            <ul style={{ listStylePosition: 'inside', marginBottom: '2rem', opacity: 0.9 }}>
              <li>Email me the documents you want translated.</li>
              <li>Indicate the date by which you need the translation.</li>
              <li>Indicate the purpose of the translation (for information purposes, for publication, etc.)</li>
            </ul>

            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '2rem' }}>
              Rates vary depending on the technicality of the text, urgency and formatting requirements.
            </p>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4 style={{ margin: 0 }}>Call Me</h4>
                <p style={{ margin: 0, opacity: 0.8 }}><ObfuscatedPhone /></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4 style={{ margin: 0 }}>Email</h4>
                <p style={{ margin: 0, opacity: 0.8 }}><ObfuscatedEmail /></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4 style={{ margin: 0 }}>Location & Hours</h4>
                <p style={{ margin: 0, opacity: 0.8 }}>Chicago, Illinois, USA</p>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.85rem' }}>8:00 am to 6:00 pm (US Central Time - GMT-6)</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255, 39, 76, 0.05)', borderRadius: '15px' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Strict Confidentiality</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>All documents are treated with strict confidentiality. I will sign an NDA before starting any project, as needed.</p>
            </div>
          </div>

          <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '15px', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--card-border)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Send a Direct Message</h3>
            <form 
              className="contact-form" 
              onSubmit={async (e) => { 
                e.preventDefault();
                setResult("Sending...");
                
                const formData = new FormData(e.target);
                formData.append("access_key", "b25febdb-a016-49fe-a7bf-4c6ec5d3ac1e");
                
                const originalMessage = formData.get("message") || "";
                formData.set("message", `${originalMessage}\n\n(submitted at: vldtranslations@github.io)`);

                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });
                  
                  const data = await response.json();
                  
                  if (data.success) {
                    setResult("Form Submitted Successfully!");
                    e.target.reset();
                  } else {
                    console.error("Error", data);
                    setResult(data.message);
                  }
                } catch (error) {
                  console.error("Error", error);
                  setResult("An error occurred. Please try again later.");
                }
              }}
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject / Service Required" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message & Details" required></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={result === "Sending..."}
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>
            {result && (
              <span style={{ 
                display: 'block', 
                marginTop: '1rem', 
                textAlign: 'center',
                fontWeight: 'bold',
                color: result.includes('Success') ? 'var(--accent)' : 'inherit' 
              }}>
                {result}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
