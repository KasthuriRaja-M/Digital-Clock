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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '20px'
    }}>
      {/* 24-hour time box */}
      <div style={{
        textAlign: 'center',
        padding: '25px',
        backgroundColor: 'rgba(0, 255, 136, 0.1)',
        color: '#00ff88',
        borderRadius: '15px',
        minWidth: '400px',
        boxShadow: '0 8px 32px rgba(0, 255, 136, 0.2)',
        border: '2px solid rgba(0, 255, 136, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontSize: '0.9rem',
          marginBottom: '10px',
          opacity: 0.8,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          24-Hour Format
        </div>
        <div style={{
          fontSize: '3.5rem',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
        }}>
          {time24}
        </div>
      </div>
      
      {/* 12-hour time box */}
      <div style={{
        textAlign: 'center',
        padding: '25px',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        color: '#ff6b6b',
        borderRadius: '15px',
        minWidth: '400px',
        boxShadow: '0 8px 32px rgba(255, 107, 107, 0.2)',
        border: '2px solid rgba(255, 107, 107, 0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontSize: '0.9rem',
          marginBottom: '10px',
          opacity: 0.8,
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          12-Hour Format
        </div>
        <div style={{
          fontSize: '3.5rem',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          textShadow: '0 0 20px rgba(255, 107, 107, 0.5)'
        }}>
          {time12}
        </div>
      </div>
      
      {/* Date box */}
      <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        borderRadius: '15px',
        minWidth: '400px',
        boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontSize: '1.3rem',
          fontFamily: 'Arial, sans-serif',
          opacity: 0.9
        }}>
          {dateString}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock; 