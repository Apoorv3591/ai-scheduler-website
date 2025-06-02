// src/components/UpcomingEvents.jsx
import React from 'react';

const UpcomingEvents = ({ events }) => {
  return (
    <div style={{ marginTop: '2rem', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
      <h3>📅 Upcoming Events</h3>
      {events.length === 0 ? (
        <p>No upcoming events.</p>
      ) : (
        <ul>
          {events.map((e, i) => (
            <li key={i}>
              <strong>{e.title}</strong> on {e.date} at {e.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingEvents;
