"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [resetSent, setResetSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }

    // Here you would typically call an API to handle the password reset
    console.log("Password reset requested for:", email)

    // Simulate successful request
    setResetSent(true)
    setError("")
  }

  return (
    <div className="auth-container">
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
          </ul>
        </nav>
      </header>

      <main className="auth-content">
        <div className="auth-card">
          <div className="auth-form-container">
            {resetSent ? (
              <div className="form-success">
                <h3>Check Your Email</h3>
                <p>We've sent password reset instructions to {email}. Please check your inbox.</p>
                <Link to="/login" className="auth-button">
                  Return to Login
                </Link>
              </div>
            ) : (
              <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <p>Enter your email address to reset your password</p>

                {error && <div className="form-error">{error}</div>}

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="auth-button">
                  Reset Password
                </button>

                <div className="form-footer">
                  <Link to="/login" className="form-link">
                    Back to Login
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ForgotPassword
