import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      width: "100%",
      backgroundColor: '#ffffffff',
      boxSizing: "border-box",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    links: {
      listStyle: 'none',
      display: 'flex',
      gap: '2rem',
      padding: 0,
      margin: 0,
    },
    link: {
      color: 'black',
    },
  } as const;

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={{ ...styles.logo, ...styles.link }}>PsyTrack</Link>
      <ul style={styles.links}>
        <li>
          <Link 
            to="/resources" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Resources
          </Link>
        </li>

        <li>
          <Link 
            to="/stroopTask" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Stroop Task
          </Link>
        </li>

        <li>
          <Link 
            to="/Dashboard" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link 
            to="/logIn" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Log In
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
