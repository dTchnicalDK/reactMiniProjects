import React, { useState } from "react";

const CountryStateSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Sample country and state data (you can replace this with actual data)
  const countries = [
    { code: "IN", name: "India" },
    { code: "US", name: "United States" },
    // Add more countries here
  ];

  const statesInIndia = [
    { code: "KA", name: "Karnataka" },
    { code: "MH", name: "Maharashtra" },
    // Add more Indian states here
  ];

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);

    // Reset the selected state when a new country is chosen
    setSelectedState("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <label htmlFor="countrySelect">Select a country:</label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select...</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry === "IN" && (
        <div>
          <label htmlFor="stateSelect">Select a state in India:</label>
          <select
            id="stateSelect"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select...</option>
            {statesInIndia.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountryStateSelector;
