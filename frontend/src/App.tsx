import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import StroopTask from "./pages/StroopTask.tsx";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/stroopTask" element={<StroopTask />} />
        
      </Routes>
    </Router>
  )
}

export default App