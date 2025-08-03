import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 24-hour format
  const time24 = time.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // 12-hour format with AM/PM
  const time12 = time.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // Full date
  const dateString = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div style={{
      textAlign: 'center',
      padding: '30px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      borderRadius: '15px',
      margin: '20px',
      minWidth: '500px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      {/* 24-hour time */}
      <div style={{
        fontSize: '4rem',
        fontFamily: 'monospace',
        color: '#00ff88',
        marginBottom: '10px',
        textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
      }}>
        {time24}
      </div>
      
      {/* 12-hour time with AM/PM */}
      <div style={{
        fontSize: '3rem',
        fontFamily: 'monospace',
        color: '#ff6b6b',
        marginBottom: '20px',
        textShadow: '0 0 15px rgba(255, 107, 107, 0.5)'
      }}>
        {time12}
      </div>
      
      {/* Date */}
      <div style={{
        fontSize: '1.3rem',
        color: '#ffffff',
        opacity: 0.9,
        fontFamily: 'Arial, sans-serif'
      }}>
        {dateString}
      </div>
    </div>
  );
};

export default DigitalClock; 