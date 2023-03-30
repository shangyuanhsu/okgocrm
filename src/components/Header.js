import styles from "../styles/Header.module.css";
import React, { useEffect } from "react";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import {
  handleHam,
  handleColseHam,
} from "../features/hamburger/hamburgerSlice";
import NavBar from "./NavBar";
// =========================================
const Header = () => {
  const dispatch = useDispatch();
  const handleHamburger = () => {
    dispatch(handleHam());
  };
  const handleResize = () => {
    dispatch(handleColseHam());
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
      <NavBar handleHamburger={handleHamburger} />
    </header>
  );
};

export default Header;
