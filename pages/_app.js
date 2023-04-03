import "@/styles/index.css";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function Layout({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
