import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./AnimatedRoutes";   
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />   {/* All routing happens inside this */}
    </Router>
  );
}

export default App;
