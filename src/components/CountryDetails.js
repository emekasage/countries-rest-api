import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "./Url";

function CountryDetails() {
  const navigate = useNavigate();

  const goBackBtn = () => navigate("/");

  const [country, setCountry] = useState([]);
  const { name } = useParams();

  //   api call to fetch each country's data
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
        <div className="mb-24 overflow-hidden">
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

            return (
              <article
                key={numericCode}
                className="container block md:flex mx-auto p-8 pl-0 pr-0"
              >
                <img src={flag} alt={name} className="w-full md:w-1/2 px-8" />
                <div className="py-8 px-10">
                  <h2 className="font-bold text-2xl mb-8">{name}</h2>
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-20 md:gap-y-4">
                    <div className="space-y-3">
                      <p className="font-semibold">
                        Native Name:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {nativeName}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Population:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {population}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Region:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {region}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Sub Region:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {subregion}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Capital:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {capital}
                        </span>
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold">
                        Top Level Domain:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {topLevelDomain}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Currencies:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {typeof currencies !== "undefined" &&
                            currencies.map((cur) => cur.name)}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Languages:{" "}
                        <span className="dark:text-gray-300 text-gray-700 text-sm font-normal">
                          {languages.map((lang) => lang.name + ", ")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="block md:flex md:items-center py-14">
                    <h3 className="font-semibold">Border Countries: </h3>
                    <div className="space-x-3 my-3 md:my-0 md:ml-2">
                      {typeof borders !== "undefined" &&
                        borders.map((border) => {
                          return (
                            <ul
                              key={border}
                              className="inline-flex py-2.5 px-4 font-normal bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
                            >
                              <li>{border}</li>
                            </ul>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
