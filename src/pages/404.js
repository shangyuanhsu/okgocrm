import styles from "../styles/Error.module.css";
import Link from "next/link";
import Head from "next/head";
// =========================================
const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>okgo | error</title>
        <meta name="description" content="okgo crm" />
        <meta name="author" content="shangyuan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.errorPage}>
        <h1>Oops!</h1>
        <h2>That page cannot found.</h2>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
