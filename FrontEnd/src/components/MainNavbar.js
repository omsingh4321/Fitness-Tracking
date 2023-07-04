import React from 'react';
import './Main.css';
import ball from './Images/football.jpeg';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';

const Clock = () => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const ticking = () => {
      const currDate = new Date();
      let hr = currDate.getHours();
      const min = currDate.getMinutes();
      const sec = currDate.getSeconds();
      let tellme = false;
      if (hr >= 12) {
        hr = hr % 12;
        if(hr===0) hr=12;
        tellme = true;
      }
  

      const h = hr < 10 ? '0' + hr : hr;
      const m = min < 10 ? '0' + min : min;
      const s = sec < 10 ? '0' + sec : sec;
      const displayTime = tellme
        ? `${h}:${m}:${s} PM`
        : `${h}:${m}:${s} AM`;

      setTime(displayTime);
    };

    const intervalId = setInterval(ticking, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    
      <div className="time">{time}</div>
    
  );
};

const MainNavbar = () => {
  return (
    
      <div style={{marginBottom:'10px'}} >
        <ul>
          <li>
            <a href="./main.html">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="./cont.html">Contact</a>
          </li>
      
          <li>
            <a className="active" href="#about">
              About
            </a>
          </li>
          <li style={{marginLeft:'23vh'}}>
            <Clock />
          </li>
        </ul>
      </div>
    
  );
};

export default MainNavbar;

