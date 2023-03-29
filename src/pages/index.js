import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hamburger from "../components/Hamburger";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleLoading } from "../features/allSet/allSet";
// =========================================
const Home = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleLoading(true));
    setTimeout(() => {
      dispatch(handleLoading(false));
    }, 1500);
  }, []);
  return (
    <>
      <Head>
        <title>okgo</title>
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
          <h2>Home</h2>
        </main>
      </div>
    </>
  );
};
export default Home;
