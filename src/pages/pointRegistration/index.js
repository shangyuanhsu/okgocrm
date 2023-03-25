import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";

const PointRegistration = ()=> {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.allSection}>
        <div>
          <Header />
          <Footer />
        </div>
        <main>
          <h2>PointRegistration</h2>
        </main>
      </div>
    </>
  );
}
export default  PointRegistration;
