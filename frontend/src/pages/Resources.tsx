import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import stroopTitle from "../assets/stroopTitle.jpg";


const Resources: React.FC = () => {
  const styles = {
    header:{
      fontSize: "2rem",
      fontWeight: 500,
      padding: '9rem 3rem 5rem',
    },
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: '3.3rem',
      padding: '0rem 3rem 3rem',
    },
    cards: {
      boxShadow: "0 2px 6px #00000033",
      borderRadius: "1rem",
      width: '330px',
      overflow: "hidden",
    },
    cardHeader: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: 'black',
      margin: 20,
      marginBottom: 0,
      marginTop: 10,
      textAlign: "left",
    },
    cardDesc: {
      fontSize: "0.95rem",
      fontWeight: 400,
      color: 'grey',
      marginTop: 8,
      margin: 20,
      textAlign: "left",
    },
    cardImage: {
      width: "310px",
      margin: 10,
      borderRadius: "1rem",
    }

  } as const;

  return (
    <div>
      <Navbar/>

      <h2 style={styles.header}> What would you like to explore today?</h2>

      <div style={styles.cardContainer}>
        <Link
          to="/stroopTask"
          style={styles.cards}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={stroopTitle}
            alt="Stroop Task"
            style={styles.cardImage}
          />
          <h3 style={styles.cardHeader}>Stroop Task</h3>
          <p style={styles.cardDesc}>
            The Stroop phenomenon demonstrates that it is difficult to name the ink color of a color word if 
            there is a mismatch between ink color and word. 
          </p>
        </Link>

        <Link
          to="/stroopTask"
          style={styles.cards}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={stroopTitle}
            alt="Stroop Task"
            style={styles.cardImage}
          />
          <h3 style={styles.cardHeader}>N-Back Task</h3>
          <p style={styles.cardDesc}>
            In the N-Back task, participants are presented a sequence of stimuli one-by-one. For each stimulus, 
            they need to decide if the current stimulus is the same as the one presented N trials ago.
          </p>
        </Link>

        <Link
          to="/stroopTask"
          style={styles.cards}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={stroopTitle}
            alt="Stroop Task"
            style={styles.cardImage}
          />
          <h3 style={styles.cardHeader}>Dot-Probe Task</h3>
          <p style={styles.cardDesc}>
            The Dot-Probe Task measures how much faster people respond to threatening stimuli compared to neutral stimuli.
          </p>
        </Link>

        <Link
          to="/stroopTask"
          style={styles.cards}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={stroopTitle}
            alt="Stroop Task"
            style={styles.cardImage}
          />
          <h3 style={styles.cardHeader}>Lexical Decision Task</h3>
          <p style={styles.cardDesc}>
            In a Lexical Decision Task (LDT), a participant needs to make a decision about whether combinations of letters 
            are words or not. For example, when you see the letters "XLFFE" you respond "No, this is not a real English word".
          </p>
        </Link>

        <Link
          to="/stroopTask"
          style={styles.cards}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <img
            src={stroopTitle}
            alt="Stroop Task"
            style={styles.cardImage}
          />
          <h3 style={styles.cardHeader}>Stop Signal Task</h3>
          <p style={styles.cardDesc}>
            In a Stop Signal Task, you are asked to respond quickly, except when a stop signal arrives.
            Once you have initiated a movement, even when just "in the brain" as a plan, it is hard to stop.
          </p>
        </Link>

        


      </div>

    </div>
  );
};
export default Resources;