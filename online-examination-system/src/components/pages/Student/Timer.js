import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
   
   
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Exam Time</h1>
      <p>Time Left :</p>
      <div style={{fontSize: '25px'}}>
       <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
     
     
    </div>
  );
}
export default Timer
