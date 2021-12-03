import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import HomePage from "./components/home/HomePage";
import InfoPage from "./components/info/InfoPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
