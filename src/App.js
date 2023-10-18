import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SideLayout from "./Components/sideNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
