import React from "react";
import { Link } from "react-router-dom";
import stroopImage from "../assets/stroopImage.png";

const LandingMiddle: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      padding: "4rem 2rem",
      maxWidth: "1400px",
      margin: "0 auto",
      textAlign: "center" as const,
    },
    heading: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "1.5rem",
      lineHeight: 1.2,
      maxWidth: "1000px",
    },
    button: {
      padding: "0.4rem 1.4rem",
      color: "black",
      backgroundColor: "#D3D3D3",
      border: "1.3px solid black",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    image: {
      marginTop: "2rem",
      maxWidth: "90%",
      height: "auto",
      borderRadius: "0.5rem",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  } as const;

  return (
      <div style={styles.container}>
        {/* text header */}
        <h2 style={styles.heading}>
          Run psychological experiments and track your results!
        </h2>
        <Link
            to="/signup"
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Sign Up
        </Link>

        {/* image */}
        <img
            src={stroopImage}
            alt="Stroop Task"
            style={styles.image}
        />
      </div>
  );
};

export default LandingMiddle;
