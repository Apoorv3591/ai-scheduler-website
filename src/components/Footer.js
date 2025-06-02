import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#111',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
        Built with ❤️ by the AI Scheduler Team
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '20px'
      }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
        <a href="mailto:support@aischeduler.com" style={linkStyle}>Email Us</a>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
        © {new Date().getFullYear()} AI Scheduler. All rights reserved.
      </p>
    </footer>
  );
}

const linkStyle = {
  color: '#6a5acd',
  textDecoration: 'none',
  fontWeight: '500'
};
