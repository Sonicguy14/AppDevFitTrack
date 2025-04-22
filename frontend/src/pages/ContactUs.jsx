"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const ContactUs = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="contact-container">
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

      <main className="contact-content">
        <h2>Contact Us</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Have questions about FitTrack? We're here to help! Fill out the form and our team will get back to you as
              soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <p>support@fittrack.com</p>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <strong>Address:</strong>
                <p>123 Fitness Street, Health City, FC 98765</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                <button onClick={() => setFormSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactUs
