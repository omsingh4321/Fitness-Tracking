import React, { useState, useRef } from 'react';

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [displayTime, setDisplayTime] = useState('00:00:00');
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        updateTime();
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setDisplayTime('00:00:00');
  };

  const updateTime = () => {
    setDisplayTime((prevDisplayTime) => {
      const [hours, minutes, seconds] = prevDisplayTime.split(':').map(Number);

      const updatedSeconds = seconds + 1;
      const updatedMinutes = minutes + Math.floor(updatedSeconds / 60);
      const updatedHours = hours + Math.floor(updatedMinutes / 60);

      const formattedSeconds = String(updatedSeconds % 60).padStart(2, '0');
      const formattedMinutes = String(updatedMinutes % 60).padStart(2, '0');
      const formattedHours = String(updatedHours).padStart(2, '0');

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    });
  };

  return (
    <div className="container">
      <div className="screen">{displayTime}</div>
      <div className="lower">
        <div
          className={`btn ${isRunning ? 'disabled' : ''}`}
          onClick={startTimer}
          disabled={isRunning}
        >
          Start
        </div>
        <div
          className={`btn ${!isRunning ? 'disabled' : ''}`}
          onClick={stopTimer}
          disabled={!isRunning}
        >
          Stop
        </div>
        <div className="btn" onClick={resetTimer}>
          Reset
        </div>
      </div>
      <style>{`
        .container {
          border: 20px solid black;
          position: absolute;
          left: 32%;
          top: 26%;
          padding: 40px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          border-radius: 100px;
          background: linear-gradient(to right, blue, black);
          
          box-shadow: 10px 10px 30px 5px rgb(84, 83, 83);
        }
        .screen {
          border: 2px solid black;
          background-color: rgb(183, 205, 232);
          width: 23vw;
          padding: 20px;
          box-shadow: 8px 8px 30px inset rgb(84, 83, 83);
          font-size: 50px;
          border-radius: 10px;
          text-align: center;
        }
        .lower {
          width: fit-content;
          display: flex;
          gap: 10px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
        }
        .btn {
          border-radius: 50%;
          height: 60px;
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          background-color: rgb(15, 203, 46);
          color: white;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: rgb(14, 175, 39);
        }
        .btn.disabled {
          background-color: rgba(15, 203, 46, 0.5);
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default StopWatch;
