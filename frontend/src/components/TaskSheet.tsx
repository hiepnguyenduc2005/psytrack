import React from "react";

interface StroopSession {
  startTime: number;
  endTime: number | null;
  numTrialsRequested: number;
  numTrialsCompleted: number;
  numTrialsCorrect: number;
  status: string;
}

interface TaskSheetProps {
  stroopSessions: StroopSession[];
}

const TaskSheet: React.FC<TaskSheetProps> = ({ stroopSessions }) => {
  // Map sessions to displayable data
  const tasks = stroopSessions.map((session) => {
    const date = session.endTime
      ? new Date(session.endTime).toISOString().split("T")[0]
      : new Date(session.startTime).toISOString().split("T")[0];
    
    const percentage = session.numTrialsRequested
      ? Math.round((session.numTrialsCorrect / session.numTrialsRequested) * 100)
      : 0;

    return {
      date,
      taskName: "Stroop Task",
      totalQuestions: session.numTrialsRequested,
      percentage,
    };
  });

  tasks.reverse();

  return (
    <div style={{ margin: "20px" }}>
      <h2>User Task Records</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Task Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Total Questions</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                {task.date}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{task.taskName}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                {task.totalQuestions}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                {task.percentage}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskSheet;
