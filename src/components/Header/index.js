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
        <span class="material-symbols-outlined">logout</span>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
