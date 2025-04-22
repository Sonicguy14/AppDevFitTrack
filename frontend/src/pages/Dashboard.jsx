import React from "react";
import { useNavigate, Link } from "react-router-dom";
import TrackSection from "../components/Dashboard/TrackSection"; 
import ChartSection from "../components/Dashboard/ChartSection";
import WorkoutSection from "../components/Dashboard/WorkoutSection";
import WeightSection from "../components/Dashboard/WeightSection";
import MealSection from "../components/Dashboard/MealSection";
import WaterSection from "../components/Dashboard/WaterSection";
import GoalSection from "../components/Dashboard/GoalSection";
import "./Dashboard.css"; 

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate("/login");
    } else {
      console.warn("Logout function not provided as a prop.");
    }
  };

  return (
    <div className="landing-container">
      <header className="site-header">
        <div className="logo">
          <Link to="/">
            <h1>FitTrack</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          <ChartSection />
          <WorkoutSection />
          <WeightSection />
          <MealSection />
          <GoalSection />
          <TrackSection />
          <WaterSection />
        </div>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2025 FitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;