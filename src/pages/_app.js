import "../styles/globals.css";
import Layuot from "../components/Layout";
import { store } from "../store";
import { Provider } from "react-redux";
import Loading from "../components/Loading";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layuot>
        <Component {...pageProps} />
        <Loading />
      </Layuot>
    </Provider>
  );
}

export default MyApp;
