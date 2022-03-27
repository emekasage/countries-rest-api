import React from "react";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
