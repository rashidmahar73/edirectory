import "./App.css";
import React from "react";

import SideLayout from "./Components/sideNav";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideLayout />
    </BrowserRouter>
  );
}

export default App;
