import styles from "../styles/NavBar.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  const nav = [
    { name: "Home", url: "/" },
    { name: "Member", url: "/member" },
    // { name: "Rewards Redemption", url: "/RewardsRedemption" },
    // { name: "Point Registration", url: "/PointRegistration" },
    // { name: "Mission", url: "/Mission" },
    // { name: "VIP Room Use Recode", url: "/viproomuserecord" },
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
