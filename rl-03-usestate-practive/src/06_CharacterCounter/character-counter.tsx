import { type ChangeEvent, useState } from "react";
import "./character-counter.css";
import "../style.css";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setCount(newText.length);
  };

  return (
    <section className="section-box">
      <h3>Character Counter</h3>
      <p>Develop a character counter for a text input field using the useState hook. It should display the number of characters as the user types.</p>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p className="count">Character Count: {count}</p>
    </section>
  );
}
export default CharacterCounter;