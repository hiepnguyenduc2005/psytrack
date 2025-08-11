import React from "react";
import { Link } from "react-router-dom";

const DashControl: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "3rem 2rem",
      maxWidth: "1200px",
    },
    left: {
      padding: "0rem 4rem",
      //backgroundColor: "#8d6565ff",
      marginRight: 310,
    },
    heading: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    button: {
      padding: "0.75rem 1.5rem",
      color: "blue",
      backgroundColor: "#ffffffff",
      border: "1.3px solid blue",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      fontWeight: 500,
    },
    right: {
      display: "flex", 
      gap: "1.5rem",
      padding: "0rem 3rem",
    },
  } as const;

  return (
    <div style={styles.container}>
      {/* dash header */}
      <div style={styles.left}>
        <h2 style={styles.heading}>Dashboard</h2>
        
      </div>

      <div style={styles.right}>
        <Link
          to="/"
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Print
        </Link>

        <Link
          to="/"
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Edit Profile
        </Link>

        <Link
          to="/"
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Settings
        </Link>
      </div>
      
    </div>
  );
};

export default DashControl;
