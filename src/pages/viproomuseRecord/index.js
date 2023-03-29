import { useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";
import { useSelector } from "react-redux";
// =========================================
const viproomuseRecord = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  return (
    <>
      <Head>
        <title>okgo | vip room use Record</title>
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
          <h2>viproomuseRecord</h2>
        </main>
      </div>
    </>
  );
};
export default viproomuseRecord;
