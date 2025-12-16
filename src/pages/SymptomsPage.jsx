import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SymptomForm from "../components/SymptomForm";
import "./SymptomsPage.css";

function SymptomsPage() {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  localStorage.removeItem("latestResult");
}, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     
    try {
      const token = localStorage.getItem("authToken");

      const symptomsArray = symptoms
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const res = await fetch("https://curemap-api.onrender.com/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ symptoms: symptomsArray }),
      });

      const data = await res.json();

      if (res.ok) {
      localStorage.setItem(
            "latestResult",
           JSON.stringify({
             data: data,
              timestamp: Date.now(),
            })
             );
      const userId = localStorage.getItem("userId"); // get logged-in user
      const historyKey = `symptomHistory_${userId}`;

const newEntry = {
  date: new Date().toLocaleString(),
  symptoms: symptomsArray,
  result: data,
};


const oldHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
 localStorage.setItem(historyKey, JSON.stringify([newEntry, ...oldHistory]));
        navigate("/result");
      } else {
        alert(data.message || "Error in prediction");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="symptoms-page">
      <div className="symptoms-card">
        <h1 className="symptoms-title">Check Your Symptoms</h1>

        <SymptomForm
          symptoms={symptoms}
          setSymptoms={setSymptoms}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default SymptomsPage
