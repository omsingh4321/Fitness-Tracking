import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pre from './components/options/Pre';
import Track from './components/options/Track';
import Chl from './components/options/Chl';
import Todo from './components/options/Todo';
import StopWatch from './components/options/StopWatch';
import Review from './components/options/Review';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

ReactDOM.render(
  <Router>
    <div>
      <Routes>
        <Route path="/Home" element={<App />} />
        <Route path="/Pre" element={<Pre />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Chl" element={<Chl />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/StopWatch" element={<StopWatch />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        

      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

