import React, { useState, useEffect } from 'react';

function RunningNumberCounter3() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const endTime = 15;
    const duration = 1000; // 1 second
    const steps = 100;
    const increment = endTime / steps;

    const interval = setInterval(() => {
      if (number < endTime) {
        setNumber((prevNumber) => prevNumber + increment);
      }
    }, duration / steps);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [number]);

  return (
    <div>
      <h1>{Math.round(number)}</h1>
    </div>
  );
}

export default RunningNumberCounter3;
