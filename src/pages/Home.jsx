import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="page home-page">
      <div className="card home-card">
        <h1 className="home-title">Welcome to CureMap</h1>

        <p className="home-subtitle">Symptom checker & hospital navigator.</p>

        <p className="home-desc">
          CureMap helps you understand your symptoms, assess risk levels, and 
          find the nearest hospitals instantly. Login or create an account to 
          start checking your symptoms.
        </p>

        <div className="home-buttons">
          <Link to="/login" className="home-btn primary">Login</Link>
          <Link to="/register" className="home-btn secondary">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
