// src/pages/Auth.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import '../styles/Auth.css';

const Auth = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const accessToken = user.stsTokenManager.accessToken;
      const uid = user.uid;

      localStorage.setItem('uid', uid);

      await fetch('https://scheduler-ai.onrender.com/api/store-creds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, access_token: accessToken }),
      });

      navigate('/dashboard');
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome to AI Scheduler</h2>
      <button className="google-btn" onClick={handleGoogleLogin}>
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
        Continue with Google
      </button>
    </div>
  );
};

export default Auth;
