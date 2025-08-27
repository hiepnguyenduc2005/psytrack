import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

const StroopInfo: React.FC = () =>{
  const styles = {
    title:{
      fontSize: "3rem",
      fontWeight: 500,
      padding: '8rem 3rem 0rem',
      marginBottom: '0rem',
      color: '#000000ff',
      textAlign: 'left',
    },
    subtitle: {
      fontSize: "2rem",
      fontWeight: 300,
      padding: '2rem 3rem 0rem',
      marginBottom: '1rem',
      color: '#218677ff',
      textAlign: 'left',
    },
    text: {
      fontSize: "1rem",
      fontWeight: 300,
      padding: '0rem 3rem 0rem',
      color: '#545454ff',
      textAlign: 'left',
      marginTop: '0rem',
    },
    listHeader: {
      fontSize: "2rem",
      fontWeight: 400,
      padding: '3rem 3rem 0rem',
      marginBottom: '0rem',
      color: '#545454ff',
      textAlign: 'left',
    },
    listText: {
      fontSize: "1rem",
      fontWeight: 300,
      padding: '0rem 1rem 0rem',
      color: '#218677ff',
      textDecoration: 'underline',
      textAlign: 'left',
    },
    bulletList: {
      textAlign: 'left',
      padding: '0rem 5rem 0rem',
    }

  } as const;

  return (
    <div>
      <Navbar />

      <h3 style={styles.title}>Stroop Task</h3>
      <p style={styles.text}>
        Test your brain’s focus by naming ink colours while ignoring tricky words!
      </p>

      <nav>
        <h1 style={styles.listHeader}>Table of Contents</h1>
        <ul style={styles.bulletList}>
          <li><a href='#introduction' style={styles.listText}>Introduction</a></li>
          <li><a href='#history' style={styles.listText}>History of the Stroop Task</a></li>
          <li><a href='#methods' style={styles.listText}>Task Methods</a></li>
          <li><a href='#findings' style={styles.listText}>Experiment Findings</a></li>
          <li><a href='#taskDemo' style={styles.listText}>Task Demo</a></li>
        </ul>
      </nav>


      <div id="introduction">
        <h3 style={styles.subtitle}>Introduction</h3>
        <p style={styles.text}>
          The Stroop Task is a well-known psychology experiment designed by John Stroop that looks at how our brain's ability to 
          inhibit cognitive interference. In the task, you will see the word “red” written in blue ink and be asked to say the ink 
          colour, not the word itself. Because reading is such an automatic process, it often trips people up and slows down their response. 
          Researchers use this task to better understand attention, focus, and how we deal with interference.
        </p>
      </div>

      <div id="history">
        <h3 style={styles.subtitle}>History of the Stroop Task</h3>
        <p style={styles.text}>
          The Stroop Task was originally introduced by John Ridley Stroop in 1935 in his paper 
          “Studies of Interferences in Serial Verbal Reactions". He demonstrated that people take longer to name the ink colour of 
          a word when the word itself spells a different colour (for example, the word “red” written in blue ink)—a phenomenon now 
          called the Stroop Effect. The Stroop task was originally designed to assess cognitive interference skills in patients 
          with ventromedial prefrontal cortex damage. Since its development, the role of the Stroop task has been expanded and 
          applied to study many aspects of cognitive function across various domains and applications. For example, new versions 
          like the emotional Stroop have been developed that uses emotionally charged words. More recent versions of this study 
          also introduced a third type of stimulus: the neutral condition, further expanding its use in research and clinical settings.
        </p>
      </div>

      <div id="methods">
        <h3 style={styles.subtitle}>Task Methods</h3>
        <p style={styles.text}>
          In this experiment, users are given words with a different colour. The user is asked to name the colour of the word, not the word itself. 

        </p>
      </div>

      <div id="findings">
        <h3 style={styles.subtitle}>Experiment Findings</h3>
        <p style={styles.text}>
          In the Stroop Task, stimuli generally fall into three categories: neutral, congruent, and incongruent. Neutral stimuli show 
          just the text or just the colour, without any conflict. Congruent stimuli match the word and the ink colour (like “yellow” 
          written in yellow), while incongruent stimuli have mismatched word and colour (like “red” written in blue). Experiments 
          consistently reveal three main effects. First, semantic interference: people are slower at naming the ink colour in incongruent 
          conditions compared to neutral ones because the word’s meaning gets in the way. Second, semantic facilitation: 
          naming the colour is faster in congruent conditions than with neutral stimuli, since the word helps rather than hinders. 
          Third, these effects largely vanish when the task is reading the word instead of naming the colour, a phenomenon sometimes 
          called Stroop asynchrony, likely because reading is more automatic than naming colours.

        </p>
      </div>

      <div id="taskDemo">
        <h3 style={styles.subtitle}>Task Demo</h3>
        <p style={styles.text}>
          <Link to="/stroopTask" style={{ color: "#218677ff", textDecoration: "underline"}}>
            click here
          </Link>
          &nbsp; 
          to run our Stroop Task experiment!
        </p>
      </div>



    </div>

  );
};
export default StroopInfo;