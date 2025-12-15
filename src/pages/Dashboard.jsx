import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [history, setHistory] = useState([]);    
     useEffect(() => {
  const userId = localStorage.getItem("userId"); 
  const historyKey = `symptomHistory_${userId}`;  

  const storedHistory =
    JSON.parse(localStorage.getItem(historyKey)) || [];
  setHistory(storedHistory);
}, []);

  return (
    <div className="dash-page">
      <div className="dash-card">
        <div className="user-summary">
          <h2>Welcome, {user?.name}</h2>
          <p>{user?.email}</p>
          <p>Total Checks: <strong>{history.length}</strong></p>
        </div>
        <h3>Symptom History</h3>

        {history.length === 0 ? (
          <p>No history available</p>
        ) : (
          history.map((item, index) => (
            <div className="history-card" key={index}>
              <p><strong>Date:</strong> {item.date}</p>
              <p>
                <strong>Symptoms:</strong>{" "}
                {item.symptoms.join(", ")}
              </p>

              <ResultCard result={item.result} />
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Dashboard;
