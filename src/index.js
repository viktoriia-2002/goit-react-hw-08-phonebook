import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </Router>
);
