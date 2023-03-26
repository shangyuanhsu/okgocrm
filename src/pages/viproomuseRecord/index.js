import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// =========================================
const viproomuseRecord = ()=> {
  return (
    <>
      <Head>
        <title>okgo | vip room use Record</title>
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
          <h2>viproomuseRecord</h2>
        </main>
      </div>
    </>
  );
}
export default  viproomuseRecord;
