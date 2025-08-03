import React from 'react';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '3rem',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        letterSpacing: '2px'
      }}>
        Digital Clock
      </h1>
      <DigitalClock />
    </div>
  );
}

export default App; 