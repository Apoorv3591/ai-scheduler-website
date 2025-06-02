// src/components/FeedbackBox.jsx
import React, { useState } from 'react';

const FeedbackBox = () => {
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      console.log("Feedback sent:", text); // Hook this to backend later
      setSent(true);
      setText('');
    }
  };

  return (
    <div style={{ marginTop: '2rem', background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
      <h3>💬 Got Suggestions?</h3>
      {sent ? (
        <p style={{ color: 'green' }}>Thanks for your feedback! 🎉</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share ideas, bugs, or wishes..."
            style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', resize: 'none' }}
          />
          <br />
          <button type="submit" style={{ marginTop: '0.5rem' }}>Send Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackBox;
