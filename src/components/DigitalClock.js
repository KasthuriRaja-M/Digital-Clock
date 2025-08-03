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
    return { hours, minutes, seconds };
  };

  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const { hours, minutes, seconds } = formatTime(time);
  const dateString = formatDate(time);

  return (
    <div className="digital-clock">
      <div className="time-display">
        <div className="time-segment">
          <span className="time-value">{hours}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-segment">
          <span className="time-value">{minutes}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-separator">:</div>
        <div className="time-segment">
          <span className="time-value">{seconds}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
      <div className="date-display">
        {dateString}
      </div>
    </div>
  );
};

export default DigitalClock; 