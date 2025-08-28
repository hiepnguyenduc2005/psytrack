import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/NavBar";
import DashControl from "../components/DashControl";
import Calendar from "../components/DashCalendar";
import Footer from "../components/Footer";
import TaskSheet from "../components/TaskSheet";
import apiCall from '../utils/apiCall'

type StroopSession = {
  _id: string;
  participantId: string;
  startTime: number;
  endTime: number;
  numTrialsRequested: number;
  numTrialsCompleted: number;
  status: string;
};

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [stroopSessions, setSessions] = useState<StroopSession[]>([]);

  useEffect(() => {
    if (!user) return;
    apiCall<StroopSession[]>(`/api/stroop/results_users/${user.id}`)
      .then((data) => setSessions(data))
      .catch((err) => console.error("Error fetching sessions:", err));
  }, [user]);

  return (
    <div>
      <Navbar />
      <div><DashControl /></div>

      <div style={{ display: "flex", padding: 20 }}>
        <div style={{ marginRight: 20, flex: "0 0 300px" }}>
          <Calendar stroopSessions={stroopSessions} />
        </div>
        <div style={{ flex: 1 }}>
          <TaskSheet stroopSessions={stroopSessions} />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
