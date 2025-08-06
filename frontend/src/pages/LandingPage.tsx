import React from 'react';
import Navbar from "../components/NavBar";
import LandingMiddle from "../components/LandingMiddle";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* -- */}
      <LandingMiddle />
    </div>
  );
};
export default LandingPage;