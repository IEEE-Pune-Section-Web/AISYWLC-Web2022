import React, { useEffect, useState } from 'react'

const Counter = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-08 11:00:00`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
          timeLeft = {
            Days: (Math.floor(difference / (1000 * 60 * 60 * 24))),
            Hours: (Math.floor((difference / (1000 * 60 * 60)) % 24)),
            Minutes: Math.floor((difference / 1000 / 60) % 60),
            Seconds: Math.floor((difference / 1000) % 60),
          };
        }
        return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="Counter__blockContainer">
          <div className="Counter__block">
            <div className="Counter__time__block"> <h2>{timeLeft[interval]}</h2></div>
            <div className="Counter__time__name"> <h4>{interval}</h4> </div>
          </div>
          <div className="Counter__separator">  
              
          </div>
      </div>
    );
  });
  return (
    <div className="Counter__container">
    <div className="Counter__body">
    {timerComponents.length ? timerComponents : <h2 className="Counter__post">Time's up!</h2>}
    </div>
  </div>
  )
}

export default Counter