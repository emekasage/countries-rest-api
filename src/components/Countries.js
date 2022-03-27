import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "./Url";

function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch(`${BASE_URL}all`);
    const countries = await response.json();
    setCountries(countries);
    // console.log(countries);
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    const response = await fetch(`${BASE_URL}name/${term}`);
    const data = await response.json();
    await setCountries(data);
  };

  const filterByRegion = async (region) => {
    if (region === "") return;
    const response = await fetch(`${BASE_URL}region/${region}`);
    const data = await response.json();
    await setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-white overflow-x-hidden">
        {/* Search and Filter Functionality */}
        <div className="flex flex-col md:flex-row container mx-auto mb-16 px-10">
          <div className="my-auto z-10 absolute left-14 mt-3 md:mt-4">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <input
            type="text"
            placeholder="Search for a country..."
            className="pl-10 p-2.5 shadow-md rounded-md md:w-1/3 dark:bg-gray-700 relative"
            onChange={(term) => searchCountry(term.target.value)}
          />
          <select
            className="mr-auto ml-0 md:ml-auto md:mr-0 mt-6 md:mt-0 my-2 p-2.5 shadow-md rounded-md font-medium dark:bg-gray-700"
            onChange={(val) => filterByRegion(val.target.value)}
          >
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        {/* End of search and Filter Functionality */}

        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-16 mx-auto px-10">
          {countries.map((country) => {
            const { numericCode, name, population, region, capital, flag } =
              country;

            return (
              <article
                key={numericCode}
                className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white"
              >
                <Link to={`/country/${name}`}>
                  <div>
                    <img
                      src={flag}
                      alt={name}
                      className="h-1/2 rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{name}</h3>
                      <h4 className="text-sm font-semibold">
                        Population:{" "}
                        <span className="text-gray-700 dark:text-gray-300 font-normal">
                          {population}
                        </span>
                      </h4>
                      <h4 className="text-sm font-semibold">
                        Region:{" "}
                        <span className="text-gray-700 dark:text-gray-300 font-normal">
                          {region}
                        </span>
                      </h4>
                      <h4 className="text-sm font-semibold">
                        Capital:{" "}
                        <span className="text-gray-700 dark:text-gray-300 font-normal">
                          {capital}
                        </span>
                      </h4>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Countries;
