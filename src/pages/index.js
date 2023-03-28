import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
// =========================================
const Home = () => {
  // const count = useSelector((state) => state.counter.value);
  return (
    <>
      <Head>
        <title>okgo</title>
        <meta name="description" content="okgo crm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="allSection">
        <div className="ham">
          <Header />
          <Footer />
        </div>

        <main>
          <h2>Home</h2>
          {/* {count} */}
        </main>
      </div>
    </>
  );
};
export default Home;
