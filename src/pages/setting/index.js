import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../../features/counter/counterSlice";
// =========================================
const setting = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>okgo | setting</title>
        <meta name="description" content="okgo crm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="allSection">
        <div>
          <Header />
          <Footer />
        </div>
        <main>
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
