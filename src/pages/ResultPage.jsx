import ResultCard from "../components/ResultCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ResultPage.css";

const EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes

function ResultPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("latestResult");

    if (!stored) {
      navigate("/symptoms", { replace: true });
      return;
    }

    const { data, timestamp } = JSON.parse(stored);

    if (Date.now() - timestamp > EXPIRY_TIME) {
      localStorage.removeItem("latestResult");
      navigate("/symptoms", { replace: true });
      return;
    }

    setResult(data);
  }, [navigate]);

  if (!result) return null;

  return (
    <div className="result-page">
      <h1>Your Prediction Result</h1>
      <p>Disease: {result.disease}</p>
      <p>Specialization: {result.specialization}</p>

      <h2>Recommended Doctors</h2>
      {result.doctors?.length > 0 ? (
        <div className="doctor-grid">
          {result.doctors.map((doctor) => (
            <ResultCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p>No doctors found for this specialization.</p>
      )}
    </div>
  );
}

export default ResultPage;
