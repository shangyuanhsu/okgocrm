import styles from "../styles/Header.module.css";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { handleHam } from "../features/hamburger/hamburgerSlice";
import NavBar from "./NavBar";
// =========================================
const Header = () => {
  const dispatch = useDispatch();
  const handleHamburger = () => {
    dispatch(handleHam());
  };
  return (
    <header className={styles.Header}>
      <h1>
        <Link href="/" onClick={handleHamburger}>
          OKGO CRM
        </Link>
      </h1>
      <div>
        <p>Sara</p>
        <div>
          <Link href="/setting" onClick={handleHamburger}>
            <SettingsIcon />
          </Link>
          <Link href="/login" onClick={handleHamburger}>
            <LogoutIcon />
          </Link>
        </div>
      </div>
      <NavBar handleHamburger={handleHamburger}/>
    </header>
  );
};

export default Header;
