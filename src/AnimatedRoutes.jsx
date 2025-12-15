import { Routes, Route, useLocation } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import SymptomsPage from "./pages/SymptomsPage";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ResultPage from "./pages/ResultPage";
import ProtectedRoute from "./components/ProtectedRoute";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
      <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
      <Route path="/register" element={<PageTransition><RegisterPage /></PageTransition>} />
      <Route path="/symptoms" element={<ProtectedRoute><SymptomsPage /></ProtectedRoute>} />
       <Route path="/result" element={<ResultPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PageTransition><Dashboard /></PageTransition>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <PageTransition><Profile /></PageTransition>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
    </Routes>
  );
}

export default AnimatedRoutes;
