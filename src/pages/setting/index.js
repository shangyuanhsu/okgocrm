import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hamburger from "../../components/Hamburger";
import { useState } from "react";
import { useSelector } from "react-redux";
// =========================================
const setting = () => {
  const isHamOpen = useSelector((state) => state.hamburger.value);
  return (
    <>
      <Head>
        <title>okgo | setting</title>
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
          <h2>setting</h2>
          <div>
            {/* <div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div> */}
          </div>
        </main>
      </div>
    </>
  );
};
export default setting;
