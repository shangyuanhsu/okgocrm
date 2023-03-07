import "./Header.css";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <a href="./">OKGO CRM</a>
      </h1>
      <div>
        <p>Sara</p>
        <div>
          <a>
            <span className="material-symbols-outlined">settings</span>
          </a>
          <a href="./login">
            <span className="material-symbols-outlined">logout</span>
          </a>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
