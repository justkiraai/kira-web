/** Public baseline marketing copy; rendered directly so source and website agree. */
import React from 'react';
import { createRoot } from 'react-dom/client';

/** Render the two version 1.0 product policies without external services. */
function KiraWebsite() {
  return (
    <div style={{ maxWidth: 760, margin: '48px auto', padding: '0 24px', color: '#202520', fontFamily: 'Georgia, serif', lineHeight: 1.65 }}>
      <header style={{ borderBottom: '1px solid #bac4b9', paddingBottom: 24 }}>
        <h1 style={{ fontSize: 48, marginBottom: 0 }}>Kira</h1>
        <p>Small, predictable policies for product integrations.</p>
      </header>
      <main>
        <section aria-labelledby="events" style={{ marginTop: 32 }}>
          <h2 id="events">Kira Events</h2>
          <p>Webhook delivery with 5 retries after the initial attempt: up to 6 total attempts by default.</p>
          <p>Retry HTTP 408, HTTP 429, HTTP 5xx, and transport errors. Stop on HTTP 2xx success or other HTTP statuses. Set maxRetries from 0 to 10.</p>
        </section>
        <section aria-labelledby="verify" style={{ marginTop: 32 }}>
          <h2 id="verify">Kira Verify</h2>
          <p>Verification code validity windows default to 600 seconds (10 minutes).</p>
          <p>A window is active from issuance until, but excluding, its exact expiry timestamp. Set ttlSeconds from 1 to 3600.</p>
        </section>
        <p style={{ marginTop: 40, borderTop: '1px solid #bac4b9', paddingTop: 20 }}>These local fixtures model delivery and expiry policies. They do not provide a hosted webhook or authentication service.</p>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<KiraWebsite />);
