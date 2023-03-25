import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
// =========================================
const Home = ()=> {
  return (
    <>
      <Head>
        <title>okgo</title>
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
          <h2>Home</h2>
        </main>
      </div>
    </>
  );
}
export default  Home;