// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function Dashboard() {
  const [agentRunning, setAgentRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [emailStats, setEmailStats] = useState({ labels: [], values: [] });
  const navigate = useNavigate();

  const uid = localStorage.getItem('uid');

  useEffect(() => {
    if (!uid) return navigate('/login');
    fetchAgentStatus();
    fetchActivityStats();
    fetchUpcomingEvents();
  }, []);

  const fetchAgentStatus = async () => {
    try {
      const res = await fetch(`https://scheduler-ai.onrender.com/agent-status`, {
        headers: { Authorization: `Bearer ${await auth.currentUser.getIdToken()}` },
      });
      const data = await res.json();
      if (data.running !== undefined) setAgentRunning(data.running);
    } catch (err) {
      console.error('Failed to fetch agent status:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchActivityStats = async () => {
    try {
      const res = await fetch(`https://scheduler-ai.onrender.com/api/activity-stats/${uid}`);
      const data = await res.json();
      if (!data.error) {
        const labels = Object.keys(data);
        const values = Object.values(data);
        setEmailStats({ labels, values });
      }
    } catch (e) {
      console.error('Error fetching stats:', e);
    }
  };

  const fetchUpcomingEvents = async () => {
    try {
      const res = await fetch(`https://scheduler-ai.onrender.com/api/upcoming-events/${uid}`);
      const events = await res.json();
      if (!events.error) {
        setUpcomingEvents(events.map(e => ({
          title: e.summary || "Untitled Event",
          time: e.start?.dateTime || e.start?.date || "Unknown time"
        })));
      }
    } catch (e) {
      console.error("Error fetching events:", e);
    }
  };

  const toggleAgent = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/toggle-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await auth.currentUser.getIdToken()}`,
        },
        body: JSON.stringify({ enable: !agentRunning }),
      });
      const data = await res.json();
      if (data.running !== undefined) setAgentRunning(data.running);
    } catch (err) {
      console.error('Toggle agent error:', err);
    }
  };

  const handleFeedbackSubmit = () => {
    alert(`Thanks for your feedback: "${feedback}"`);
    setFeedback('');
  };

  const emailActivityChart = {
    labels: emailStats.labels,
    datasets: [
      {
        label: 'Emails Processed',
        data: emailStats.values,
        backgroundColor: '#4f46e5',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {auth.currentUser?.email}</h2>

      <div className="agent-toggle-section">
        <label className="switch">
          <input type="checkbox" checked={agentRunning} onChange={toggleAgent} disabled={loading} />
          <span className="slider round"></span>
        </label>
        <span>{agentRunning ? 'Agent Running' : 'Agent Stopped'}</span>
      </div>

      <div className="chart-section">
        <h3>📈 Email Activity (Past 7 Days)</h3>
        <Bar data={emailActivityChart} />
      </div>

      <div className="events-section">
        <h3>📅 Upcoming Events</h3>
        {upcomingEvents.length === 0 ? (
          <p>No upcoming events found.</p>
        ) : (
          <ul>
            {upcomingEvents.map((event, idx) => (
              <li key={idx}>
                <strong>{event.title}</strong> – {new Date(event.time).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="feedback-section">
        <h3>💬 Got Suggestions?</h3>
        <textarea
          rows={3}
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
      </div>
    </div>
  );
}

export default Dashboard;
