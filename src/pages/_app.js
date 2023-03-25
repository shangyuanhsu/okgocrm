import "../styles/globals.css";
import Layuot from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layuot>
      <Component {...pageProps} />
    </Layuot>
  );
}

export default MyApp;
