import { motion } from "framer-motion";
import "./HospitalList.css";

function HospitalList({ hospitals }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hospital-section"
    >
      <h2 className="hospital-title">Nearby Hospitals</h2>

      <div className="hospital-list">
        {hospitals.map((h) => (
          <div key={h._id} className="hospital-card">
            <h3>{h.name}</h3>
            <p>{h.address}</p>
            <p className="phone">📞 {h.phone}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default HospitalList;
