import React from "react";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/countrydetails" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
