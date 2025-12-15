import { motion } from "framer-motion";
import "./DoctorList.css";

function DoctorList({ hospitals }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="doctor-section"
    >
      <h2 className="doctor-title">Nearby Doctors & Hospitals</h2>

      <div className="doctor-list">
        {hospitals.map((item) => (
          <div key={item._id} className="doctor-card">

            <h3 className="doc-name">👨‍⚕️ {item.doctorName}</h3>

            <p className="specialization">
              <strong>Specialization:</strong> {item.specialization}
            </p>

            <p className="experience">
              <strong>Experience:</strong> {item.experience} years
            </p>

            <p className="rating">
              <strong>Rating:</strong> ⭐ {item.rating}
            </p>

            <p className="hospital-name">
              <strong>Hospital:</strong> {item.hospitalName}
            </p>

            <p className="location">
              <strong>Location:</strong> {item.location}
            </p>

            {item.phoneNo && (
              <p className="phone">📞 {item.phoneNo}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default DoctorList;