import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime24 = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatTime12 = (date) => {
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      borderRadius: '10px',
      margin: '20px',
      minWidth: '400px'
    }}>
      <h1 style={{ 
        fontSize: '3.5rem', 
        margin: '20px 0', 
        fontFamily: 'monospace',
        color: '#00ff88'
      }}>
        {formatTime24(time)}
      </h1>
      <h2 style={{ 
        fontSize: '2.5rem', 
        margin: '15px 0', 
        fontFamily: 'monospace',
        color: '#ff6b6b'
      }}>
        {formatTime12(time)}
      </h2>
      <p style={{ 
        fontSize: '1.2rem', 
        margin: '10px 0',
        color: '#ffffff'
      }}>
        {formatDate(time)}
      </p>
    </div>
  );
};

export default DigitalClock; 