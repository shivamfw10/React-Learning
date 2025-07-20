import "./colorpicker.css";
import "../style.css"

import { useState, type ChangeEvent } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <section className="section-box">
      <h2>Color Picker</h2>
      <p>
        Create a color picker using useState to change the background color of a div based on the user's color selection.
      </p>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ width: "100px", height: "50px" }}
      />
      <div className="selected-color-box" style={{ background: color }}></div>
      <p>Selected Color: {color}</p>
    </section>
  );
}
export default ColorPicker;