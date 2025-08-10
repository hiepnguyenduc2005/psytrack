import React from 'react';
import Navbar from "../components/NavBar";
import LandingMiddle from "../components/LandingMiddle";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* -- */}
      <LandingMiddle />
      <Footer />
    </div>
  );
};
export default LandingPage;