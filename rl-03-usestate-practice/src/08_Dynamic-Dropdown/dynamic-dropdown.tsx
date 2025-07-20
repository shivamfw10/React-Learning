import { useState } from "react";
import "./dynamic-dropdown.css";
import { COUNTRY_CITY_DATA } from "./data";
import "../style.css";

const DynamicDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const cities = COUNTRY_CITY_DATA.find(
    (item) => item.country === selectedCountry
  )?.cities || [];

  return (
    <section className="section-box">
      <h3>Dynamic Dropdown</h3>
      <p>Create a dynamic dropdown menu that populates options based on user choices using the useState hook. For example, the user selects a country, and the next dropdown displays cities from that country.</p>
      <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
        Select a country to see its cities in the next dropdown.
      </p>
      <div className="dropdown-container">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {COUNTRY_CITY_DATA.map((item) => (
            <option key={item.country} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>
        <select
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedCountry}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      {selectedCountry && selectedCity && (
        <p>
          You selected <strong>{selectedCity}</strong> in <strong>{selectedCountry}</strong>.
        </p>
      )}
    </section>
  );
};

export default DynamicDropdown;
