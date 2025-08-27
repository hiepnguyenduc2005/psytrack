import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import StroopTask from "./pages/StroopTask";
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage";
import StroopInfo from './pages/strooptaskInfo.tsx';

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Protected routes */}
        <Route
          path="/Dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route
          path="/stroopTask"
          element={
            <SignedIn>
              <StroopTask />
            </SignedIn>
          }
        />
        <Route
          path="/Resources"
          element={
            <SignedIn>
              <Resources />
            </SignedIn>
          }
        />

        <Route path="/strooptaskInfo" 
          element={
            <SignedIn>
              <StroopInfo />
            </SignedIn>
          }
        />

        {/* Catch-all for signed out users trying to access private routes */}
        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
