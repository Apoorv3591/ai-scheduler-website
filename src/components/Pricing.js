import React from 'react';

export default function Pricing() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Pricing</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px'
      }}>
        {/* Free Plan */}
        <div style={{
          backgroundColor: '#f7faff',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '30px',
          width: '280px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ marginBottom: '10px' }}>🆓 Free</h3>
          <p>✔ Full AI scheduling features</p>
          <p>✔ Unlimited GPT meetings</p>
          <p>✔ Calendar + Email integration</p>
          <button
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#6a5acd',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            onClick={() => alert("Free plan activated")}
          >
            Start for Free
          </button>
        </div>

        {/* Pro Plan */}
        <div style={{
          backgroundColor: '#fcfcfc',
          border: '1px dashed #aaa',
          borderRadius: '10px',
          padding: '30px',
          width: '280px',
          opacity: 0.5
        }}>
          <h3 style={{ marginBottom: '10px' }}>🚀 Pro (Coming Soon)</h3>
          <p>✔ Priority email parsing</p>
          <p>✔ Multiple calendar accounts</p>
          <p>✔ Analytics & usage tracking</p>
          <p>✔ Custom branding & support</p>
          <button
            disabled
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#aaa',
              color: '#fff',
              border: 'none',
              borderRadius: '6px'
            }}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}
