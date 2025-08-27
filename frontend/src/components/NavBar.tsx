import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.9rem 2rem",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      width: "100%",
      backgroundColor: "#ffffffff",
      boxSizing: "border-box",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    links: {
      listStyle: "none",
      display: "flex",
      gap: "2.5rem",
      padding: 0,
      margin: 0,
    },
    link: {
      color: "black",
      textDecoration: "none",
    },
    authLink: {
      color: "#218677ff",
      textDecoration: "none",
    },
  } as const;

  return (
    <nav style={styles.navbar}>
      {/* Logo always visible */}
      <Link to="/" style={{ ...styles.logo }}>
        <span style={{ color: "#000000ff" }}>Psy</span>
        <span style={{ color: "#218677ff" }}>Track</span>
      </Link>

      <ul style={styles.links}>
        {/* Show when NOT signed in */}
        <SignedOut>
          <li>
            <Link
              to="/sign-in"
              style={styles.authLink}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              style={styles.authLink}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Sign Up
            </Link>
          </li>
        </SignedOut>

        {/* Show when signed in */}
        <SignedIn>
          <li>
            <Link
              to="/Resources"
              style={styles.link}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/stroopTask"
              style={styles.link}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Stroop Task
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard"
              style={styles.link}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Dashboard
            </Link>
          </li>
          <li>
            {/* Clerk’s built-in profile + sign out button */}
            <UserButton afterSignOutUrl="/" />
          </li>
        </SignedIn>
      </ul>
    </nav>
  );
};

export default Navbar;
