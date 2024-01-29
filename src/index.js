import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import Store from "./Store/Store.js";

// let persistor = persistStore(Store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={Store}>
    <React.StrictMode>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </React.StrictMode>
  // </Provider>
);
