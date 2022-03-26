import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v2/all";

function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      {countries.map((country) => {
        const { numericCode, name, population, region, capital, flag } =
          country;

        return (
          <article key={numericCode}>
            <div>
              <img src={flag} alt={name} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Countries;
