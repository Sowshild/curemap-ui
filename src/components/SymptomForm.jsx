import { motion } from "framer-motion";
import "./SymptomForm.css";

function SymptomForm({ symptoms, setSymptoms, loading, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        className="textarea"
        rows={4}
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        required
      />

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="button"
      >
        {loading ? "Analyzing..." : "Check Symptoms"}
      </motion.button>
    </form>
  );
}

export default SymptomForm;
