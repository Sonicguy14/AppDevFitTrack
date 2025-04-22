"use client"

import { Link, useNavigate } from "react-router-dom"

const AboutUs = () => {
  const navigate = useNavigate()

  return (
    <div className="about-container">
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
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/login" className="login-btn">
                Login/Register
              </Link>
            </li>
            <li>
              <button onClick={() => navigate("/")} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="about-content">
        <h2>About FitTrack</h2>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            At FitTrack, our mission is to empower individuals to take control of their health and fitness journey. We
            believe that tracking your progress is the key to achieving your fitness goals.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            FitTrack was founded in 2023 by a team of fitness enthusiasts who were frustrated with the complexity of
            existing fitness tracking apps. We set out to create a simple, intuitive platform that makes it easy to
            monitor your health metrics, workouts, and nutrition.
          </p>
        </div>

        <div className="about-section">
          <h3>Why Choose FitTrack?</h3>
          <ul>
            <li>Comprehensive health and fitness tracking in one place</li>
            <li>User-friendly interface designed for all fitness levels</li>
            <li>Data-driven insights to help you optimize your routine</li>
            <li>Community support to keep you motivated</li>
          </ul>
        </div>

        <div className="cta-section">
          <h3>Ready to start your fitness journey?</h3>
          <Link to="/dashboard" className="cta-button">
            Try Our Dashboard
          </Link>
        </div>
      </main>
    </div>
  )
}

export default AboutUs
