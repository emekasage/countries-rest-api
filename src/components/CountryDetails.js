import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "./Url";

function CountryDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const goBackBtn = () => navigate("/");

  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const fetchCountryData = async () => {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    const country = await response.json();
    setCountry(country);
    console.log(country);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-white overflow-x-hidden">
        <div className="container mx-auto px-10 mb-16">
          <button
            className="px-8 py-2.5 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
            onClick={() => goBackBtn()}
          >
            <ion-icon name="arrow-back-outline"></ion-icon> Back
          </button>
        </div>
        <div className="container flex mx-auto p-8 pl-0 or-0">
          {country.map((c) => {
            const {
              numericCode,
              flag,
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders,
            } = c;

            return <article key={numericCode}></article>;
          })}
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
