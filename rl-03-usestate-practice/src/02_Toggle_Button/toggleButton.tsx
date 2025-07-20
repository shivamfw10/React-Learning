import "./toggleButton.css";
import "../style.css"

import { useState } from "react";

const ToggleButtonFeature = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <section className="section-box">
      <h2>Toggle Button</h2>
      <p>Develop a toggle button that changes its state with the useState hook when clicked. It should change between "On" and "Off" states.</p>
      <button
        className={`toggle-btn ${isOn ? "on" : "off"}`}
        onClick={toggleButton}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </section>
  );
};
export default ToggleButtonFeature;
