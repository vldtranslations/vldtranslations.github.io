import React, { useState, useEffect } from 'react';

// A component that constructs the phone number dynamically on the client side
// This prevents simple web scrapers from harvesting the phone number from static HTML
function ObfuscatedPhone() {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Construct the phone number piece by piece
    const countryCode = '+1';
    const areaCode = '917';
    const prefix = '348';
    const lineNumber = '5221';
    
    // Only assemble the phone after the component mounts (in the browser)
    setPhone(`${countryCode} (${areaCode}) ${prefix}-${lineNumber}`);
  }, []);

  if (!phone) {
    return <span>Loading contact info...</span>;
  }

  // Strip non-numeric characters for the href tel link, keeping the +
  const telHref = phone.replace(/[^\d+]/g, '');

  return (
    <a href={`tel:${telHref}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      {phone}
    </a>
  );
}

export default ObfuscatedPhone;
