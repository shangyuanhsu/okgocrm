import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h3>Oops</h3>
      <div>
        <p>The page you’re looking for doesn’t exist.</p>
        <Link to="/">go back home</Link>
      </div>
    </div>
  );
};

export default NotFound;
