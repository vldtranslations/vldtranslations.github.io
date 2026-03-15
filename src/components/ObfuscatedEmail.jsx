import React, { useState, useEffect } from 'react';

// A component that constructs the email address dynamically on the client side
// This prevents simple web scrapers from harvesting the email from the static HTML
function ObfuscatedEmail() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Construct the email piece by piece
    const user = 'valerie';
    const domain = 'VLDtranslations';
    const tld = 'com';
    
    // Only assemble the email after the component mounts (in the browser)
    setEmail(`${user}@${domain}.${tld}`);
  }, []);

  if (!email) {
    return <span>Loading contact info...</span>;
  }

  return (
    <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      {email}
    </a>
  );
}

export default ObfuscatedEmail;
