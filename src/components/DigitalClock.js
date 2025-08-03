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

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
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
      margin: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '20px 0', fontFamily: 'monospace' }}>
        {formatTime(time)}
      </h1>
      <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
        {formatDate(time)}
      </p>
    </div>
  );
};

export default DigitalClock; 