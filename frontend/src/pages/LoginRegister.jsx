"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginRegister = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // Simulate storing in localStorage (you can replace this with real API)
    const newUser = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    }
    localStorage.setItem("fittrackUser", JSON.stringify(newUser))

    alert("Registration successful! Please log in.")
    setRegisterData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setIsLogin(true)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem("fittrackUser"))

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      alert("Login successful!")
      navigate("/dashboard")
    } else {
      alert("Invalid email or password.")
    }
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main className="auth-content">
        <div className="auth-card">
          <div className="auth-tabs">
            <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
              Login
            </button>
            <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
              Register
            </button>
          </div>

          <div className="auth-form-container">
            {isLogin ? (
              <form className="auth-form" onSubmit={handleLoginSubmit}>
                <h2>Welcome Back</h2>
                <p>Log in to access your fitness dashboard</p>

                <div className="form-group">
                  <label htmlFor="login-email">Email</label>
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="login-password">Password</label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <div className="form-options">
                  <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="auth-button">
                  Login
                </button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleRegisterSubmit}>
                <h2>Create Account</h2>
                <p>Sign up to start your fitness journey</p>

                <div className="form-group">
                  <label htmlFor="register-name">Full Name</label>
                  <input
                    type="text"
                    id="register-name"
                    name="name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="register-email">Email</label>
                  <input
                    type="email"
                    id="register-email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="register-password">Password</label>
                  <input
                    type="password"
                    id="register-password"
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="register-confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    id="register-confirm-password"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>

                <div className="terms">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">I agree to the terms and conditions</label>
                </div>

                <button type="submit" className="auth-button">
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginRegister
