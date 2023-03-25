import styles from "../styles/NavBar.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  const nav = [
    { name: "Home", url: "/" },
    { name: "Member", url: "/member" },
    { name: "Rewards Redemption", url: "/rewardsRedemption" },
    { name: "Point Registration", url: "/pointRegistration" },
    { name: "Mission", url: "/mission" },
    { name: "VIP Room Use Recode", url: "/viproomuseRecord" },
  ];

  return (
    <nav className={styles.NavBar}>
      {nav.map((item, index) => (
        <Link
          className={router.pathname === item.url ? styles.check : ""}
          href={item.url}
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
