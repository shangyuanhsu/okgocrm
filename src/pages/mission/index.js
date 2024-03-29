import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";
import { useSelector } from "react-redux";
import { useState } from "react";
// =========================================
const Mission = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  return (
    <>
      <Head>
        <title>okgo | mission</title>
        <meta name="description" content="okgo crm" />
        <meta name="author" content="shangyuan" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="allSection">
        <div className={isHamOpen ? "ham" : ""}>
          <Header />
          <Footer />
        </div>
        <main>
        <Hamburger />
          <h2>mission</h2>
        </main>
      </div>
    </>
  );
};
export default Mission;
