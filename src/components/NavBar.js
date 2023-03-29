import styles from "../styles/NavBar.module.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
// =========================================
const NavBar = (props) => {
  const router = useRouter();
  // 選單
  const nav = [
    { name: "Home", url: "/" },
    { name: "Member", url: "/member" },
    { name: "Rewards Redemption", url: "/rewardsRedemption" },
    { name: "Point Registration", url: "/pointRegistration" },
    { name: "Mission", url: "/mission" },
    { name: "VIP Room Use Recode", url: "/viproomuseRecord" },
  ];

  const goPage = (url) => {
    if (window.innerWidth < 1150) {
      props.handleHamburger();
    }
    router.push(url);
  };
  return (
    <nav className={styles.NavBar}>
      {nav.map((item, index) => (
        <Link
          className={
            "/" + router.pathname.split("/")[1] === item.url ? styles.check : ""
          }
          href=""
          key={index}
          onClick={(e) => {
            e.preventDefault();
            goPage(item.url);
          }}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
