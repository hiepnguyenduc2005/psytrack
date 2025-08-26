import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

const StroopInfo: React.FC = () =>{
  const styles = {
    header:{
      fontSize: "3rem",
      fontWeight: 500,
      padding: '5rem 0rem 0rem',
      color: 'black',
    },
    subtitle: {
      fontSize: "2rem",
      fontWeight: 300,
      padding: '0rem 0rem 0rem',
      color: '#218677ff',
    },
    text: {
      fontSize: "1rem",
      fontWeight: 300,
      padding: '0rem 0rem 0rem',
      color: '#545454ff',
    },
    listHeader: {
      fontSize: "2rem",
      fontWeight: 500,
      padding: '0rem 0rem 0rem',
      color: '#545454ff',
    },
    listText: {
      fontSize: "1rem",
      fontWeight: 300,
      padding: '0rem 0rem 0rem',
      color: '#218677ff',
    },

  } as const;

  return (
    <div>
      <Navbar />

      <h2 style={styles.header}>Stroop Task</h2>

      <nav>
        <h3 style={styles.listHeader}>Table of Contents</h3>
        <ul>
          <li><a href='#introduction' style={styles.listText}>Introduction</a></li>
          <li><a href='#history' style={styles.listText}>History of the Stroop Task</a></li>
          <li><a href='#methods' style={styles.listText}>Task Methods</a></li>
          <li><a href='#findings' style={styles.listText}>Experiment Findings</a></li>
          <li><a href='#taskDemo' style={styles.listText}>Task Demo</a></li>
        </ul>
      </nav>


      <div id="introduction">
        <h3 style={styles.subtitle}>Introduction</h3>
        <p style={styles.text}>Welcome to PsyTrack...</p>
      </div>

      <div id="history">
        <h3 style={styles.subtitle}>History of the Stroop Task</h3>
        <p style={styles.text}>...</p>
      </div>

      <div id="methods">
        <h3 style={styles.subtitle}>Task Methods</h3>
        <p style={styles.text}>...</p>
      </div>

      <div id="findings">
        <h3 style={styles.subtitle}>Experiment Findings</h3>
        <p style={styles.text}>...</p>
      </div>

      <div id="taskDemo">
        <h3 style={styles.subtitle}>Task Demo</h3>
        <p style={styles.text}>...</p>
      </div>






    </div>

  );
};
export default StroopInfo;