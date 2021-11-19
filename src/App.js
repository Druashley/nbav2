import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import HomePage from "./components/home/HomePage";

function App() {
  const [searchedPlayerList, setSearchedPlayerList] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Nav
        setSearchedPlayerList={setSearchedPlayerList}
        search={search}
        setSearch={setSearch}
      />
      <HomePage
        searchedPlayerList={searchedPlayerList}
        setSearchedPlayerList={setSearchedPlayerList}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
