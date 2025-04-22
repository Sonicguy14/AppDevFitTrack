import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import LandingPage from "./pages/LandingPage"
import LoginRegister from "./pages/LoginRegister"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
