"use client"

import { Link, useNavigate } from "react-router-dom"

const LandingPage = () => {
  const navigate = useNavigate()

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

      <main className="landing-main">
        <div className="hero-section">
          <h2>FitTrack</h2>
          <p>Your Personal Health and Fitness Tracker App.</p>
          <div className="cta-buttons">
            <Link to="/dashboard" className="cta-button primary">
              Try Dashboard
            </Link>
            <Link to="/login" className="cta-button secondary">
              Sign Up Free
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
