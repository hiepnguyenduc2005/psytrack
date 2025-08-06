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
      boxSizing: "border-box",
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
      textDecoration: 'none',
    },
    linkHover: {
      opacity: '0.5',
    },
  } as const;

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={{ ...styles.logo, ...styles.link }}>Logo</Link>
      <ul style={styles.links}>
        <li><Link to="/stroop-task" style={styles.link}>Stroop Task</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/login" style={styles.link}>Log In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
