import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const styles= {
    footer: {
      position: "fixed",
      width: "100%",
      backgroundColor: '#6b6b6bff',
      bottom: 0,
      left: 0,
      justifyContent: "center",
      padding: "1rem 2rem",
      alignItems: "center",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4rem",
    },
    link: {
      color: "#c3c5c8ff",
    },
    bottom: {
      marginTop: "2rem",
      paddingTop: "1rem",
      textAlign: "center" as const,
      fontSize: "1rem",
      color: "#000000ff",
    },
    } as const;

    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          {/* Links */}
          <Link 
            to="/about" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            About
          </Link>

          <Link 
            to="/contact" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact
          </Link>

          <Link 
            to="/" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Help
          </Link>

          <Link 
            to="/" 
            style={styles.link}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Privacy Policy
          </Link>
        </div>
        
        {/* Divider */}
        <div style={styles.bottom}>
          © {new Date().getFullYear()} PsyTrack. All rights reserved.
        </div>
      </footer>
    );
};

export default Footer;