import React, { useState } from "react";

function Header() {
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<ion-icon name="sunny-outline"></ion-icon> Light Mode'
  );

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

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-white overflow-x-hidden">
        {/* Header Section */}
        <div className="w-screen shadow-md py-6 pl-10 pr-14 bg-white dark:bg-gray-700 dark:text-white mb-16">
          <div className="flex container mx-auto">
            <h1 className="font-bold text-xl">Where in the world?</h1>
            <div className="ml-auto font-medium my-auto">
              <button
                onClick={() => toggleDarkMode()}
                dangerouslySetInnerHTML={{ __html: toggleBtn }}
              ></button>
            </div>
          </div>
        </div>
        {/* End of Header Section */}
      </div>
    </>
  );
}

export default Header;
