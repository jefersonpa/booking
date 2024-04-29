import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store.ts";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
