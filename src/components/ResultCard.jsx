import { motion } from "framer-motion";
import "./ResultCard.css";

function ResultCard({ doctor }) {
  if (!doctor) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="result-card"
    >
      <p><strong>Name:</strong> {doctor.doctorName}</p>
      <p><strong>Hospital:</strong> {doctor.hospitalName}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>
      <p><strong>Rating:</strong> {doctor.rating}</p>   
      <p><strong>Location:</strong> {doctor.location}</p>
      <p><strong>Phone:</strong> {doctor.phoneNo}</p>
    </motion.div>
  );
}

export default ResultCard;
