import React from 'react';
import Navbar from "../components/NavBar";
import DashControl from "../components/DashControl";
import Calendar from "../components/DashCalendar";
import Footer from "../components/Footer";

const Dashboard: React.FC = () => {
  const styles = {
    dashboard: {
      width: "100%",

    },
    header: {
      fontSize: '3rem',
      fontWeight: 'bold',
      left: 0,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'flex-start',
      padding: 20,
      boxSizing: 'border-box',
    },
    calendarWrapper: {
      flex: '0 0 300px', 
      marginRight: 20,
      padding: "0rem 3rem",
    },
    graphWrapper: {
      flex: '1 1 auto', 
    },
  } as const;

  return (
    <div>
      <Navbar/>
      <div><DashControl /></div>

      <div style={styles.container}>

        <div style={styles.calendarWrapper}><Calendar /></div>
        <div style={styles.graphWrapper}>graph goes here</div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;