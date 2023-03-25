// import { useContext, useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <Link href="/">OKGO CRM</Link>
      </h1>
      <div>
        <p>Sara</p>
        <div>
          <Link href="/Setting">
           <SettingsIcon />
          </Link>
          <Link href="/login">
            <LogoutIcon />
          </Link>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
