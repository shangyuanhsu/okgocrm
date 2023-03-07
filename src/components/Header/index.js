import "./Header.css";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="Header">
      <h1>
        <Link to="/">OKGO CRM</Link>
      </h1>
      <div>
        <p>Sara</p>
        <div>
          <Link>
            <span className="material-symbols-outlined">settings</span>
          </Link>
          <Link to="/login">
            <span className="material-symbols-outlined">logout</span>
          </Link>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
