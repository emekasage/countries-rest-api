import React, { useState, useEffect } from "react";

const BASE_URL = `https://restcountries.com/v2/`;

function Countries() {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<ion-icon name="sunny-outline"></ion-icon> Light Mode'
  );

  const fetchCountryData = async () => {
    const response = await fetch(`${BASE_URL}all`);
    const countries = await response.json();
    setCountries(countries);
    // console.log(countries);
  };

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<ion-icon name="moon-outline"></ion-icon> Dark Mode');
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<ion-icon name="sunny-outline"></ion-icon> Light Mode');
      setMode((current) => (current = !current));
    }
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
    fetchCountryData();
  }, []);
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
        {/* Header Section */}
        <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
          <div className="flex container mx-auto">
            <h1 className="font-bold text-xl">Where in the world?</h1>
            <div className="ml-auto font-medium">
              <button
                onClick={() => toggleDarkMode()}
                dangerouslySetInnerHTML={{ __html: toggleBtn }}
              ></button>
            </div>
          </div>
        </div>
        {/* End of Header Section */}

        {/* Search and Filter Functionality */}
        <div className="flex container mx-auto mb-16">
          <div className="my-auto z-10 absolute left-3 mt-5">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <input
            type="text"
            placeholder="search for a country..."
            className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700 relative"
            onChange={(term) => searchCountry(term.target.value)}
          />
          <select
            className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
            onChange={(val) => filterByRegion(val.target.value)}
          >
            <option>filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        {/* End of search and Filter Functionality */}

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
    </>
  );
}

export default Countries;
