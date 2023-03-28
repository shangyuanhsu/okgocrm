import "../styles/globals.css";
import Layuot from "../components/Layout";
import { store } from "./store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layuot>
        <Component {...pageProps} />
      </Layuot>
    </Provider>
  );
}

export default MyApp;
