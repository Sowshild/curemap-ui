import "./NotFound.css";

function NotFound() {
  return (
    <div className="nf-page">
      <div className="nf-card">
        <h1 className="nf-title">404</h1>
        <p className="nf-text">Oops! The page you're looking for doesn’t exist.</p>
        <a href="/" className="nf-btn">Back to Home</a>
      </div>
    </div>
  );
}

export default NotFound;
