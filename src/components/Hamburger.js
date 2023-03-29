import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { handleHam } from "../features/hamburger/hamburgerSlice";
// =========================================
const Hamburger = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  const dispatch = useDispatch();
  const handleHamburger = () => {
    dispatch(handleHam());
  };

  return (
    <>
      <div className={`hamburger ${isHamOpen ? "closeHamburger" : ""}`}>
        <h1>
          <Link href="/">OKGO CRM</Link>
        </h1>
        <div onClick={handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
