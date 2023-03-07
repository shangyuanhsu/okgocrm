import "./NavBar.css";
import {  Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">HOME</Link>
      <Link to="/member">MEMBER</Link>
      <Link to="/viproomuserecord">VIP ROOM USE RECORD</Link>
      <Link to="/viproomuserecord">TEST SHOW</Link>
      <Link to="/viproomuserecord">TEST SHOW</Link>
      <Link to="/viproomuserecord">TEST SHOW</Link>
    </nav>
  );
};

export default NavBar;
