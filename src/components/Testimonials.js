import React from 'react';

export default function Testimonials() {
  return (
    <section style={{
      backgroundColor: '#f0f4ff',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What Users Are Saying</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {[
          {
            name: "Priya Sharma",
            role: "Product Manager, GrowthCo",
            quote: "This tool changed how I schedule completely — it's my favorite assistant."
          },
          {
            name: "Alex Kim",
            role: "Founder, Meetwise",
            quote: "It’s scary good. I send an email and the rest just… happens."
          },
          {
            name: "Rahul Mehta",
            role: "CTO, DevTrack",
            quote: "GPT+Calendar magic. I haven’t manually scheduled in weeks."
          }
        ].map((user, idx) => (
          <div key={idx} style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            textAlign: 'left'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"{user.quote}"</p>
            <p style={{ fontWeight: 'bold' }}>{user.name}</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{user.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
