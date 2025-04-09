import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div>
                <h1>🐙 Welcome to OctoFit Tracker – Your Smart Fitness Companion!</h1>
                <p>Whether you're a student aiming to boost your fitness or a gym teacher guiding your team to success, OctoFit Tracker is here to support your journey every step of the way. Here's what makes our app awesome:</p>
                <ul>
                  <li>👤 <strong>User Profiles for Everyone</strong><br />Easily create profiles tailored for students and gym teachers. Track progress, set goals, and stay connected in one place.</li>
                  <li>🏃‍♂️ <strong>Activity Tracking</strong><br />Monitor every move! From daily workouts to long-term improvements, track your fitness progress with ease and stay motivated with real-time stats.</li>
                  <li>🤝 <strong>Team Creation & Management</strong><br />Fitness is better together! Form teams, set collaborative goals, and encourage one another to achieve more as a group.</li>
                  <li>🏆 <strong>Leaderboards</strong><br />Fuel some friendly competition! Our leaderboards showcase top performers and inspire everyone to climb to the top.</li>
                  <li>💪 <strong>Personalized Workout Suggestions</strong><br />No more guesswork. Get customized workout plans based on your performance, helping students improve faster and smarter.</li>
                </ul>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
