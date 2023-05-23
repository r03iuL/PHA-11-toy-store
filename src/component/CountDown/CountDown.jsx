

import React, { useEffect, useState } from 'react';

const Countdown = ({ endTime }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const difference = endTime - currentTime;
      
      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setRemainingTime(difference);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endTime]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="text-center ">
      {/* <h2 className="text-5xl font-bold">Offer Countdown</h2> */}
      <div className="py-2 ">
        <span className="inline-block mx px-2 py-1 text-8xl font-bold border-solid border-4 border-orange-500 bg-orange-200 rounded">
          {formatTime(remainingTime)}
        
        </span>
      </div>
    </div>
  );
};

export default Countdown;

