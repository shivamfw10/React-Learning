import "./userform.css";
import "../style.css"

import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <section className="section-box">
      <h2>User Input Form</h2>
      <p>
        Build a form with useState to capture and display user input. For
        example, capture the user's name and display a greeting.
      </p>
      <div className="user-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your name:</label>
          <input
            id="username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <button type="submit">Submit</button>
        </form>
        {submittedName && <h2>Hello, {submittedName}!</h2>}
      </div>
    </section>
  );
};

export default UserForm;
