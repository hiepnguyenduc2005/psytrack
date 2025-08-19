import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import './App.css'
import StroopTask from "./pages/StroopTask.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/stroopTask" element={<StroopTask />} />
        {/* You can add more routes here later */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App


/* import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import helloService from './service/helloService'

function App() {
  const [count, setCount] = useState(0)

  // const fetchHello = async (): Promise<string> => {
  //   try {
  //     const response = await fetch('/api/api/hello');
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.text(); 
  //     return data;
  //   } catch (error) {
  //     console.error('Failed to fetch hello message:', error);
  //     throw error;
  //   }
  // };

  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    helloService()
      .then(setMessage)
      .catch((err) => setMessage(`Error: ${err.message}`));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>{message}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
 */