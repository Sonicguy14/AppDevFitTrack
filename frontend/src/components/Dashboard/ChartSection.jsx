import { useEffect, useState } from "react";
import "./Section.css";

const ChartSection = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const workout = JSON.parse(localStorage.getItem("fittrack_workout")) || [];
    const weight = JSON.parse(localStorage.getItem("fittrack_weight")) || [];
    const goal = JSON.parse(localStorage.getItem("fittrack_goal")) || [];

    const summary = [
      `🏋️ Total Workouts: ${workout.length}`,
      `⚖️ Latest Weight: ${
        weight.length ? weight[weight.length - 1].weight + " kg" : "N/A"
      }`,
      `🎯 Active Goals: ${goal.length}`,
    ];

    setProgress(summary);
  }, []);

  return (
    <div className="dashboard-section">
      <h2 className="section-title">📊 Weekly Summary</h2>
      <ul>
        {progress.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChartSection;
