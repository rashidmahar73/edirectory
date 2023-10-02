import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Store from "./Store/Store.js";
import { SingleMovieDetail } from "./Components/SingleMovieDetail";
import { GenreIds } from "./Components/movies";
import { MoviesData } from "./MoviesData";
import {Login} from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {path:"/login",
element:<Login/>,
},{
path:"/dashboard",
element:<Dashboard/>,
},
  {
    path: "/GenreIds",
    element: <GenreIds />,
  },
  {
    path: "/Movies-data",
    element: <MoviesData />,
  },
  {
    path: "/SingleMovieDetail",
    element: <SingleMovieDetail />,
  },
]);
let persistor = persistStore(Store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
