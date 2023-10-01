import React, { useState, useEffect } from 'react';

function RunningNumberCounter2() {
  const [number, setNumber] = useState(2000);

  useEffect(() => {
    const endTime = 3000;
    const duration = 1000; // 1 second
    const steps = 100;
    const increment = (endTime - 2000) / steps;
  
    const interval = setInterval(() => {
      if (number < endTime) {
        setNumber((prevNumber) => prevNumber + increment);
      }
    }, duration / steps);
  
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [number]); // Add 'number' as a dependency
  

  return (
    <div>
      <h1>{Math.round(number)}</h1>
    </div>
  );
}

export default RunningNumberCounter2;
