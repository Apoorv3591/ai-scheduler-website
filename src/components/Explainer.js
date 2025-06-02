import React from 'react';

export default function Explainer() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>How It Works</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {[
          { emoji: '📥', title: 'Email Received', desc: 'User sends a meeting-related email' },
          { emoji: '🧠', title: 'Intent Parsed', desc: 'GPT understands time, tone, and urgency' },
          { emoji: '📅', title: 'Slots Suggested', desc: 'System proposes conflict-free options' },
          { emoji: '✅', title: 'Scheduled', desc: 'After confirmation, event is booked' },
        ].map((step, index) => (
          <div key={index} style={{
            flex: '1 1 200px',
            minWidth: '220px',
            backgroundColor: '#f8f9ff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem' }}>{step.emoji}</div>
            <h3 style={{ margin: '10px 0 5px' }}>{step.title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
