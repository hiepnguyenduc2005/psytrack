import React from "react";

interface TaskEntry {
  date: string;
  taskName: string;
  totalQuestions: number;
  percentage: number;
}

const mockTasks: TaskEntry[] = [
  { date: "2025-08-02", taskName: "Stroop Task", totalQuestions: 12, percentage: 85 },
  { date: "2025-08-08", taskName: "Stroop Task", totalQuestions: 15, percentage: 67 },
  { date: "2025-08-08", taskName: "N-Back Task", totalQuestions: 18, percentage: 91 },
  { date: "2025-08-08", taskName: "Memory Task", totalQuestions: 20, percentage: 88 },
  { date: "2025-08-11", taskName: "Memory Task", totalQuestions: 25, percentage: 83 },
  { date: "2025-08-23", taskName: "N-Back Task", totalQuestions: 18, percentage: 75 },
  { date: "2025-08-23", taskName: "Stroop Task", totalQuestions: 12, percentage: 89 },
  { date: "2025-08-27", taskName: "Memory Task", totalQuestions: 20, percentage: 92 },
  { date: "2025-08-31", taskName: "Stroop Task", totalQuestions: 10, percentage: 90 },
];

const TaskSheet: React.FC = () => {
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
          {mockTasks.map((task, index) => (
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
