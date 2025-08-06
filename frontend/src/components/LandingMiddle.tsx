import React from "react";
import { Link } from "react-router-dom";
import stroopImage from "../assets/stroopImage.png";

const LandingMiddle: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "3rem 2rem",
      maxWidth: "1200px",
    },
    left: {
      flex: 0.5,
      paddingRight: "2rem",
    },
    heading: {
      fontSize: "1.75rem",
      fontWeight: 600,
      marginBottom: "1.5rem",
    },
    button: {
      padding: "0.75rem 1.5rem",
      color: "black",
      backgroundColor: "#D3D3D3",
      border: "1.3px solid black",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      fontWeight: 500,
    },
    right: {
      flex: 1,
      textAlign: "right" as const,
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "0.5rem",
    },
  } as const;

  return (
    <div style={styles.container}>
      {/* text header */}
      <div style={styles.left}>
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
      </div>

      {/* image */}
      <div style={styles.right}>
        <img
          src= {stroopImage}
          alt= "Stroop Task Image"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default LandingMiddle;
